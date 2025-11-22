import { useState } from "react";
import { useLocation } from "react-router-dom";

import unionIcon from "@/assets/union.svg";
import unionLogoIcon from "@/assets/union-1.svg";
import searchIcon from "@/assets/icon-search.svg";
import globeIcon from "@/assets/icon-web.svg";
import phoneIcon from "@/assets/icon-phone.svg";

import { ChevronDown } from "lucide-react";
import { Button } from "@/common/componentShadcn/ui/button";
import { Input } from "@/common/componentShadcn/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/common/componentShadcn/ui/dropdown-menu";

import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const [lang, setLang] = useState("en");

  const menuItems = [
    { id: 1, key: "home", name: "Home", path: "/" },
    { id: 2, key: "about", name: "About Us", path: "/about" },
    { id: 3, key: "practice", name: "Practice Areas", path: "/practice" },
    { id: 4, key: "people", name: "Our People", path: "/people" },
    { id: 5, key: "news",name: "Legal News", path: "/news" },
  ];

  return (
    <header className="bg-black-deep">
      <div className="w-full px-10 py-8 flex items-center justify-between">
        <div className="flex col-span-2 gap-1">
          <img src={unionIcon} alt="union-icon" />
          <img src={unionLogoIcon} alt="union-logo-icon" />
        </div>

        <div className="flex items-center gap-4 text-sm text-white fonts-inter">
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
                <span className="text-sm text-white fonts-inter"> {lang === "en" ? "EN" : "ID"} </span>
                <ChevronDown size={16} className="text-white"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-24 bg-black-deep text-white border-black-deep fonts-inter">
              <DropdownMenuItem onClick={() => { setLang("en"); i18n.changeLanguage("en"); }}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => { setLang("id"); i18n.changeLanguage("id"); }}>Indonesia</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="bg-gold-medium hover:bg-gold-medium text-white rounded-none">
            <a href="/contact" className="flex items-center gap-2">
              <img src={phoneIcon} alt="phone-icon" />
              <span className="text-sm fonts-inter text-black">Contact Us</span>
            </a>
          </Button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="max-w-7xl mx-auto pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <Input
            id="search"
            type="text"
            placeholder="Search..."
            className="w-full text-white border border-gold-medium focus:border-gold-medium focus:ring-2 focus:ring-gold-medium ring-0! py-4"
            autoFocus
          />
        </div>
      )}      
    </header>
  );
}
