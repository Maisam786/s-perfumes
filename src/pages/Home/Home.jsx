import Hero from "../../features/Home/Hero/Hero";
import FeaturedCollections from "../../features/Home/FeaturedCollections/FeaturedCollections";
import BestSellers from "../../features/Home/BestSellers/BestSellers";
import FragranceFinder from "../../features/Home/FragranceFinder/FragranceFinder";
import WhyChoose from "../../features/Home/WhyChoose/WhyChoose";
import LuxuryStats from "../../features/Home/LuxuryStats/LuxuryStats";
import LuxuryStory from "../../features/Home/LuxuryStory/LuxuryStory";
import Testimonials from "../../features/Home/Testimonials/Testimonials";
import InstagramGallery from "../../features/Home/InstagramGallery/InstagramGallery";
import Newsletter from "../../features/Home/Newsletter/Newsletter";

export default function Home() {

    return (

        <main className="home-page">

            {/* Hero */}

            <Hero />

            {/* Featured Collections */}

            <FeaturedCollections />

            {/* Best Sellers */}

            <BestSellers />

            {/* Fragrance Finder */}

            <FragranceFinder />

            {/* Why Choose Us */}

            <WhyChoose />

            {/* Luxury Statistics */}

            <LuxuryStats />

            {/* Brand Story */}

            <LuxuryStory />

            {/* Customer Testimonials */}

            <Testimonials />

            {/* Instagram Gallery */}

            <InstagramGallery />

            {/* Newsletter */}

            <Newsletter />

        </main>

    );

}