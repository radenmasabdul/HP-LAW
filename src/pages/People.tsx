import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout"
import image09 from "@/assets/image-09.jpg"
import image10 from "@/assets/image-10.jpg"
import image11 from "@/assets/image-11.jpg"
import image12 from "@/assets/image-12.jpg"
import image13 from "@/assets/image-13.jpg"
import image14 from "@/assets/image-14.jpg"
import image57 from "@/assets/image-57.png"

interface Data {
  id: number;
  src: string;
  alt: string;
  name: string;
  title: string;
  description: Description;
}

interface Description {
  paragraf_1: string;
  paragraf_2: string;
  paragraf_3: string;
}

const data: Data[] = [
  {
    id: 1,
    src: image10,
    alt: "image-10",
    name: "people.1.name",
    title: "people.1.title",
    description: {
      paragraf_1: "people.1.description.paragraf_1",
      paragraf_2: "people.1.description.paragraf_2",
      paragraf_3: "people.1.description.paragraf_3",
    }
  },
  {
    id: 2,
    src: image09,
    alt: "image-09",
    name: "people.2.name",
    title: "people.2.title",
    description: {
      paragraf_1: "people.2.description.paragraf_1",
      paragraf_2: "people.2.description.paragraf_2",
      paragraf_3: "people.2.description.paragraf_3",
    }
  },
  {
    id: 3,
    src: image11,
    alt: "image-11",
    name: "people.3.name",
    title: "people.3.title",
    description: {
      paragraf_1: "people.3.description.paragraf_1",
      paragraf_2: "people.3.description.paragraf_2",
      paragraf_3: "people.3.description.paragraf_3",
    }
  },
  {
    id: 4,
    src: image12,
    alt: "image-12",
    name: "people.4.name",
    title: "people.4.title",
    description: {
      paragraf_1: "people.4.description.paragraf_1",
      paragraf_2: "people.4.description.paragraf_2",
      paragraf_3: "people.4.description.paragraf_3",
    }
  },
  {
    id: 5,
    src: image13,
    alt: "image-13",
    name: "people.5.name",
    title: "people.5.title",
    description: {
      paragraf_1: "people.5.description.paragraf_1",
      paragraf_2: "people.5.description.paragraf_2",
      paragraf_3: "people.5.description.paragraf_3",
    }
  },
  {
    id: 6,
    src: image14,
    alt: "image-14",
    name: "people.6.name",
    title: "people.6.title",
    description: {
      paragraf_1: "people.6.description.paragraf_1",
      paragraf_2: "people.6.description.paragraf_2",
      paragraf_3: "people.6.description.paragraf_3",
    }
  },
]

export default function People() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedId = Number(id);

  const initial = data.find((item) => item.id === selectedId) || data[0];
  const [selected, setSelected] = useState<Data>(initial);


  return (
    <Layout>
      <main className="bg-black-deep">
        <section className="relative w-full">
          <img src={image57} alt="image-57" className="w-full h-[500px] md:h-full object-cover filter grayscale"/>

          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-white text-5xl md:text-6xl font-extrabold fonts-inter mix-blend-difference">
              {t("section_our_people.title")}
            </p>
          </div>
        </section>
        
        <section className="py-10 px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4 flex flex-col">
              <img src={selected.src} alt={selected.alt} className="w-full object-cover rounded-none"/>
              
              <div className="py-6">
                <p className="text-xl md:text-2xl text-gold-medium font-semibold fonts-inter">
                  {t(selected.name)}
                </p>
                <p className="text-base md:text-lg text-white font-normal fonts-inter">
                  {t(selected.title)}
                </p>
              </div>
            </div>
            
            <div className="md:col-span-5">
              <p className="text-sm md:text-base text-grey-medium font-normal fonts-inter leading-relaxed text-justify">
                <span className="text-white font-semibold">{t(selected.name)}</span>{" "}
                  {t(selected.description.paragraf_1)}
                  <br /><br />
                  {t(selected.description.paragraf_2)}
                  <br /><br />
                  {t(selected.description.paragraf_3)}
              </p>
            </div>
          
            <div className="md:col-span-3 pt-6 md:pt-0">
              <p className="text-sm md:text-base text-gold-medium font-bold fonts-inter md:mb-8">
                {t("people.our")}
              </p>
            
              <div className="flex flex-col divide-y divide-grey-deep">
                {data.map((item : Data) => (
                  <div
                    key={item.id}
                    className="py-4 cursor-pointer"
                    onClick={() => {
                      setSelected(item);
                      navigate(`/people/${item.id}`);
                    }}
                  >
                    <p className={`text-xs md:text-sm font-bold fonts-inter ${
                      selected.id === item.id ? "text-gold-medium" : "text-grey-deep"}`}>
                      {t(item.name)}
                    </p>
                    <p className={`text-xs fonts-inter pt-2 ${
                      selected.id === item.id ? "text-white" : "text-grey-deep"}`}>
                      {t(item.title)}
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