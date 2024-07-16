import About from "@/components/custom/landing/About";
import Explore from "@/components/custom/landing/Explore";
import Faq from "@/components/custom/landing/Faq";
import Features from "@/components/custom/landing/Features";
import Hero from "@/components/custom/landing/Hero";
import Subscribe from "@/components/custom/landing/Subscribe";
import Team from "@/components/custom/landing/Team";
import Testimonials from "@/components/custom/landing/Testimonials";
import Tools from "@/components/custom/landing/Tools";
import SiteLayout from "@/components/custom/layout/site/SiteLayout";

export default function Home() {
  console.log("KEY", process.env.NEXT_API_KEY);
  return (
    <SiteLayout>
      <Hero />
      {/* <About /> */}
      <Tools />
      <Features />
      {/* <Explore /> */}
      {/* <Team />. */}
      {/* <Testimonials /> */}
      <Faq />
      <Subscribe />
    </SiteLayout>
  );
}
