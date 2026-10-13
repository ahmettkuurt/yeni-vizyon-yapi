import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Shield, Award, Users, TrendingUp } from "lucide-react";
import { images } from "@/lib/images";

export default function About() {
  const { t } = useTranslation();

  const features = [
    { icon: Shield, label: t("about.iso") || "ISO 9001 Sertifikalı" },
    { icon: Users, label: t("about.team") || "Uzman Kadro" },
    { icon: TrendingUp, label: t("about.delivery") || "Zamanında Teslimat" },
    { icon: Award, label: t("about.quality") || "Kalite Garantisi" },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1976D2]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images.about}
                alt="About Yeni Vizyon Yapı"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137]/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#D4A843]/10 rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-[#D4A843]" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#0D2137]">15+</div>
                  <div className="text-sm text-gray-500 font-[family-name:var(--font-body)]">{t("about.experience")}</div>
                </div>
              </div>
            </div>
            {/* Gold accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#D4A843]/30 rounded-2xl" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#D4A843]" />
              <span className="text-[#1976D2] text-sm font-semibold tracking-widest uppercase font-[family-name:var(--font-body)]">
                {t("about.tag")}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D2137] mb-6 leading-tight">
              {t("about.title")}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-4 font-[family-name:var(--font-body)]">
              {t("about.desc")}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-[family-name:var(--font-body)]">
              {t("about.desc2")}
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-4">
              {features.map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-[#1976D2]/5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#1976D2]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#1976D2]" />
                  </div>
                  <span className="text-sm font-medium text-[#0D2137] font-[family-name:var(--font-body)]">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
