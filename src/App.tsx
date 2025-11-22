import { ModeToggle } from "./common/componentShadcn/theme/ModelToggle"
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
    <ModeToggle/>
    <div className="p-4">
      <h1 className="text-3xl font-bold fonts-inter">{t("welcome")}</h1>
      <button
        onClick={() => i18n.changeLanguage(i18n.language === "id" ? "en" : "id")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {i18n.language === "id" ? "Switch to English" : "Ganti ke Bahasa"}
      </button>
    </div>  
    </>
  )
}

export default App