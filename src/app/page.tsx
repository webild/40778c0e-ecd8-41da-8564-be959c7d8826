use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarStyleApple
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'Footer', id: 'footer' }
        ]}
        logoSrc="/images/logo.svg"
        logoAlt="EcoLifestyle"
        brandName="EcoLifestyle"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to Eco-Friendly Living"
          description="Discover sustainable products and practices for a greener lifestyle."
          primaryButtonText="Join Us"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About EcoLifestyle"
          descriptions={[
            "EcoLifestyle is dedicated to promoting sustainable living and eco-friendly products.",
            "Join our community to learn more about eco-friendly practices and share your journey."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="reveal"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics Overview"
          description="Explore the financial model behind EcoLifestyle."
          kpiItems={[
            { value: "200", description: "Tokens in circulation" },
            { value: "50K", description: "Community members" },
            { value: "$1M", description: "Funding raised" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          columns={[
            { title: "Links", items: [
              { label: "Home", onClick: () => {} },
              { label: "About", onClick: () => {} },
              { label: "Contact", onClick: () => {} }
            ] },
            { title: "Support", items: [
              { label: "Help", onClick: () => {} },
              { label: "Feedback", onClick: () => {} }
            ] },
            { title: "Legal", items: [
              { label: "Privacy Policy", onClick: () => {} },
              { label: "Terms of Service", onClick: () => {} }
            ] }
          ]}
          copyrightText="© 2023 EcoLifestyle"
          onPrivacyClick={() => {}} 
        />
      </div>
    </SiteThemeProvider>
  );
}
