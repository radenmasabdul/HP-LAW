import Layout from "@/components/layout/Layout"
import HomeSection from "@/components/section/HomeSection"
import AboutSection from "@/components/section/AboutSection";
import Practice from "@/components/section/Practice";

export default function Home() {
  return (
    <>
    <Layout>
      <HomeSection/>
      <AboutSection/>
      <Practice/>
    </Layout>
    </>
  )
}