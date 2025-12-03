import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
 } from "@/common/componentShadcn/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/common/componentShadcn/ui/carousel"

import image01 from "@/assets/image-10.jpg"
import image02 from "@/assets/image-09.jpg"
import image03 from "@/assets/image-11.jpg"
import image04 from "@/assets/image-12.jpg"
import image05 from "@/assets/image-13.jpg"
import image06 from "@/assets/image-14.jpg"
import image07 from "@/assets/image-15.jpg"
import image08 from "@/assets/image-16.jpg"
import image09 from "@/assets/image-17.jpg"
import image10 from "@/assets/image-18.png"
import image11 from "@/assets/image-19.png"
import image12 from "@/assets/image-20.png"

interface Data {
    id: number;
    src: string;
    alt: string;
    name: string;
    title: string;
    description: string;
}

const datas: Data[] = [
    { id: 1, src: image01, alt: "our-people-02", name: "section_our_people.people.1.name", title: "section_our_people.people.1.title", description: "section_our_people.people.1.description" },
    { id: 2, src: image02, alt: "our-people-01", name: "section_our_people.people.2.name", title: "section_our_people.people.2.title", description: "section_our_people.people.2.description" },
    { id: 3, src: image03, alt: "our-people-03", name: "section_our_people.people.3.name", title: "section_our_people.people.3.title", description: "section_our_people.people.3.description" },
    { id: 4, src: image04, alt: "our-people-04", name: "section_our_people.people.4.name", title: "section_our_people.people.4.title", description: "section_our_people.people.4.description" },
    { id: 5, src: image05, alt: "our-people-05", name: "section_our_people.people.5.name", title: "section_our_people.people.5.title", description: "section_our_people.people.5.description" },
    { id: 6, src: image06, alt: "our-people-06", name: "section_our_people.people.6.name", title: "section_our_people.people.6.title", description: "section_our_people.people.6.description" },
];

export default function OurSection() {
    const { t } = useTranslation();

  return (
    <main className="bg-black-deep">
        <section className="flex flex-col px-6 md:p-20 md:gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 py-2 md:py-4">
                <div>
                    <p className="text-2xl md:text-4xl text-gold-medium fonts-inter font-semibold">{t("section_our_people.title")}</p>
                </div>
                <div className="py-6 md:py-2">
                    <p className="text-white text-base text-justify fonts-inter">{t("section_our_people.description")}</p>
                </div>
            </div>

            <div className="md:py-4">
                <Carousel className="relative">
                    <CarouselContent>
                        {datas.map((data) => (
                            <CarouselItem key={data.id} className="md:basis-1/4">
                                <Card className="bg-black-medium border-black-medium rounded-none py-0! h-full flex flex-col">
                                    <CardHeader className="p-0!">
                                        <img src={data.src} alt={data.alt} className="w-full h-full object-cover rounded-none"/>
                                    </CardHeader>
                                    
                                    <div className="pb-2 px-6 flex-1 flex flex-col">
                                        <CardTitle className="">
                                            <Link to={`/people/${data.id}`}
                                                className="text-lg text-gold-medium font-bold fonts-inter truncate hover:underline"
                                            >
                                                {t(data.name)}
                                            </Link>
                                                <p className="text-base text-white font-normal fonts-inter">{t(data.title)}</p>
                                        </CardTitle>
                                        <CardDescription className="py-4">
                                            <p className="text-base text-grey-medium font-light fonts-inter">{t(data.description)}</p>
                                        </CardDescription>
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    <div className="flex justify-center gap-4 mt-6">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                    </div>
                </Carousel>
            </div>
        </section>

        <section className="flex flex-col px-6 pb-10 md:px-20 md:pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:py-1">
                <p className="text-2xl md:text-4xl text-gold-medium fonts-inter font-semibold">{t("section_our_people.benefit")}</p>
                
                <div className="py-6 md:py-2">
                    <p className="text-white text-base text-justify fonts-inter">{t("section_our_people.title_benefit")}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:pt-10">
                <div>
                    <img src={image07} alt="image07" />
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="shrink-0 py-6 md:py-0 md:mb-32 md:px-8">
                        <img src={image10} alt="image10"/>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-2xl text-white font-bold fonts-inter">{t("section_our_people.company.1.title")}</p>
                        <p className="text-lg text-grey-medium font-normal fonts-inter py-4">{t("section_our_people.company.1.description")}</p>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="md:order-2">
                    <img src={image08} alt="image08" />
                </div>
                
                <div className="flex flex-col md:flex-row justify-center items-center md:order-1">
                    <div className="shrink-0 py-6 md:py-0 md:mb-28 md:px-8">
                        <img src={image11} alt="image11"/>
                    </div>
                    
                    <div className="flex flex-col">
                        <p className="text-2xl text-white font-bold fonts-inter">{t("section_our_people.company.2.title")}</p>
                        <p className="text-lg text-grey-medium font-normal fonts-inter py-4">{t("section_our_people.company.2.description")}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img src={image09} alt="image09" />
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="shrink-0 py-6 md:py-0 md:mb-[150px] md:px-8">
                        <img src={image12} alt="image12"/>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-2xl text-white font-bold fonts-inter">{t("section_our_people.company.3.title")}</p>
                        <p className="text-lg text-grey-medium font-normal fonts-inter py-4">{t("section_our_people.company.3.description")}</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}