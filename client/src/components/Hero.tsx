import { useTranslation } from "react-i18next";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2137]/85 via-[#0D2137]/60 to-[#0D2137]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137]/60 via-transparent to-transparent" />
      </div>

      {/* Gold accent line */}
      <div className="absolute left-0 top-1/4 w-1.5 h-32 bg-gradient-to-b from-[#D4A843] to-transparent rounded-r-full" />

      <div className="container relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#D4A843]" />
              <span className="text-[#E8B84B] text-sm font-semibold tracking-widest uppercase font-[family-name:var(--font-body)]">
                Yeni Vizyon Yapı
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl font-[family-name:var(--font-body)]"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 bg-[#D4A843] text-[#0D2137] rounded-lg font-bold text-base hover:bg-[#E8B84B] transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              {t("hero.cta")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-lg font-bold text-base hover:bg-white/10 hover:border-white/50 transition-all hover:-translate-y-0.5"
            >
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
        >
          {[
            { value: "15+", label: t("stats.experience") },
            { value: "200+", label: t("stats.projects") },
            { value: "500+", label: t("stats.clients") },
            { value: "50K+", label: t("stats.area") },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-[#E8B84B]">{stat.value}</div>
              <div className="text-sm text-white/60 mt-1 font-[family-name:var(--font-body)]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
