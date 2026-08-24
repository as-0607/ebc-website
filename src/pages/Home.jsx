import Navbar  from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import  CredibilityStrip from "../components/home/CredibilityStrip";
import  OwnerSection  from "../components/home/OwnerSection";
import  WhatEbcDoes  from "../components/home/WhatEbcDoes";
import  FeaturedProjects  from "../components/home/FeaturedProjects";
import  TechnicalExpertise  from "../components/home/TechnicalExpertise";
import  StatementBand  from "../components/home/StatementBand";
import  GlobalPresence  from "../components/home/GlobalPresence";
import  StandardsSection from "../components/home/StandardsSection";
import  CTASection  from "../components/CTASection";
import  SiteFooter  from "../components/SiteFooter";

export default function Home() {
  return (
    <>
      <Navbar overHero={true} />
      <main>
        <HeroSlider />
        <CredibilityStrip />
        <OwnerSection />
        <WhatEbcDoes />
        <FeaturedProjects/>
        <TechnicalExpertise/>
        <StatementBand/>
        <GlobalPresence/>
        <StandardsSection/>
        <CTASection/>
      </main>
      <SiteFooter/>
    </>
  );
}
