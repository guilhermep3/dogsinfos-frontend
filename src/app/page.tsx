import { Header } from "@/components/layout/header";
import { DogsSection } from "@/components/layout/dogsSection";
import { HeroSection } from "@/components/layout/heroSection";
import { AdoptSection } from "@/components/layout/adoptSection";
export default function Page() {

  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <AdoptSection />
      <DogsSection />
    </div>
  )
}