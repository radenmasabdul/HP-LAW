import { useTranslation } from "react-i18next";
import { Clock, FileText, Building2, Scale, Briefcase } from 'lucide-react';
import { Card } from '@/common/componentShadcn/ui/card';

interface ComingSoonProps {
  tabName?: 'court' | 'industry' | 'policy' | 'legal';
}

export default function ComingSoon({ tabName = 'court' }: ComingSoonProps) {
    const { t } = useTranslation();
    const icons = {
        court: Scale,
        industry: Building2,
        policy: FileText,
        legal: Briefcase
    };
    const Icon = icons[tabName];
    const tabLabels = {
        court: t("tab.label.court"),
        industry: t("tab.label.industry"),
        policy: t("tab.label.policy"),
        legal: t("tab.label.legal")
    };

  return (
    <Card className="bg-black-medium border-black-medium rounded-none">
      <div className="flex flex-col items-center justify-center py-16 md:py-24 px-4">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-linear-to-r from-gold-medium/20 to-gold-medium/10 blur-3xl rounded-full" />
          <div className="relative bg-black-deep border-2 border-gold-medium/30 rounded-full p-6 md:p-8">
            <Icon className="w-12 h-12 md:w-16 md:h-16 text-gold-medium" strokeWidth={1.5} />
          </div>
        </div>

        <h3 className="text-2xl md:text-4xl font-bold text-gold-medium mb-3 text-center fonts-inter">
          {t("tab.coming")}
        </h3>
        
        <p className="text-grey-medium text-sm md:text-base text-center max-w-md mb-6 fonts-inter">
            {t("tab.description", { label: tabLabels[tabName] })}
        </p>

        <div className="flex items-center gap-2 text-grey-medium text-xs md:text-sm fonts-inter mb-8">
          <Clock className="w-4 h-4" />
          <span>{t("tab.indicator")}</span>
        </div>

        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-gold-medium animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-gold-medium animate-pulse [animation-delay:150ms]" />
          <div className="w-2 h-2 rounded-full bg-gold-medium animate-pulse [animation-delay:300ms]" />
        </div>
      </div>
    </Card>
  );
}