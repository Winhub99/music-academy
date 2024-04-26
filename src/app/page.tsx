import HeroSection from "@/components/ui/HeroSection";
import Image from "next/image";
import FeaturedCourses from "@/components/FeaturedCourses"
import courseData from "@/data/music_academy.json" 
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs/>
    </main>
  );
}
