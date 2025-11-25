import { useTranslation } from "react-i18next";
import { Button } from "@/common/componentShadcn/ui/button";
import arrowIcon from "@/assets/icon-arrow.svg";
import statueIcon from "@/assets/image-03.jpg"
import homeIcon from "@/assets/image-04.jpg";
import lobbyIcon from "@/assets/image-05.jpg";
import checkIcon from "@/assets/icon-check.svg";
import logoIcon from "@/assets/logo.png";
import backgroundImage from "@/assets/image-62.png"
import quoteIcon from "@/assets/icon-quote.svg";

export default function AboutSection() {
    const { t } = useTranslation();

  return (
    <main className="bg-black-deep">
      <section className="flex flex-col md:flex-row px-6 py-4 md:p-20">
        <div className="md:w-3/4 mb-8 md:mb-0">
          <p className="text-4xl text-gold-medium fonts-inter font-semibold">
            {t("section_about_us.title")}
          </p>
        </div>

        <div className="flex flex-col md:justify-between">
          <div className="flex flex-col md:flex-row text-center md:divide-x md:divide-black-light">
            <div className="flex flex-col items-center mb-6 md:mb-0 md:pr-20">
              <p className="text-gold-medium text-6xl font-extrabold fonts-inter">20+</p>
              <p className="text-white text-2xl fonts-inter">{t("section_about_us.practice_area")}</p>
            </div>

            <div className="flex flex-col items-center mb-6 md:mb-0 md:px-20">
              <p className="text-gold-medium text-6xl font-extrabold fonts-inter">7+</p>
              <p className="text-white text-2xl fonts-inter">{t("section_about_us.years_of_experience")}</p>
            </div>

            <div className="flex flex-col items-center md:pl-20">
              <p className="text-gold-medium text-6xl font-extrabold fonts-inter">5+</p>
              <p className="text-white text-2xl fonts-inter">{t("section_about_us.experienced_lawyers")}</p>
            </div>
          </div>

          <div>
            <p className="text-white text-base text-justify my-4 md:my-10 fonts-inter">
              {t("section_about_us.description")}
            </p>

            <Button
              asChild
              className="bg-gold-medium hover:bg-gold-medium text-white rounded-none"
            >
              <a href="/about" className="flex items-center gap-2">
                <span className="text-sm fonts-inter text-black">{t("section_about_us.see_more")}</span>
                <img src={arrowIcon} alt="arrow-icon" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row px-6 py-4 md:px-20 md:py-10">
        <div className="md:w-auto">
          <img src={statueIcon} alt="statue-icon" className="max-w-sm w-full h-auto object-cover"/>
        </div>

        <div className="md:ml-10">
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <img src={homeIcon} alt="home-icon" />
            <img src={lobbyIcon} alt="lobby-icon" />
          </div>

          <div className="py-8">
            <div className="flex items-center gap-2 py-2">
              <img src={checkIcon} alt="check-icon"/>
              <p className="text-white">{t("section_about_us.detail.title_protecting")}</p>
            </div>

            <div className="flex items-center gap-2 py-2">
              <img src={checkIcon} alt="check-icon" />
              <p className="text-white">{t("section_about_us.detail.title_providing")}</p>
            </div>

            <div className="flex items-center gap-2 py-2">
              <img src={checkIcon} alt="check-icon"/>
              <p className="text-white">{t("section_about_us.detail.title_tailored")}</p>
            </div>

            <div className="flex items-center gap-2 py-2">
              <img src={checkIcon} alt="check-icon"/>
              <p className="text-white">{t("section_about_us.detail.title_experience")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 md:px-20">
        <div className="rounded-full bg-cover bg-black-medium hidden md:block" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="px-20 py-10">
            <div className="flex">
              <div className="w-64 flex-none">
                <img src={logoIcon} alt="icon-loog"/>
              </div>

              <div className="flex items-start gap-8 py-5">
                <img src={quoteIcon} alt="icon-quote" />
                <p className="text-white text-5xl font-light fonts-inter">
                  {t("section_about_us.detail.quotes_client")}
                  <span className="text-white text-5xl font-bold fonts-inter">{""} {t("section_about_us.detail.quotes_description")}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden flex flex-col items-start gap-4 py-4">
          <img src={quoteIcon} alt="icon-quote" className="w-10 h-10" />
            <p className="text-white text-2xl font-light fonts-inter leading-snug"> {t("section_about_us.detail.quotes_client")}
              <span className="font-bold">
                {""} {t("section_about_us.detail.quotes_description")}
              </span>
            </p>
        </div>
      </section>
    </main>
  );
}
