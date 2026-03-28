import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react";
import { images } from "@/lib/images";

export default function Footer() {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A1929] text-white relative overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" fill="#0A1929" />
        </svg>
      </div>

      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={images.logo3} alt="Yeni Vizyon Yapı" className="h-12 w-auto rounded-lg" />
              <div>
                <span className="text-lg font-bold">Yeni Vizyon</span>
                <span className="block text-xs font-medium tracking-widest text-[#E8B84B] uppercase">Yapı</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-[family-name:var(--font-body)]">
              {t("footer.desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-[#E8B84B] mb-6">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {["home", "about", "services", "projects", "contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-white/50 hover:text-white hover:translate-x-1 transition-all text-sm font-[family-name:var(--font-body)]"
                  >
                    {t(`nav.${link}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-[#E8B84B] mb-6">{t("services.tag")}</h4>
            <ul className="space-y-3">
              {["residential", "commercial", "renovation", "infrastructure"].map((key) => (
                <li key={key}>
                  <span className="text-white/50 text-sm font-[family-name:var(--font-body)]">
                    {t(`services.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-[#E8B84B] mb-6">{t("footer.contactInfo")}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E8B84B] mt-1 flex-shrink-0" />
                <span className="text-white/50 text-sm font-[family-name:var(--font-body)]">{t("contact.addressVal")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E8B84B] flex-shrink-0" />
                <a href="tel:+905324498536" className="text-white/50 hover:text-white text-sm transition-colors font-[family-name:var(--font-body)]">
                  {t("contact.phoneVal")}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E8B84B] flex-shrink-0" />
                <a href="mailto:yenivizyonyapiistanbul@gmail.com" className="text-white/50 hover:text-white text-sm transition-colors font-[family-name:var(--font-body)] break-all">
                  {t("contact.emailVal")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm font-[family-name:var(--font-body)]">
            &copy; {new Date().getFullYear()} Yeni Vizyon Yapı. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-[#D4A843]/50" />
            <span className="text-white/20 text-xs font-[family-name:var(--font-body)]">Istanbul, Turkey</span>
            <div className="w-8 h-[2px] bg-[#D4A843]/50" />
          </div>
        </div>
      </div>
    </footer>
  );
}
