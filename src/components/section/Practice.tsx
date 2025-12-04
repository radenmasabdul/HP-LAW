import { useTranslation } from "react-i18next";
import { Button } from "@/common/componentShadcn/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/common/componentShadcn/ui/card"
import arrowIcon from "@/assets/icon-arrow.svg"
import bagIcon from "@/assets/icon-bag.svg"
import maskIcon from "@/assets/icon-mask.svg"
import pictureIcon from "@/assets/icon-picture.svg"
import companyIcon from "@/assets/icon-company.svg"
import bankIcon from "@/assets/icon-bank.svg"
import shoppeLogo from "@/assets/image-06.png"
import sinarMasLogo from "@/assets/image-07.png"
import aritaLogo from "@/assets/image-08.png"

export default function Practice() {
    const { t } = useTranslation();

  return (
    <main className="bg-black-deep">
        <section className="flex flex-col px-6 md:p-20 md:gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 py-4">
                <div>
                    <p className="text-4xl text-gold-medium fonts-inter font-semibold">{t("section_practice_areas.title")}</p>
                </div>
                <div className="py-6 md:py-2">
                    <p className="text-white text-base text-justify fonts-inter">{t("section_practice_areas.description")}</p>
                </div>
            </div>

            <div className="flex flex-col md:grid md:grid-rows-2 md:py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-6">
                    <Card className="bg-black-medium border-black-medium rounded-none">
                        <CardHeader>
                            <img src={bagIcon} alt="bag-icon" />
                        </CardHeader>
                        <CardContent className="text-start">
                            <p className="text-2xl text-white font-bold fonts-inter">{t("section_practice_areas.content.commercial.title")}</p>
                        </CardContent>
                        <CardFooter>
                            <CardAction className="text-start">
                                <p className="text-base text-white font-normal fonts-inter">{t("section_practice_areas.content.commercial.description")}</p>
                            </CardAction>
                        </CardFooter>
                    </Card>

                    <Card className="bg-black-medium border-black-medium rounded-none">
                        <CardHeader>
                            <img src={maskIcon} alt="bag-icon" />
                        </CardHeader>
                        <CardContent className="text-start">
                            <p className="text-2xl text-white font-bold fonts-inter">{t("section_practice_areas.content.criminal.title")}</p>
                        </CardContent>
                        <CardFooter>
                            <CardAction className="text-start">
                                <p className="text-base text-white font-normal fonts-inter">{t("section_practice_areas.content.criminal.description")}</p>
                            </CardAction>
                        </CardFooter>
                    </Card>

                    <Card className="bg-black-medium border-black-medium rounded-none">
                        <CardHeader>
                            <img src={pictureIcon} alt="bag-icon" />
                        </CardHeader>
                        <CardContent className="text-start">
                            <p className="text-2xl text-white font-bold fonts-inter">{t("section_practice_areas.content.intellectual.title")}</p>
                        </CardContent>
                        <CardFooter>
                            <CardAction className="text-start">
                                <p className="text-base text-white font-normal fonts-inter">{t("section_practice_areas.content.intellectual.description")}</p>
                            </CardAction>
                        </CardFooter>
                    </Card>                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 md:py-4 max-w-4xl mx-auto">
                    <Card className="bg-black-medium border-black-medium rounded-none">
                        <CardHeader>
                            <img src={companyIcon} alt="bag-icon" />
                        </CardHeader>
                        <CardContent className="text-start">
                            <p className="text-2xl text-white font-bold fonts-inter">{t("section_practice_areas.content.mergers.title")}</p>
                        </CardContent>
                        <CardFooter>
                            <CardAction className="text-start">
                                <p className="text-base text-white font-normal fonts-inter">{t("section_practice_areas.content.mergers.description")}</p>
                            </CardAction>
                        </CardFooter>
                    </Card>

                    <Card className="bg-black-medium border-black-medium rounded-none">
                        <CardHeader>
                            <img src={bankIcon} alt="bag-icon" />
                        </CardHeader>
                        <CardContent className="text-start">
                            <p className="text-2xl text-white font-bold fonts-inter">{t("section_practice_areas.content.banking.title")}</p>
                        </CardContent>
                        <CardFooter>
                            <CardAction className="text-start">
                                <p className="text-base text-white font-normal fonts-inter">{t("section_practice_areas.content.banking.description")}</p>
                            </CardAction>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <div className="grid grid-cols justify-center items-center text-center pb-6 md:py-4">
                <Button asChild className="bg-gold-medium hover:bg-gold-medium text-white rounded-none">
                    <a href="/practice" className="flex items-center gap-2">
                        <span className="text-sm fonts-inter text-black">{t("section_practice_areas.see_more")}</span>
                        <img src={arrowIcon} alt="arrow-icon" />
                    </a>
                </Button>
            </div>
        </section>

        <section className="flex flex-col px-6 py-4 md:px-20 md:py-2 gap-4 md:gap-10">
            <div className="text-center max-w-xl mx-auto">
                <p className="text-4xl text-gold-medium fonts-inter font-semibold">{t("section_practice_areas.our_client")}</p>
                <p className="text-white text-base fonts-inter py-2">{t("section_practice_areas.our_client_description")}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center py-4">
                <img src={shoppeLogo} alt="shoppe-logo" />
                <img src={sinarMasLogo} alt="sinarmas-logo" />
                <img src={aritaLogo} alt="arita-logo" className="col-span-2 md:col-span-1 w-32 md:w-fit"/>
            </div>
        </section>
    </main>
  )
}