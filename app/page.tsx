import About from "@/components/custom/landing/About";
import Explore from "@/components/custom/landing/Explore";
import Faq from "@/components/custom/landing/Faq";
import Features from "@/components/custom/landing/Features";
import Hero from "@/components/custom/landing/Hero";
import Subscribe from "@/components/custom/landing/Subscribe";
import Team from "@/components/custom/landing/Team";
import Testimonials from "@/components/custom/landing/Testimonials";
import Tools from "@/components/custom/landing/Tools";
import Footer from "@/components/custom/layout/site/Footer";
import Header from "@/components/custom/layout/site/Header";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <Header/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
        <Hero />
        <About/>
        <Tools/>
        <Features/>
        <Explore/>
        <Team/>
        <Testimonials/>
        <Faq/>
        <Subscribe/>        
      </main>
      <Footer/>
    </>
  );
}
