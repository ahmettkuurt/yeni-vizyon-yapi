// CDN Image URLs - Yeni Vizyon Yapı
const CDN =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663387419978/mCo9BNNsomx6Qaif2pyUXZ";
const LOCAL_PATH = "/images"; // DİKKAT: Bu resimler projende 'public/images' klasörünün içinde olmalıdır.

export type ProjectCategory =
  | "residential"
  | "commercial"
  | "renovation"
  | "infrastructure"
  | "consulting"
  | "design";

export const images = {
  logo: `${CDN}/WhatsAppImage2026-03-24at17.27.28(1)_879c7e1d.jpeg`,
  logo2: `${CDN}/WhatsAppImage2026-03-24at17.27.28_aed9dbc0.jpeg`,
  logo3: `${LOCAL_PATH}/logoo-removebg-preview.png`,

  // Project gallery images (construction work photos only)
  projects: [
    // --- RESIDENTIAL (Çelik Yapı & Sundurma) ---
    {
      url: `${LOCAL_PATH}/WhatsApp Image 2026-04-19 at 22.34.07.png`,
      category: "residential",
    }, // Modern Çelik Ev
    {
      url: `${LOCAL_PATH}/WhatsApp Image 2026-04-19 at 22.31.53.png`, // Bu resim ekran görüntüsünde yoktu ama .png varsayarak düzelttim.
      category: "residential",
    }, // Çelik Otopark Sundurması

    // --- COMMERCIAL (Otomatik Kapı & Kepenk) ---
    { url: `${LOCAL_PATH}/oto kaepenk.png`, category: "commercial" }, // Kepenk
    { url: `${LOCAL_PATH}/oto kepenk.png`, category: "commercial" }, // Kepenk
    { url: `${LOCAL_PATH}/oto kepenk1.png`, category: "commercial" }, // Kepenk (Kapılı)
    { url: `${LOCAL_PATH}/fotosel kapı.png`, category: "commercial" }, // Fotoselli Kapı 1
    { url: `${LOCAL_PATH}/al dograma2.png`, category: "commercial" }, // Fotoselli Kapı 2
    {
      url: `${LOCAL_PATH}/WhatsApp Image 2026-04-19 at 22.36.23.png`,
      category: "commercial",
    }, // Yana Kayar Kapı 1
    {
      url: `${LOCAL_PATH}/WhatsApp Image 2026-04-19 at 22.37.41.png`,
      category: "commercial",
    }, // Yana Kayar Kapı 2

    // --- RENOVATION (Alüminyum Doğrama & Ofis Bölme) ---
    { url: `${LOCAL_PATH}/al dograma1.png`, category: "renovation" }, // Alüminyum Vitrin
    {
      url: `${LOCAL_PATH}/WhatsApp Image 2026-04-19 at 22.27.29.png`,
      category: "renovation",
    }, // Ofis Cam Bölme

    // --- INFRASTRUCTURE (Çelik Merdiven Sistemleri) ---
    {
      url: `${LOCAL_PATH}/WhatsApp Image 2026-04-19 at 22.23.06.png`,
      category: "infrastructure",
    }, // Yangın Merdiveni
    {
      url: `${LOCAL_PATH}/WhatsApp Image 2026-04-19 at 22.18.09.png`,
      category: "infrastructure",
    }, // Kafes Korkuluklu Merdiven
    {
      url: `${LOCAL_PATH}/WhatsApp Image 2026-04-19 at 22.13.35.png`,
      category: "infrastructure",
    }, // Platform Merdiveni
    {
      url: `${LOCAL_PATH}/WhatsApp Image 2026-04-19 at 22.14.47.png`,
      category: "infrastructure",
    }, // Dış Mekan Merdiveni

    // --- CONSULTING (Hafif Çelik Duvar/Profil) ---
    {
      url: `${LOCAL_PATH}/WhatsApp Image 2026-04-19 at 22.25.08.png`,
      category: "consulting",
    }, // Duvar Profil Karkas 1
    {
      url: `${LOCAL_PATH}/WhatsApp Image 2026-04-19 at 22.26.10.png`,
      category: "consulting",
    }, // Duvar Profil Karkas 2

    // --- DESIGN (Ferforje Kapılar) ---
    {
      url: `${LOCAL_PATH}/WhatsApp Image 2026-04-19 at 22.39.25.png`,
      category: "design",
    }
  ],

  // Hero background - modern building exterior
  hero: `${CDN}/WhatsAppImage2026-03-24at17.27.43(3)_454e0df2.jpeg`,

  // About section - interior/construction work
  about: `${LOCAL_PATH}/about.png`,

  // Service images
  serviceResidential: `${CDN}/WhatsAppImage2026-03-24at17.27.30_6292b6e1.jpeg`,
  serviceCommercial: `${CDN}/WhatsAppImage2026-03-24at17.27.31_1f92a69e.jpeg`,
  serviceRenovation: `${CDN}/WhatsAppImage2026-03-24at17.27.34_eb1ce962.jpeg`,
};
