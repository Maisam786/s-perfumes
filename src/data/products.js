const products = [

    {
        id: 1,

        /* =====================================================
           BASIC PRODUCT IDENTITY
        ===================================================== */

        slug: "Arham",

        name: "Arham",

        brand: "S.",

        category: "Men Collection",

        sku: "S-RO-001",


        /* =====================================================
           PRODUCT VARIANTS
        ===================================================== */

        gender: "Male",

        volume: "50ml",

        sizes: [
            "30ml",
            "50ml",
            "100ml",
        ],


        /* =====================================================
           IMAGES
        ===================================================== */

        image: "/products/Arham.webp",

        images: [
            "/products/Arham.webp",
            "/products/Arham-2.jpg",
            "/products/Arham-3.jpg",
        ],


        /* =====================================================
           PRICING
        ===================================================== */

        price: 2600,

        oldPrice: 4000,

        discount: 35,


        /* =====================================================
           INVENTORY
        ===================================================== */

        stock: 25,

        inStock: true,


        /* =====================================================
           STORE STATUS
        ===================================================== */

        featured: true,

        bestseller: true,

        newArrival: false,

        limitedEdition: false,

        signature: true,


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        shortDescription:
            "A rich and sophisticated oud fragrance with warm amber and precious spices.",

        description:
            "Royal Oud is an elegant oriental fragrance crafted with luxurious oud wood, warm amber and precious spices. Rich, bold and unforgettable, it is created for those who appreciate timeless sophistication.",


        /* =====================================================
           FRAGRANCE NOTES
        ===================================================== */

        topNotes: [
            "Bergamot",
            "Pink Pepper",
            "Saffron",
        ],

        middleNotes: [
            "Oud Wood",
            "Rose",
            "Patchouli",
        ],

        baseNotes: [
            "Amber",
            "Vanilla",
            "Musk",
            "Sandalwood",
        ],


        /* =====================================================
           FRAGRANCE FAMILIES
        ===================================================== */

        families: [
            "Oud",
            "Woody",
            "Amber",
        ],


        /* =====================================================
           RECOMMENDATION DATA
           Used by FragranceFinder
        ===================================================== */

        occasions: [
            "Office",
            "Wedding",
            "Party",
            "Evening",
        ],

        seasons: [
            "Winter",
            "Autumn",
        ],

        wearTime: "Night",

        personality: [
            "Elegant",
            "Bold",
            "Luxury",
        ],

        mood: [
            "Confident",
            "Royal",
            "Sophisticated",
        ],

        ageGroup: "25+",

        budget: "Premium",


        /* =====================================================
           PERFORMANCE
        ===================================================== */

        longevity: "10-12 Hours",

        longevityLevel: "Very Long",

        projection: "Strong",

        projectionLevel: "Strong",

        concentration: "Extrait de Parfum",


        /* =====================================================
           RATINGS
        ===================================================== */

        rating: 4.9,

        reviews: 186,


        /* =====================================================
           REVIEWS
        ===================================================== */

        reviewsData: [

            {
                id: 1,
                name: "Ahmed Khan",
                avatar: "/avatars/ahmed.jpg",
                country: "Pakistan",
                helpful: 18,
                verified: true,
                rating: 5,
                date: "12 Jul 2026",
                comment:
                    "Absolutely outstanding. The oud is rich, smooth and lasts all day. One of the finest fragrances I've purchased.",
            },

            {
                id: 2,
                name: "Bilal Ahmad",
                avatar: "/avatars/bilal.jpg",
                country: "Pakistan",
                helpful: 15,
                verified: true,
                rating: 5,
                date: "08 Jul 2026",
                comment:
                    "Luxury packaging and an unforgettable scent. I received compliments within the first hour.",
            },

            {
                id: 3,
                name: "Usman Ali",
                avatar: "/avatars/usman.jpg",
                country: "Pakistan",
                helpful: 11,
                verified: true,
                rating: 4,
                date: "03 Jul 2026",
                comment:
                    "Elegant and powerful without being overwhelming. Perfect for evening wear.",
            },

        ],
    },


    /* =========================================================
       PRODUCT 2
    ========================================================= */

    {
        id: 2,

        slug: "Ghuryan",

        name: "Ghuryan",

        brand: "S.",

        category: "Men Collection",

        sku: "S-MN-002",


        gender: "Men",

        volume: "50ml",

        sizes: [
            "30ml",
            "50ml",
            "100ml",
        ],


        image: "/products/Ghuryan.webp",

        images: [
            "/products/Ghuryan.webp",
            "/products/Ghuryan-2.webp",
            "/products/Ghuryan-3.jpg",
        ],


        price: 3500,

        oldPrice: 5000,

        discount: 30,


        stock: 30,

        inStock: true,


        featured: true,

        bestseller: false,

        newArrival: true,

        limitedEdition: false,

        signature: false,


        shortDescription:
            "A fresh and masculine fragrance combining citrus, smoky woods and musk.",

        description:
            "Midnight Noir combines fresh citrus with smoky woods and musk, creating a masculine fragrance that is powerful yet refined.",


        topNotes: [
            "Lemon",
            "Grapefruit",
            "Black Pepper",
        ],

        middleNotes: [
            "Lavender",
            "Cedarwood",
            "Nutmeg",
        ],

        baseNotes: [
            "Vetiver",
            "Amber",
            "Musk",
        ],


        families: [
            "Fresh",
            "Citrus",
            "Woody",
        ],


        occasions: [
            "Daily",
            "Office",
            "Party",
            "Evening",
        ],

        seasons: [
            "Spring",
            "Summer",
            "Autumn",
        ],

        wearTime: "Day",

        personality: [
            "Confident",
            "Modern",
            "Refined",
        ],

        mood: [
            "Fresh",
            "Energetic",
            "Masculine",
        ],

        ageGroup: "18+",

        budget: "PKR 5,000–10,000",


        longevity: "7-9 Hours",

        longevityLevel: "Long",

        projection: "Moderate",

        projectionLevel: "Moderate",

        concentration: "Eau de Parfum",


        rating: 4.8,

        reviews: 144,


        reviewsData: [],
    },


    /* =========================================================
       PRODUCT 3
    ========================================================= */

    {
        id: 3,

        slug: "Gucci Flora",

        name: "Gucci Flora",

        brand: "S.",

        category: "Women Collection",

        sku: "S-VR-003",


        gender: "Women",

        volume: "50ml",

        sizes: [
            "30ml",
            "50ml",
            "100ml",
        ],


        image: "/products/Gucci-Flora.jpg",

        images: [
            "/products/Gucci-Flora.jpg",
            "/products/Gucci-Flora-2.jpg",
            "/products/Gucci-Flora-3.jpg",
        ],


        price: 2000,

        oldPrice: 4000,

        discount: 50,


        stock: 20,

        inStock: true,


        featured: true,

        bestseller: true,

        newArrival: false,

        limitedEdition: false,

        signature: true,


        shortDescription:
            "A soft floral fragrance with rose, vanilla and white musk.",

        description:
            "Velvet Rose is an elegant floral fragrance blending fresh rose petals with creamy vanilla and soft white musk for a luxurious feminine scent.",


        topNotes: [
            "Rose",
            "Pear",
            "Mandarin",
        ],

        middleNotes: [
            "Jasmine",
            "Peony",
            "Rose Absolute",
        ],

        baseNotes: [
            "Vanilla",
            "White Musk",
            "Amber",
        ],


        families: [
            "Floral",
            "Sweet",
            "Fresh",
        ],


        occasions: [
            "Daily",
            "Date",
            "Wedding",
            "Party",
        ],

        seasons: [
            "Spring",
            "Summer",
        ],

        wearTime: "Day",

        personality: [
            "Romantic",
            "Elegant",
            "Soft",
        ],

        mood: [
            "Romantic",
            "Feminine",
            "Warm",
        ],

        ageGroup: "18+",

        budget: "PKR 5,000–10,000",


        longevity: "8-10 Hours",

        longevityLevel: "Long",

        projection: "Moderate",

        projectionLevel: "Moderate",

        concentration: "Eau de Parfum",


        rating: 4.9,

        reviews: 211,


        reviewsData: [],
    },


    /* =========================================================
       PRODUCT 4
    ========================================================= */

    {
        id: 4,

        slug: "Al-Hassan",

        name: "Al-Hassan",

        brand: "S.",

        category: "Arabic Collection",

        sku: "S-AP-004",


        gender: "Unisex",

        volume: "50ml",

        sizes: [
            "30ml",
            "50ml",
            "100ml",
        ],


        image: "/products/Al-Hassan.webp",

        images: [
            "/products/Al-Hassan.webp",
            "/products/Al-Hassan-2.webp",
            "/products/Al-Hassan-3.webp",
        ],


        price: 4920,

        oldPrice: 6000,

        discount: 18,


        stock: 10,

        inStock: true,


        featured: true,

        bestseller: false,

        newArrival: false,

        limitedEdition: true,

        signature: true,


        shortDescription:
            "A luxurious amber fragrance with warm woods, vanilla and musk.",

        description:
            "Amber Prestige is a luxurious signature perfume with rich amber, smooth vanilla and warm woody accords that leave an unforgettable impression.",


        topNotes: [
            "Cardamom",
            "Orange Blossom",
            "Bergamot",
        ],

        middleNotes: [
            "Amber",
            "Tonka Bean",
            "Rose",
        ],

        baseNotes: [
            "Sandalwood",
            "Vanilla",
            "Musk",
        ],


        families: [
            "Amber",
            "Woody",
            "Sweet",
        ],


        occasions: [
            "Wedding",
            "Party",
            "Evening",
            "Office",
        ],

        seasons: [
            "Autumn",
            "Winter",
        ],

        wearTime: "Night",

        personality: [
            "Luxury",
            "Elegant",
            "Sophisticated",
        ],

        mood: [
            "Warm",
            "Confident",
            "Royal",
        ],

        ageGroup: "25+",

        budget: "Premium",


        longevity: "10-12 Hours",

        longevityLevel: "Very Long",

        projection: "Strong",

        projectionLevel: "Strong",

        concentration: "Eau de Parfum",


        rating: 5.0,

        reviews: 94,


        reviewsData: [],
    },

];


export default products;