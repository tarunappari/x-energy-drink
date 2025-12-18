import Navbar from "@/components/common/Navbar";
import LandingSection from "@/components/landingpage/HeroSection";
import { HeroSection } from "@/components/landingpage/HeroVersion2";
import { Header } from "@/components/ui/header-2";


export default function Home() {
  return (
    <div className="relative ">
      <Navbar />
      <HeroSection />
    </div>
  )
}
