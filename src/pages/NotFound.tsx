import { useTranslation } from "react-i18next";
import { Button } from "@/common/componentShadcn/ui/button";

export default function NotFound() {
    const { t } = useTranslation();

  return (
    <main className="bg-black-deep min-h-screen flex justify-center items-center">
      <section className="text-center space-y-4 px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold fonts-inter">404</h1>
        <p className="text-white text-2xl md:text-3xl font-bold fonts-inter">{t("not_found.title")}</p>
        <p className="text-grey-light text-base md:text-lg font-normal fonts-inter">
            {t("not_found.description")}
        </p>
        <Button
          asChild
          className="bg-gold-medium hover:bg-gold-medium text-white rounded-none mt-4"
        >
          <a href="/" className="flex items-center justify-center gap-2 px-4 py-2">
            <span className="text-sm md:text-base fonts-inter text-black">{t("not_found.home")}</span>
          </a>
        </Button>
      </section>
    </main>
  )
}
