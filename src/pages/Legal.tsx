import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/common/componentShadcn/ui/tabs"
import ComingSoon from "@/components/ComingSoon";
import image21 from "@/assets/image-21.jpg"
import image22 from "@/assets/image-22.jpg"
import image23 from "@/assets/image-23.jpg"
import image55 from "@/assets/image-55.jpg"

interface News {
  id: number;
  src: string;
  alt: string;
  doc: string;
  title: string;
  header: string;
  date: string;
  author: string;
  description: Description;
}

interface Description {
  paragraf_1: string;
  paragraf_2: string;
  paragraf_3: string;
  paragraf_4: string;
  paragraf_5: string;
  paragraf_6: string;
  paragraf_7: string;
  paragraf_8: string;
  paragraf_9: string;
  paragraf_10: string;
}

const news: News[] = [
  {
    id: 1,
    src: image21,
    alt: "image21",
    doc: "section_legal.article.1.docs",
    title: "section_legal.article.1.title",
    header: "section_legal.news.1.title",
    date: "section_legal.article.1.date",
    author: "section_legal.article.1.author",
    description: {
      paragraf_1: "section_legal.news.1.description.paragraf_1",
      paragraf_2: "section_legal.news.1.description.paragraf_2",
      paragraf_3: "section_legal.news.1.description.paragraf_3",
      paragraf_4: "section_legal.news.1.description.paragraf_4",
      paragraf_5: "section_legal.news.1.description.paragraf_5",
      paragraf_6: "section_legal.news.1.description.paragraf_6",
      paragraf_7: "section_legal.news.1.description.paragraf_7",
      paragraf_8: "section_legal.news.1.description.paragraf_8",
      paragraf_9: "",
      paragraf_10: ""
    }
  },
  {
    id: 2,
    src: image22,
    alt: "image22",
    doc: "section_legal.article.2.docs",
    title: "section_legal.article.2.title",
    header: "section_legal.news.2.title",
    date: "section_legal.article.2.date",
    author: "section_legal.article.2.author",
    description: {
      paragraf_1: "section_legal.news.2.description.paragraf_1",
      paragraf_2: "section_legal.news.2.description.paragraf_2",
      paragraf_3: "section_legal.news.2.description.paragraf_3",
      paragraf_4: "section_legal.news.2.description.paragraf_4",
      paragraf_5: "section_legal.news.2.description.paragraf_5",
      paragraf_6: "section_legal.news.2.description.paragraf_6",
      paragraf_7: "",
      paragraf_8: "",
      paragraf_9: "",
      paragraf_10: ""
    }
  },
  {
    id: 3,
    src: image23,
    alt: "image23",
    doc: "section_legal.article.3.docs",
    title: "section_legal.article.3.title",
    header: "section_legal.news.3.title",
    date: "section_legal.article.3.date",
    author: "section_legal.article.3.author",
    description: {
      paragraf_1: "section_legal.news.3.description.paragraf_1",
      paragraf_2: "section_legal.news.3.description.paragraf_2",
      paragraf_3: "section_legal.news.3.description.paragraf_3",
      paragraf_4: "section_legal.news.3.description.paragraf_4",
      paragraf_5: "section_legal.news.3.description.paragraf_5",
      paragraf_6: "section_legal.news.3.description.paragraf_6",
      paragraf_7: "section_legal.news.3.description.paragraf_7",
      paragraf_8: "section_legal.news.3.description.paragraf_8",
      paragraf_9: "",
      paragraf_10: ""
    }
  },
  {
    id: 4,
    src: image55,
    alt: "image55",
    doc: "section_legal.article.4.docs",
    title: "section_legal.article.4.title",
    header: "section_legal.news.4.title",
    date: "section_legal.article.4.date",
    author: "section_legal.article.4.author",
    description: {
      paragraf_1: "section_legal.news.4.description.paragraf_1",
      paragraf_2: "section_legal.news.4.description.paragraf_2",
      paragraf_3: "section_legal.news.4.description.paragraf_3",
      paragraf_4: "",
      paragraf_5: "",
      paragraf_6: "",
      paragraf_7: "",
      paragraf_8: "",
      paragraf_9: "",
      paragraf_10: ""
    }
  },
  {
    id: 5,
    src: image55,
    alt: "image55",
    doc: "section_legal.article.5.docs",
    title: "section_legal.article.5.title",
    header: "section_legal.news.5.title",
    date: "section_legal.article.5.date",
    author: "section_legal.article.5.author",
    description: {
      paragraf_1: "section_legal.news.5.description.paragraf_1",
      paragraf_2: "section_legal.news.5.description.paragraf_2",
      paragraf_3: "section_legal.news.5.description.paragraf_3",
      paragraf_4: "section_legal.news.5.description.paragraf_4",
      paragraf_5: "",
      paragraf_6: "",
      paragraf_7: "",
      paragraf_8: "",
      paragraf_9: "",
      paragraf_10: ""
    }
  },
  {
    id: 6,
    src: image23,
    alt: "image23",
    doc: "section_legal.article.6.docs",
    title: "section_legal.article.6.title",
    header: "section_legal.news.6.title",
    date: "section_legal.article.6.date",
    author: "section_legal.article.6.author",
    description: {
      paragraf_1: "section_legal.news.6.description.paragraf_1",
      paragraf_2: "section_legal.news.6.description.paragraf_2",
      paragraf_3: "section_legal.news.6.description.paragraf_3",
      paragraf_4: "section_legal.news.6.description.paragraf_4",
      paragraf_5: "section_legal.news.6.description.paragraf_5",
      paragraf_6: "section_legal.news.6.description.paragraf_6",
      paragraf_7: "",
      paragraf_8: "",
      paragraf_9: "",
      paragraf_10: ""
    }
  },
  {
    id: 7,
    src: image23,
    alt: "image23",
    doc: "section_legal.article.7.docs",
    title: "section_legal.article.7.title",
    header: "section_legal.news.7.title",
    date: "section_legal.article.7.date",
    author: "section_legal.article.7.author",
    description: {
      paragraf_1: "section_legal.news.7.description.paragraf_1",
      paragraf_2: "section_legal.news.7.description.paragraf_2",
      paragraf_3: "section_legal.news.7.description.paragraf_3",
      paragraf_4: "",
      paragraf_5: "",
      paragraf_6: "",
      paragraf_7: "",
      paragraf_8: "",
      paragraf_9: "",
      paragraf_10: ""
    }
  },
  {
    id: 8,
    src: image55,
    alt: "image55",
    doc: "section_legal.article.8.docs",
    title: "section_legal.article.8.title",
    header: "section_legal.news.8.title",
    date: "section_legal.article.8.date",
    author: "section_legal.article.8.author",
    description: {
      paragraf_1: "section_legal.news.8.description.paragraf_1",
      paragraf_2: "section_legal.news.8.description.paragraf_2",
      paragraf_3: "section_legal.news.8.description.paragraf_3",
      paragraf_4: "section_legal.news.8.description.paragraf_4",
      paragraf_5: "section_legal.news.8.description.paragraf_5",
      paragraf_6: "section_legal.news.8.description.paragraf_6",
      paragraf_7: "section_legal.news.8.description.paragraf_7",
      paragraf_8: "section_legal.news.8.description.paragraf_8",
      paragraf_9: "",
      paragraf_10: ""
    }
  }
];


export default function Legal() {
    const tabClass = `
        text-sm text-grey-medium border-b border-b-grey-medium rounded-none
        bg-transparent font-bold fonts-inter py-3 px-4
        data-[state=active]:text-gold-medium
        data-[state=active]:border-b-gold-medium
        data-[state=active]:bg-transparent
    `

    const tabs = [
        { value: "regulatory", label: "section_legal.tab.regulatory" },
        { value: "court", label: "section_legal.tab.court" },
        { value: "industry", label: "section_legal.tab.industry" },
        { value: "policy", label: "section_legal.tab.policy" },
        { value: "legal", label: "section_legal.tab.legal" },
    ]

    const { t } = useTranslation();

    const [selectedNews, setSelectedNews] = useState<News | null>(null);

    const handleClickNews = (newsItem: News) => {
        setSelectedNews(newsItem);
    };

  return (
    <main className="bg-black-deep">
        <section className="flex flex-col px-4 md:px-20 py-6 md:py-10 gap-2 md:gap-4">
            <Tabs defaultValue="regulatory" className="w-full">
                <TabsList className="bg-transparent w-full justify-start flex-wrap md:flex-nowrap rounded-none h-auto p-0">
                    {tabs.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value} className={tabClass}>
                            {t(tab.label)}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <TabsContent value="regulatory" className="px-4 md:px-10 pt-5 md:pt-10">
                    {selectedNews ? (
                        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10">
                            <div className="md:col-span-4 flex flex-col">
                                <img src={selectedNews.src} alt={selectedNews.alt} className="w-full object-cover rounded-none"/>

                                 <div className="py-4">
                                    <p className="text-xs text-grey-medium font-normal fonts-inter">
                                        Photo <span className="text-xs text-white font-normal fonts-inter">
                                            {t(selectedNews.doc)}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="md:col-span-5">
                                <p className="text-xl md:text-3xl text-white font-bold fonts-inter mb-1 md:mb-4">
                                    {t(selectedNews.header)}
                                </p>
                                <p className="text-sm text-grey-medium font-normal fonts-inter">
                                    {t(selectedNews.date)} &#8226; By{" "}
                                    <span className="text-sm text-white font-normal fonts-inter">
                                        {t(selectedNews.author)}
                                    </span>
                                </p>

                                <div className="text-base text-grey-fine font-normal fonts-inter py-4 text-justify">
                                    {Object.values(selectedNews.description)
                                        .filter((paragraf) => paragraf && t(paragraf) !== paragraf)
                                        .map((paragraf, index) => (
                                        <p key={index}>{t(paragraf)}</p>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-3 pt-6 md:pt-0">
                                <p className="text-sm md:text-base text-gold-medium font-bold fonts-inter md:mb-8">
                                    {t("section_legal.other")}
                                </p>

                                <div className="flex flex-col divide-y divide-grey-deep">
                                    {news.map((item : News) => (
                                        <div
                                            key={item.id}
                                            className="py-4 cursor-pointer"
                                            onClick={() => handleClickNews(item)}
                                        >
                                            <img src={item.src} alt={item.alt} className="w-full h-64 md:h-64 object-cover"/>
                                            <p className={`text-xs font-normal fonts-inter pt-4 ${
                                                selectedNews?.id === item.id ? "text-gold-medium" : "text-grey-medium"
                                                }`}
                                            >
                                                {t(item.date)}
                                            </p>
                                            <p className={`text-sm font-bold fonts-inter pt-2 ${
                                                selectedNews?.id === item.id ? "text-gold-medium" : "text-white"
                                                }`}
                                            >
                                                {t(item.title)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        ) : (
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {news.map((data) => (
                                <div key={data.id} className="flex flex-col">
                                    <img src={data.src} alt={data.alt} className="w-full h-64 md:h-80 object-cover" />
                                    <p className="text-sm text-grey-medium font-medium fonts-inter mt-2">{t(data.date)}</p>
                                    <p className="text-base text-white font-bold fonts-inter mt-1 cursor-pointer hover:underline"
                                        onClick={() => handleClickNews(data)}
                                    >
                                        {t(data.title)}
                                    </p>                                    
                                </div>
                            ))}
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="court" className="px-4 md:px-10 pt-24 md:pt-10">
                  <ComingSoon tabName="court" />
                </TabsContent>

                <TabsContent value="industry" className="px-4 md:px-10 pt-24 md:pt-10">
                  <ComingSoon tabName="industry" />
                </TabsContent>

                <TabsContent value="policy" className="px-4 md:px-10 pt-24 md:pt-10">
                  <ComingSoon tabName="policy" />
                </TabsContent>

                <TabsContent value="legal" className="px-4 md:px-10 pt-24 md:pt-10">
                  <ComingSoon tabName="legal" />
                </TabsContent>
            </Tabs>
        </section>
    </main>
  )
}
