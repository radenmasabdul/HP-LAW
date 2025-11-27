import Layout from "@/components/layout/Layout"
import HomeSection from "@/components/section/HomeSection"
import AboutSection from "@/components/section/AboutSection";
import Practice from "@/components/section/Practice";
import OurSection from "@/components/section/OurSection";

export default function Home() {
  return (
    <>
    <Layout>
      <HomeSection/>
      <AboutSection/>
      <Practice/>
      <OurSection/>
    </Layout>
    </>
  )
}