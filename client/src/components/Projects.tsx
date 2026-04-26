import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/lib/images";

export default function Projects() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Services kısmından gelen filtreyi yakalamak için
  useEffect(() => {
    const handleFilterChange = () => {
      const hash = window.location.hash.replace("#projects-", "");
      if (hash && hash !== "projects") {
        setActiveFilter(hash);
      }
    };

    // Sayfa ilk yüklendiğinde URL'de hash varsa kontrol et
    handleFilterChange();

    window.addEventListener("hashchange", handleFilterChange);
    return () => window.removeEventListener("hashchange", handleFilterChange);
  }, []);

  // Filtrelenmiş resim listesi (images.ts dosyasındaki objelere göre)
  const filteredImages = activeFilter
    ? images.projects.filter((img: any) => img.category === activeFilter)
    : images.projects;

  const projectCategories = [
    "residential",
    "commercial",
    "renovation",
    "infrastructure",
    "consulting",
    "design",
  ];

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  // Lightbox artık sadece filtrelenmiş fotoğraflar arasında döner
  const prev = () =>
    setLightbox(p =>
      p !== null
        ? (p - 1 + filteredImages.length) % filteredImages.length
        : null
    );
  const next = () =>
    setLightbox(p => (p !== null ? (p + 1) % filteredImages.length : null));

  return (
    <section
      id="projects"
      className="py-24 bg-[#0D2137] relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#1976D2]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A843]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative">
        {/* Filtre Butonları */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-6 py-2 rounded-full border transition-all ${!activeFilter ? "bg-[#D4A843] border-[#D4A843] text-white" : "border-white/20 text-white hover:border-[#D4A843]"}`}
          >
            {t("projects.all")}
          </button>
          {projectCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all ${activeFilter === cat ? "bg-[#D4A843] border-[#D4A843] text-white" : "border-white/20 text-white hover:border-[#D4A843]"}`}
            >
              {t(`services.${cat}`)}
            </button>
          ))}
        </div>

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
            <span className="text-[#E8B84B] text-sm font-semibold tracking-widest uppercase font-[family-name:var(--font-body)]">
              {t("projects.tag")}
            </span>
            <div className="w-10 h-[2px] bg-[#D4A843]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-white/60 text-lg font-[family-name:var(--font-body)]">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img: any, i: number) => (
              <motion.div
                layout // Filtreleme anında animasyonlu yer değiştirme sağlar
                key={img.url || i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid group cursor-pointer mb-4"
                onClick={() => openLightbox(i)}
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={img.url || img} // Eğer img bir objeyse url'i, değilse kendisini alır
                    alt={`Project ${i + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2137]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-sm font-semibold font-[family-name:var(--font-body)]">
                      {t("projects.project")} #{i + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={e => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredImages[lightbox].url || filteredImages[lightbox]}
              alt={`Project ${lightbox + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-[family-name:var(--font-body)] bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
              {lightbox + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto object-cover contrast-125 brightness-110 saturate-105 drop-shadow-2xl"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
