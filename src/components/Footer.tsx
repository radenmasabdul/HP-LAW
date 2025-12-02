import { useTranslation } from "react-i18next";
import logoFooter from "@/assets/logo-2.png"
import iconLocation from "@/assets/icon-location.svg"
import iconMail from "@/assets/icon-mail.svg"
import iconPhone from "@/assets/icon-phone.svg"
import iconFax from "@/assets/icon-fax.svg"

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black-deep pt-2 md:pt-20">
      <section className="bg-gold-medium flex flex-col px-6 py-4 md:p-20 gap-2 md:gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-center items-center py-4 md:py-0 md:border-r md:border-gold-deep">
            <img src={logoFooter} alt="logo-footer"/>
          </div>

          <div className="flex flex-col justify-center gap-4 px-4">
            <p className="text-black text-sm font-normal fonts-inter">{t("footer.title")}</p>
            <p className="text-black text-sm font-normal fonts-inter">{t("footer.copyright")} {""}
              <span className="font-bold">{t("footer.author")}</span>
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 px-4">
            <p className="text-black text-base font-extrabold fonts-inter">{t("footer.contact_us")}</p>
            
            <a 
              href="https://www.google.com/maps/place/Treasury+Office+Tower/@-6.2278219,106.8013787,17z/data=!4m10!1m2!2m1!1sTreasury+Tower,+2nd+Floor,+Unit+K+District+8,+SCBD%3Cbr%2F%3E+++++++Jl.+Jenderal+Sudirman+No.+52-53%3Cbr%2F%3E+++++++Senayan,+Kebayoran+Baru,+Jakarta+Selatan+12190!3m6!1s0x2e69f15016dfa8d5:0x1932ce0709d82af4!8m2!3d-6.2278231!4d106.8061427!15sCpcBVHJlYXN1cnkgVG93ZXIsIDJuZCBGbG9vciwgVW5pdCBLIERpc3RyaWN0IDgsIFNDQkQ8YnIvPiAgICAgICBKbC4gSmVuZGVyYWwgU3VkaXJtYW4gTm8uIDUyLTUzPGJyLz4gICAgICAgU2VuYXlhbiwgS2ViYXlvcmFuIEJhcnUsIEpha2FydGEgU2VsYXRhbiAxMjE5MFqJASKGAXRyZWFzdXJ5IHRvd2VyIDJuZCBmbG9vciB1bml0IGsgZGlzdHJpY3QgOCBzY2JkIGJyIC8-IGpsIGplbmRlcmFsIHN1ZGlybWFuIG5vIDUyIDUzIGJyIC8-IHNlbmF5YW4ga2ViYXlvcmFuIGJhcnUgamFrYXJ0YSBzZWxhdGFuIDEyMTkwkgEQY29ycG9yYXRlX29mZmljZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSNFoxQmlkRzUzUlJBQuABAPoBBAgAEDQ!16s%2Fg%2F11hcdrz7tz?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              className="flex gap-2 items-start hover:underline"
            >
              <img src={iconLocation} alt="icon-location" className="w-5 h-5 mt-1"/>
              <span className="text-black text-sm fonts-inter">{t("footer.address")}</span>
            </a>

            <a href="mailto:info@hadipurwantolaw.com" className="flex gap-2 items-center hover:underline">
              <img src={iconMail} alt="icon-mail" className="w-5 h-5"/>
              <span className="text-black text-sm fonts-inter">{t("footer.email")}</span>
            </a>

            <a href="tel:+622150202665" className="flex gap-2 items-center hover:underline">
              <img src={iconPhone} alt="icon-phone" className="w-5 h-5"/>
              <span className="text-black text-sm fonts-inter">{t("footer.phone")}</span>
            </a>

            <a href="fax:+622150202661" className="flex gap-2 items-center hover:underline">
              <img src={iconFax} alt="icon-fax" className="w-5 h-5"/>
              <span className="text-black text-sm fonts-inter">{t("footer.fax")}</span>
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}