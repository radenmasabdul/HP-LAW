import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/common/componentShadcn/ui/button"
import { Card } from "@/common/componentShadcn/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/common/componentShadcn/ui/tabs"

import image01 from "@/assets/image-21.jpg"
import image02 from "@/assets/image-22.jpg"
import image03 from "@/assets/image-23.jpg"
import arrowIcon from "@/assets/icon-arrow.svg"

interface Article {
  id: number;
  src: string;
  alt: string;
  date: string;
  title: string;
  author: string;
  description: string;
}

const articles: Article[] = [
  { id: 1, src: image01, alt: "image-01", date:"section_legal.article.1.date", title: "section_legal.article.1.title", author: "section_legal.article.1.author", description: "section_legal.article.1.description" },
  { id: 2, src: image02, alt: "image-02", date:"section_legal.article.2.date", title: "section_legal.article.2.title", author: "section_legal.article.2.author", description: "section_legal.article.2.description" },
  { id: 3, src: image03, alt: "image-03", date:"section_legal.article.3.date", title: "section_legal.article.3.title", author: "section_legal.article.3.author", description: "section_legal.article.3.description" },
]

export default function LegalSection() {
  const tabClass = ` text-grey-medium border-grey-medium text-sm md:text-base bg-transparent border-2 rounded-full px-4 md:px-8 py-2 md:py-4
    data-[state=active]:text-gold-medium
    data-[state=active]:border-gold-medium
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

  return (
    <main className="bg-black-deep">
      <section className="flex flex-col px-4 md:px-20 py-6 md:py-10 gap-2 md:gap-4">
        <Card className="bg-black-medium border-black-medium rounded-none py-0!">
          <div className="py-6 md:py-10">
            <div className="text-center px-4">
              <p className="text-2xl md:text-4xl text-gold-medium fonts-inter font-semibold">
                {t("section_legal.title")}
              </p>
              <p className="text-grey-medium text-sm md:text-base fonts-inter py-2">
                {t("section_legal.description")}
              </p>
            </div>

            <div className="flex justify-center items-center">
              <Tabs defaultValue="regulatory" className="w-full">
                <TabsList className="bg-transparent border-0 gap-2 md:gap-4 flex-wrap md:flex-nowrap justify-center px-4 pt-1 md:px-20 md:pt-12">
                  {tabs.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value} className={tabClass}>
                      {t(tab.label)}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="regulatory" className="px-4 md:px-10 pt-24 md:pt-10">
                  <div className="flex flex-col divide-y divide-black-light">
                    {articles.map((article) => (
                      <div key={article.id} className="flex flex-col md:flex-row gap-4 md:gap-6 py-6 items-start">
                        <div className="shrink-0 w-full md:w-auto">
                          <img 
                            src={article.src} 
                            alt={article.alt} 
                            className="w-full md:w-auto h-auto object-cover"
                          />
                        </div>

                        <div className="flex-1 flex flex-col gap-2">
                          <p className="text-grey-medium text-sm md:text-base font-normal fonts-inter">
                            {t(article.date)}
                          </p>
                          <p className="text-white text-lg md:text-2xl font-bold fonts-inter">
                            {t(article.title)}
                          </p>
                          <p className="text-grey-medium text-sm md:text-xs font-normal fonts-inter">
                            By <span className="text-white text-sm md:text-xs font-normal fonts-inter">{t(article.author)}</span>
                          </p>
                          <p className="text-grey-medium text-sm md:text-base font-medium fonts-inter">
                            {t(article.description)}
                          </p>
                        </div>

                        <div className="shrink-0 self-start md:self-center">
                          <Link to={`/news/${article.id}`}
                            className="bg-gold-medium p-2 inline-flex items-center justify-center hover:opacity-80 transition-opacity"
                          >
                            <img src={arrowIcon} alt="arrow-icon" className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center text-center mt-2 md:mt-10">
                    <Button asChild className="bg-gold-medium hover:bg-gold-medium hover:opacity-90 text-white rounded-none w-full md:w-auto">
                      <a href="/news" className="flex items-center justify-center gap-2 px-6 py-3">
                        <span className="text-sm fonts-inter text-black">See More</span>
                        <img src={arrowIcon} alt="arrow-icon" />
                      </a>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </Card>
      </section>
    </main>
  )
}