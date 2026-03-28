import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(t("contact.success"));
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1976D2]/5 rounded-full blur-3xl -translate-x-1/2" />

      {/* Wave top divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            className="fill-background"
          />
        </svg>
      </div>

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
              {t("contact.tag")}
            </span>
            <div className="w-10 h-[2px] bg-[#D4A843]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D2137] mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-gray-500 text-lg font-[family-name:var(--font-body)]">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-[#0D2137] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">{t("contact.tag")}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1976D2]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#E8B84B]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1 font-[family-name:var(--font-body)]">{t("contact.address")}</div>
                    <div className="text-white/90 font-medium font-[family-name:var(--font-body)]">{t("contact.addressVal")}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1976D2]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#E8B84B]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1 font-[family-name:var(--font-body)]">{t("contact.phone")}</div>
                    <a href="tel:+905324498536" className="text-white/90 font-medium hover:text-[#E8B84B] transition-colors font-[family-name:var(--font-body)]">
                      {t("contact.phoneVal")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1976D2]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#E8B84B]" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1 font-[family-name:var(--font-body)]">{t("contact.email")}</div>
                    <a href="mailto:yenivizyonyapiistanbul@gmail.com" className="text-white/90 font-medium hover:text-[#E8B84B] transition-colors font-[family-name:var(--font-body)] break-all">
                      {t("contact.emailVal")}
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-white/50 font-[family-name:var(--font-body)]">{t("contact.available")}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#0D2137] mb-2 font-[family-name:var(--font-body)]">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1976D2] focus:ring-2 focus:ring-[#1976D2]/10 outline-none transition-all text-sm font-[family-name:var(--font-body)] bg-white text-[#0D2137]"
                    placeholder={t("contact.namePlaceholder") || "Ahmet Yılmaz"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0D2137] mb-2 font-[family-name:var(--font-body)]">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1976D2] focus:ring-2 focus:ring-[#1976D2]/10 outline-none transition-all text-sm font-[family-name:var(--font-body)] bg-white text-[#0D2137]"
                    placeholder={t("contact.emailPlaceholder") || "ornek@email.com"}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#0D2137] mb-2 font-[family-name:var(--font-body)]">
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1976D2] focus:ring-2 focus:ring-[#1976D2]/10 outline-none transition-all text-sm font-[family-name:var(--font-body)] bg-white text-[#0D2137]"
                  placeholder={t("contact.phonePlaceholder") || "0532 000 00 00"}
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-[#0D2137] mb-2 font-[family-name:var(--font-body)]">
                  {t("contact.message")}
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1976D2] focus:ring-2 focus:ring-[#1976D2]/10 outline-none transition-all text-sm resize-none font-[family-name:var(--font-body)] bg-white text-[#0D2137]"
                  placeholder={t("contact.message") || ""}
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#1976D2] text-white rounded-xl font-bold text-base hover:bg-[#1565C0] transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 disabled:opacity-70 font-[family-name:var(--font-body)]"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {t("contact.success")}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t("contact.send")}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
