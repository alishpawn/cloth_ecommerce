import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
// import BrandStory from "@/components/BrandStory";
import InstagramCTA from "@/components/InstagramCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      {/*<BrandStory />*/}
      <InstagramCTA />
    </>
  );
}
