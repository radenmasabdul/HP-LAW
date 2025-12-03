import { useTranslation } from "react-i18next";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
 } from "@/common/componentShadcn/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/common/componentShadcn/ui/carousel"

import Layout from "@/components/layout/Layout"
import image32 from "@/assets/image-32.jpg"
import image33 from "@/assets/image-33.jpg"
import image34 from "@/assets/image-34.jpg"
import image35 from "@/assets/image-35.jpg"
import image36 from "@/assets/image-36.jpg"
import image37 from "@/assets/image-37.jpg"
import image38 from "@/assets/image-38.jpg"
import image39 from "@/assets/image-39.jpg"
import image40 from "@/assets/image-40.jpg"
import image41 from "@/assets/image-41.jpg"
import image42 from "@/assets/image-42.jpg"
import image43 from "@/assets/image-43.jpg"
import image44 from "@/assets/image-44.jpg"
import image45 from "@/assets/image-45.jpg"
import image46 from "@/assets/image-46.jpg"
import image47 from "@/assets/image-47.jpg"
import image48 from "@/assets/image-48.jpg"
import image49 from "@/assets/image-49.jpg"
import image50 from "@/assets/image-50.jpg"
import image51 from "@/assets/image-51.jpg"
import image52 from "@/assets/image-52.jpg"
import image53 from "@/assets/image-53.jpg"
import image54 from "@/assets/image-54.jpg"

interface Data {
    id: number;
    no: string;
    src: string;
    alt: string;
    title: string;
    description: string;
}

const data: Data[] = [
    { id: 1, no: "01", src: image33, alt: "image-33", title: "section_practice_areas.content.commercial.title", description: "section_practice_areas.content.commercial.description"},
    { id: 2, no: "02", src: image54, alt: "image-54", title: "section_practice_areas.content.criminal.title", description: "section_practice_areas.content.criminal.description"},
    { id: 3, no: "03", src: image34, alt: "image-34", title: "section_practice_areas.content.state.title", description: "section_practice_areas.content.state.description"},
    { id: 4, no: "04", src: image35, alt: "image-35", title: "section_practice_areas.content.civil.title", description: "section_practice_areas.content.civil.description"},
    { id: 5, no: "05", src: image36, alt: "image-36", title: "section_practice_areas.content.government.title", description: "section_practice_areas.content.government.description"},
    { id: 6, no: "06", src: image37, alt: "image-37", title: "section_practice_areas.content.commercial_contract.title", description: "section_practice_areas.content.commercial_contract.description"},
    { id: 7, no: "07", src: image38, alt: "image-38", title: "section_practice_areas.content.international.title", description: "section_practice_areas.content.international.description"},
    { id: 8, no: "08", src: image39, alt: "image-39", title: "section_practice_areas.content.foreign.title", description: "section_practice_areas.content.foreign.description"},
    { id: 9, no: "09", src: image40, alt: "image-40", title: "section_practice_areas.content.media.title", description: "section_practice_areas.content.media.description"},
    { id: 10, no: "10", src: image41, alt: "image-41", title: "section_practice_areas.content.unfair.title", description: "section_practice_areas.content.unfair.description"},
    { id: 11, no: "11", src: image42, alt: "image-42", title: "section_practice_areas.content.mergers.title", description: "section_practice_areas.content.mergers.description"},
    { id: 12, no: "12", src: image43, alt: "image-43", title: "section_practice_areas.content.intellectual.title", description: "section_practice_areas.content.intellectual.description"},
    { id: 13, no: "13", src: image44, alt: "image-44", title: "section_practice_areas.content.aviation.title", description: "section_practice_areas.content.aviation.description"},
    { id: 14, no: "14", src: image45, alt: "image-45", title: "section_practice_areas.content.banking.title", description: "section_practice_areas.content.banking.description"},
    { id: 15, no: "15", src: image46, alt: "image-46", title: "section_practice_areas.content.construction.title", description: "section_practice_areas.content.construction.description"},
    { id: 16, no: "16", src: image47, alt: "image-47", title: "section_practice_areas.content.consumer.title", description: "section_practice_areas.content.consumer.description"},
    { id: 17, no: "17", src: image48, alt: "image-48", title: "section_practice_areas.content.private.title", description: "section_practice_areas.content.private.description"},
    { id: 18, no: "18", src: image49, alt: "image-49", title: "section_practice_areas.content.insurance.title", description: "section_practice_areas.content.insurance.description"},
    { id: 19, no: "19", src: image50, alt: "image-50", title: "section_practice_areas.content.land.title", description: "section_practice_areas.content.land.description"},
    { id: 20, no: "20", src: image51, alt: "image-51", title: "section_practice_areas.content.employment.title", description: "section_practice_areas.content.employment.description"},
    { id: 21, no: "21", src: image52, alt: "image-52", title: "section_practice_areas.content.mining.title", description: "section_practice_areas.content.mining.description"},
    { id: 22, no: "22", src: image53, alt: "image-53", title: "section_practice_areas.content.plantation.title", description: "section_practice_areas.content.plantation.description"},
]

export default function Practice() {
    const { t } = useTranslation();

  return (
    <Layout>
        <main className="bg-black-deep">
            <section className="relative w-full h-[600px]">
                <img src={image32} alt="practice area" className="w-full h-full object-cover"/>
                
                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-center items-start px-20">
                    <p className="text-6xl text-gold-medium font-extrabold fonts-inter mb-4">{t("section_practice_areas.title")}</p>
                    <p className="text-lg text-grey-medium font-normal fonts-inter max-w-xl">{t("section_practice_areas.description2")}</p>
                </div>
            </section>

            <section className="py-4 px-6 md:px-20 md:py-10">
                <Carousel className="relative">
                    <CarouselContent>
                        {data.map((item) => (
                            <CarouselItem key={item.id} className="md:basis-1/4 flex">
                                <Card className="bg-black-medium border-black-medium rounded-none py-0 flex flex-col h-full">
                                    <div className="p-6 flex flex-col flex-1">
                                        <CardHeader className="p-0!">
                                            <div className="bg-gold-medium border-gold-medium rounded-none w-20 py-2">
                                                <p className="text-4xl text-black-medium font-bold fonts-inter text-center">
                                                    {t(item.no)}
                                                </p>
                                            </div>
                                        </CardHeader>

                                        <CardTitle className="py-6">
                                            <p className="text-lg text-white font-bold fonts-inter">
                                                {t(item.title)}
                                            </p>
                                        </CardTitle>

                                        <CardDescription className="flex-1">
                                            <p className="text-base text-grey-medium font-normal fonts-inter">
                                            {t(item.description)}
                                            </p>
                                        </CardDescription>
                                    </div>

                                    <CardFooter className="p-0! flex-1">
                                        <img src={item.src} alt={item.alt} className="w-full h-full object-cover rounded-none"/>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex justify-center gap-4 mt-10">
                        <CarouselPrevious className="static translate-y-0"/>
                        <CarouselNext className="static translate-y-0" />
                    </div>
                </Carousel>
            </section>
        </main>
    </Layout>
  )
}
