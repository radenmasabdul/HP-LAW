import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/common/componentShadcn/ui/button";
import { Input } from "@/common/componentShadcn/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/common/componentShadcn/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import unionIcon from "@/assets/union.svg";
import unionLogoIcon from "@/assets/union-1.svg";
import searchIcon from "@/assets/icon-search.svg";
import globeIcon from "@/assets/icon-web.svg";
import phoneIcon from "@/assets/icon-phone.svg";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentLang = i18n.language || "en";

  const menuItems = [
    { id: 1, key: "home", name: "Home", path: "/" },
    { id: 2, key: "about", name: "About Us", path: "/about" },
    { id: 3, key: "practice", name: "Practice Areas", path: "/practice" },
    { id: 4, key: "people", name: "Our People", path: "/people" },
    { id: 5, key: "news",name: "Legal News", path: "/news" },
  ];

  return (
    <header className="bg-black-deep">
      <div className="w-full px-4 py-4 md:px-10 md:py-8 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img src={unionIcon} alt="union-icon" className="h-full w-full"/>
          <img src={unionLogoIcon} alt="union-logo-icon" className="h-6 w-full md:h-full md:w-full"/>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm text-white fonts-inter">
          {menuItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`px-3 py-1 rounded transition-colors ${
                location.pathname === item.path ? "text-gold-medium" : ""
              }`}
            >
              {t(`navbar.${item.key}`)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="rounded-full cursor-pointer"
          >
            <img src={searchIcon} alt="search-icon" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="bg-black-deep border-black-deep cursor-pointer">
              <Button className="flex items-center gap-1 hover:bg-black-deep">
                <img src={globeIcon} alt="globe-icon" />
                <span className="text-sm text-white fonts-inter"> {currentLang === "en" ? "EN" : "ID"} </span>
                <ChevronDown size={16} className="text-white"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-24 bg-black-deep text-white border-black-deep fonts-inter">
              <DropdownMenuItem onClick={() => i18n.changeLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => i18n.changeLanguage("id")}>Indonesia</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button asChild className="bg-gold-medium hover:bg-gold-medium text-white rounded-none hidden md:flex">
            <a href="tel:+622150202665" className="flex items-center gap-2">
              <img src={phoneIcon} alt="phone-icon" />
              <span className="text-sm fonts-inter text-black">{t("navbar.contact")}</span>
            </a>
          </Button>

          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="max-w-7xl mx-auto pb-4 px-4 md:px-10 animate-in fade-in slide-in-from-top-2 duration-200">
          <Input
            id="search"
            type="text"
            placeholder="Search..."
            className="w-full text-white border border-gold-medium focus:border-gold-medium focus:ring-2 focus:ring-gold-medium ring-0! py-4"
            autoFocus
          />
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black-deep px-4 pb-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3 text-white fonts-inter">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`px-3 py-2 rounded transition-colors ${
                  location.pathname === item.path ? "text-gold-medium" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(`navbar.${item.key}`)}
              </a>
            ))}
            
            <Button asChild className="bg-gold-medium hover:bg-gold-medium text-white rounded-none mt-2">
              <a href="tel:+622150202665" className="flex items-center gap-2">
                <img src={phoneIcon} alt="phone-icon" />
                <span className="text-sm fonts-inter text-black">{t("navbar.contact")}</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
