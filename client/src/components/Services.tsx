import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Home, Building2, Wrench, Construction, Lightbulb, Compass } from "lucide-react";

const serviceIcons = [Home, Building2, Wrench, Construction, Lightbulb, Compass];
const serviceKeys = ["residential", "commercial", "renovation", "infrastructure", "consulting", "design"] as const;

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0D2137]/[0.03] to-background" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#D4A843]" />
            <span className="text-[#1976D2] text-sm font-semibold tracking-widest uppercase font-[family-name:var(--font-body)]">
              {t("services.tag")}
            </span>
            <div className="w-10 h-[2px] bg-[#D4A843]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D2137]">
            {t("services.title")}
          </h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-[#1976D2]/5 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#1976D2]/10 flex items-center justify-center mb-6 group-hover:bg-[#1976D2] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#1976D2] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-[#0D2137] mb-3">
                  {t(`services.${key}`)}
                </h3>
                <p className="text-gray-500 leading-relaxed font-[family-name:var(--font-body)]">
                  {t(`services.${key}Desc`)}
                </p>

                {/* Gold accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-[3px] bg-gradient-to-r from-[#D4A843] to-[#E8B84B] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
