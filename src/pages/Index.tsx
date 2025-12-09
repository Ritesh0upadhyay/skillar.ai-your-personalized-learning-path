import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ValuePropsSection } from "@/components/home/ValuePropsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { CommunitySection } from "@/components/home/CommunitySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValuePropsSection />
      <HowItWorksSection />
      <CommunitySection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
