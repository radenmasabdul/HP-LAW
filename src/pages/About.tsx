import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/common/componentShadcn/ui/card"
import Layout from "@/components/layout/Layout"
import image24 from "@/assets/image-24.png"
import image25 from "@/assets/image-25.jpg"
import image26 from "@/assets/image-26.png"
import image27 from "@/assets/image-27.png"
import image28 from "@/assets/image-28.png"
import image29 from "@/assets/image-29.png"
import image30 from "@/assets/image-30.png"
import image31 from "@/assets/image-31.png"

interface Data {
  name: string;
  label: string;
}

interface CoreValues {
  img: string;
  label: string;
}

const cardData: Data[] = [
  { name: "20+", label: "section_about_us.practice_area" },
  { name: "7+", label: "section_about_us.years_of_experience" },
  { name: "5+", label: "section_about_us.experienced_lawyers" },
]

const coreValues: CoreValues[] = [
  { img: image26, label: "section_about_us.values.client" },
  { img: image27, label: "section_about_us.values.trust" },
  { img: image28, label: "section_about_us.values.effective" },
  { img: image29, label: "section_about_us.values.efficient" },
  { img: image30, label: "section_about_us.values.proactive" },
  { img: image31, label: "section_about_us.values.communicative" },
]

export default function About() {
  const { t } = useTranslation();
  const paragrafClass = `text-base text-grey-medium font-normal fonts-inter text-justify pb-1`

  return (
    <Layout>
      <main className="bg-black-deep">
        <section className="flex flex-col">
          <div className="relative w-full h-[600px] md:h-full">
            <img src={image24} alt="image-24" className="w-full h-full object-cover filter grayscale" />
          </div>

          <div className="px-6 py-4 md:px-20 md:py-10">
            <div className="flex justify-center">
              <p className="text-4xl md:text-6xl text-gold-medium font-extrabold fonts-inter uppercase text-center">
                {t("section_about_us.title")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 md:py-10">
              {cardData.map((item, i) => (
                <Card key={i} className="bg-black-medium border-black-medium rounded-none">
                  <CardContent className="text-center">
                    <p className="text-4xl md:text-6xl text-gold-medium font-extrabold fonts-inter">
                      {item.name}
                    </p>
                    <p className="text-xl md:text-2xl text-white font-normal fonts-inter mt-4">
                      {t(item.label)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div>
                <img src={image25} alt="image-25"/>
              </div>

              <div className="md:flex-1">
                <p className={paragrafClass}>
                  <strong>{t("section_about_us.text.1")}</strong>{t("section_about_us.text.2")}
                </p>

                <p className={paragrafClass}>
                  {t("section_about_us.text.3")}
                </p>

                <p className={paragrafClass}>
                  {t("section_about_us.text.4")}
                </p>

                <p className={paragrafClass}>
                  {t("section_about_us.text.5")}
                </p>
              </div>
            </div>

            <div className="pt-5 md:pt-10">
              <div className="flex justify-center">
                <p className="text-2xl md:text-4xl text-gold-medium font-semibold fonts-inter text-center">
                  {t("section_about_us.values.title")}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-6 gap-6 py-10">
                {coreValues.map((v, i) => (
                  <div key={i} className="flex flex-col items-center text-center space-y-4">
                    <img src={v.img} alt={v.label}/>
                    <p className="text-base md:text-2xl text-white fonts-inter font-normal">
                      {t(v.label)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
