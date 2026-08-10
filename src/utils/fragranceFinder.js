/*
=========================================================
S. FRAGRANCE FINDER — RECOMMENDATION ENGINE
=========================================================

This engine does NOT invent products.

It only recommends products that already exist
inside products.js.

The engine calculates a compatibility score based
on the customer's preferences.
=========================================================
*/

const normalize = (value) =>
    String(value || "")
        .trim()
        .toLowerCase();


const normalizeArray = (value) => {

    if (Array.isArray(value)) {
        return value.map(normalize);
    }

    if (value) {
        return [normalize(value)];
    }

    return [];
};


/*
=========================================================
BUDGET MATCHING
=========================================================
*/

function matchesBudget(product, selectedBudget) {

    const price = Number(product.price || 0);

    switch (selectedBudget) {

        case "Under PKR 5,000":
            return price < 5000;

        case "PKR 5,000–10,000":
            return price >= 5000 && price <= 10000;

        case "Premium":
            return (
                normalize(product.budget) === "premium" ||
                price > 10000
            );

        default:
            return true;
    }
}


/*
=========================================================
GENDER MATCHING
=========================================================
*/

function genderScore(product, selectedGender) {

    if (!selectedGender) {
        return 0;
    }

    const productGender = normalize(product.gender);
    const requestedGender = normalize(selectedGender);

    if (productGender === requestedGender) {
        return 1;
    }

    if (productGender === "unisex") {
        return 0.75;
    }

    return 0;
}


/*
=========================================================
OCCASION MATCHING
=========================================================
*/

function occasionScore(product, selectedOccasion) {

    if (!selectedOccasion) {
        return 0;
    }

    const occasions = normalizeArray(product.occasions);
    const requested = normalize(selectedOccasion);

    if (occasions.includes(requested)) {
        return 1;
    }

    /*
    Some occasions are semantically close.
    */

    const relatedOccasions = {

        daily: [
            "daily",
            "office",
        ],

        office: [
            "office",
            "daily",
        ],

        party: [
            "party",
            "evening",
        ],

        wedding: [
            "wedding",
            "party",
            "evening",
        ],

    };

    const related = relatedOccasions[requested] || [];

    if (
        related.some((item) =>
            occasions.includes(item)
        )
    ) {
        return 0.65;
    }

    return 0;
}


/*
=========================================================
FRAGRANCE FAMILY MATCHING
=========================================================
*/

function familyScore(product, selectedFamily) {

    if (!selectedFamily) {
        return 0;
    }

    const requested = normalize(selectedFamily);

    const families = [
        ...normalizeArray(product.families),
        ...normalizeArray(product.family),
    ];

    if (families.includes(requested)) {
        return 1;
    }

    /*
    Related fragrance families.
    */

    const relatedFamilies = {

        oud: [
            "oud",
            "woody",
            "amber",
        ],

        woody: [
            "woody",
            "oud",
            "amber",
        ],

        sweet: [
            "sweet",
            "vanilla",
            "floral",
            "amber",
        ],

        floral: [
            "floral",
            "rose",
        ],

        fresh: [
            "fresh",
            "citrus",
        ],

        citrus: [
            "citrus",
            "fresh",
        ],

    };

    const related =
        relatedFamilies[requested] || [];

    if (
        related.some((item) =>
            families.includes(item)
        )
    ) {
        return 0.6;
    }

    return 0;
}


/*
=========================================================
BUDGET SCORE
=========================================================
*/

function budgetScore(product, selectedBudget) {

    if (!selectedBudget) {
        return 0;
    }

    return matchesBudget(
        product,
        selectedBudget
    )
        ? 1
        : 0;
}


/*
=========================================================
OVERALL SCORE
=========================================================

Weights:

Gender      15%
Occasion    30%
Family      35%
Budget      20%

Family and occasion have the strongest influence
because they are more meaningful for fragrance discovery.
=========================================================
*/

function calculateScore(product, preferences) {

    const gender =
        genderScore(
            product,
            preferences.gender
        );

    const occasion =
        occasionScore(
            product,
            preferences.occasion
        );

    const family =
        familyScore(
            product,
            preferences.family
        );

    const budget =
        budgetScore(
            product,
            preferences.budget
        );

    const weightedScore =
        gender * 15 +
        occasion * 30 +
        family * 35 +
        budget * 20;

    return Math.round(weightedScore);
}


/*
=========================================================
MATCH EXPLANATION
=========================================================
*/

function createReason(product, preferences) {

    const reasons = [];

    if (
        genderScore(
            product,
            preferences.gender
        ) >= 0.75
    ) {
        reasons.push(
            `${product.gender} fragrance`
        );
    }

    if (
        occasionScore(
            product,
            preferences.occasion
        ) >= 0.65
    ) {
        reasons.push(
            `well suited for ${preferences.occasion.toLowerCase()}`
        );
    }

    if (
        familyScore(
            product,
            preferences.family
        ) >= 0.6
    ) {
        reasons.push(
            `${preferences.family.toLowerCase()} fragrance profile`
        );
    }

    if (
        budgetScore(
            product,
            preferences.budget
        )
    ) {
        reasons.push(
            "within your selected budget"
        );
    }

    if (reasons.length === 0) {
        return "A versatile option from the S. collection.";
    }

    if (reasons.length === 1) {
        return `Selected because it offers a ${reasons[0]}.`;
    }

    if (reasons.length === 2) {
        return `Selected for its ${reasons[0]} and ${reasons[1]}.`;
    }

    return `Selected for its ${reasons
        .slice(0, -1)
        .join(", ")} and ${reasons[reasons.length - 1]}.`;
}


/*
=========================================================
MAIN RECOMMENDATION FUNCTION
=========================================================
*/

export function findFragranceRecommendations(
    products,
    preferences
) {

    if (!Array.isArray(products)) {
        return [];
    }

    const rankedProducts = products
        .filter((product) => product.stock !== 0)
        .map((product) => {

            const score =
                calculateScore(
                    product,
                    preferences
                );

            return {
                product,

                score,

                reason:
                    createReason(
                        product,
                        preferences
                    ),
            };

        })
        .sort((a, b) => {

            /*
            Highest score first.

            If scores are equal,
            higher rated product wins.
            */

            if (b.score !== a.score) {
                return b.score - a.score;
            }

            return (
                Number(b.product.rating || 0) -
                Number(a.product.rating || 0)
            );

        });

    return rankedProducts;
}


/*
=========================================================
TOP RECOMMENDATIONS
=========================================================
*/

export function getTopFragranceRecommendations(
    products,
    preferences,
    limit = 3
) {

    return findFragranceRecommendations(
        products,
        preferences
    ).slice(0, limit);
}