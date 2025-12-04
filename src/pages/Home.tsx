import HomeSection from "@/components/section/HomeSection"
import AboutSection from "@/components/section/AboutSection";
import Practice from "@/components/section/Practice";
import OurSection from "@/components/section/OurSection";
import LegalSection from "@/components/section/LegalSection";
import ConsultationForm from "@/components/section/ConsultationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HomeSection/>
      <AboutSection/>
      <Practice/>
      <OurSection/>
      <LegalSection/>
      <ConsultationForm/>
      <Footer/>
    </>
  )
}