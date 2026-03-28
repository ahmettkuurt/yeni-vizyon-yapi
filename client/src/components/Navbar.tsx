import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { images } from "@/lib/images";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = ["home", "about", "services", "projects", "contact"] as const;

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0D2137]/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
          <img
            src={images.logo3}
            alt="Yeni Vizyon Yapı"
            className="h-12 w-auto rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
          />
          <div className="hidden sm:block">
            <span className={`text-lg font-bold tracking-tight transition-colors ${scrolled ? "text-[#0D2137] dark:text-white" : "text-white"}`}>
              Yeni Vizyon
            </span>
            <span className={`block text-xs font-medium tracking-widest uppercase transition-colors ${scrolled ? "text-[#D4A843]" : "text-[#E8B84B]"}`}>
              Yapı
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10 ${
                scrolled
                  ? "text-[#0D2137] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#1976D2]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {t(`nav.${link}`)}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className={scrolled ? "[&_button]:text-[#0D2137] dark:[&_button]:text-gray-200 [&_button]:border-gray-200 dark:[&_button]:border-gray-600 [&_button:hover]:bg-gray-100 dark:[&_button:hover]:bg-gray-700" : ""}>
            <LanguageSwitcher />
          </div>

          {/* Dark Mode Toggle */}
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Açık moda geç" : "Koyu moda geç"}
              className={`p-2 rounded-lg transition-all ${
                scrolled
                  ? "text-[#0D2137] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          )}

          <a
            href="tel:+905324498536"
            className={`hidden md:flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              scrolled
                ? "bg-[#1976D2] text-white hover:bg-[#1565C0] shadow-md shadow-blue-200"
                : "bg-[#D4A843] text-[#0D2137] hover:bg-[#E8B84B] shadow-md shadow-amber-200/30"
            }`}
          >
            <Phone className="w-4 h-4" />
            0532 449 85 36
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-[#0D2137] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" : "text-white hover:bg-white/10"}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0D2137] border-t border-gray-100 dark:border-gray-700 shadow-xl animate-in slide-in-from-top-2 duration-300">
          <div className="container py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="w-full text-left px-4 py-3 rounded-lg text-[#0D2137] dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#1976D2] transition-colors"
              >
                {t(`nav.${link}`)}
              </button>
            ))}
            <a
              href="tel:+905324498536"
              className="flex items-center gap-2 px-4 py-3 mt-2 bg-[#1976D2] text-white rounded-lg font-semibold"
            >
              <Phone className="w-4 h-4" />
              0532 449 85 36
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
