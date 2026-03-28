import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  tr: {
    translation: {
      nav: { home: "Ana Sayfa", about: "Hakkımızda", services: "Hizmetler", projects: "Projeler", contact: "İletişim" },
      hero: {
        title: "Geleceği İnşa Ediyoruz",
        subtitle: "Yeni Vizyon Yapı olarak, modern mimari anlayışı ve yılların deneyimiyle hayallerinizi gerçeğe dönüştürüyoruz.",
        cta: "Projelerimizi Keşfedin",
        ctaSecondary: "Bize Ulaşın"
      },
      about: {
        tag: "Hakkımızda",
        title: "Güven, Kalite ve Vizyon",
        desc: "Yeni Vizyon Yapı, İstanbul merkezli olarak konut, ticari ve endüstriyel projelerde uzmanlaşmış bir inşaat firmasıdır. Müşteri memnuniyetini ön planda tutarak, en yüksek kalite standartlarında projeler teslim ediyoruz.",
        desc2: "Deneyimli mühendis kadromuz ve modern teknoloji kullanımımızla, her projeyi zamanında ve bütçe dahilinde tamamlıyoruz.",
        experience: "Yıllık Deneyim",
        iso: "ISO 9001 Sertifikalı",
        team: "Uzman Kadro",
        delivery: "Zamanında Teslimat",
        quality: "Kalite Garantisi"
      },
      services: {
        tag: "Hizmetlerimiz",
        title: "Profesyonel İnşaat Çözümleri",
        residential: "Konut Projeleri",
        residentialDesc: "Modern ve konforlu yaşam alanları tasarlıyor, en yüksek kalite standartlarında konut projeleri gerçekleştiriyoruz.",
        commercial: "Ticari Projeler",
        commercialDesc: "İş merkezleri, ofis binaları ve ticari yapılar için anahtar teslim çözümler sunuyoruz.",
        renovation: "Tadilat ve Restorasyon",
        renovationDesc: "Mevcut yapıların modernizasyonu ve restorasyonu konusunda uzman ekibimizle hizmet veriyoruz.",
        infrastructure: "Altyapı Projeleri",
        infrastructureDesc: "Yol, köprü ve altyapı projelerinde güvenilir ve sürdürülebilir çözümler üretiyoruz.",
        consulting: "Proje Danışmanlığı",
        consultingDesc: "İnşaat projelerinizin her aşamasında profesyonel danışmanlık hizmeti sağlıyoruz.",
        design: "Mimari Tasarım",
        designDesc: "Estetik ve fonksiyonelliği bir araya getiren özgün mimari tasarımlar oluşturuyoruz."
      },
      projects: {
        tag: "Projelerimiz",
        title: "Tamamlanan Projeler",
        subtitle: "Başarıyla tamamladığımız projelerden bazıları",
        project: "Proje"
      },
      contact: {
        tag: "İletişim",
        title: "Bizimle İletişime Geçin",
        subtitle: "Projeleriniz için ücretsiz keşif ve danışmanlık hizmeti alın.",
        name: "Adınız Soyadınız",
        email: "E-posta Adresiniz",
        phone: "Telefon Numaranız",
        message: "Mesajınız",
        send: "Mesaj Gönder",
        success: "Mesajınız başarıyla gönderildi!",
        address: "Adres",
        addressVal: "Y. Dudullu Mah. Nato Yolu Cad. No: 174/1 Ümraniye / İstanbul",
        phoneVal: "0532 449 85 36",
        emailVal: "yenivizyonyapiistanbul@gmail.com",
        available: "7/24 Ulaşılabilir",
        namePlaceholder: "Ahmet Yılmaz",
        emailPlaceholder: "ornek@email.com",
        phonePlaceholder: "0532 000 00 00"
      },
      footer: {
        desc: "Yeni Vizyon Yapı, İstanbul merkezli profesyonel inşaat ve taahhüt firmasıdır.",
        quickLinks: "Hızlı Bağlantılar",
        contactInfo: "İletişim Bilgileri",
        rights: "Tüm hakları saklıdır."
      },
      stats: {
        experience: "Yıllık Deneyim",
        projects: "Tamamlanan Proje",
        clients: "Mutlu Müşteri",
        area: "m² İnşaat Alanı"
      },
      whatsapp: {
        tooltip: "Merhaba! Size nasıl yardımcı olabiliriz?",
        defaultMessage: "Merhaba, bilgi almak istiyorum."
      }
    }
  },
  en: {
    translation: {
      nav: { home: "Home", about: "About", services: "Services", projects: "Projects", contact: "Contact" },
      hero: {
        title: "Building the Future",
        subtitle: "At Yeni Vizyon Yapı, we turn your dreams into reality with modern architectural understanding and years of experience.",
        cta: "Explore Our Projects",
        ctaSecondary: "Contact Us"
      },
      about: {
        tag: "About Us",
        title: "Trust, Quality and Vision",
        desc: "Yeni Vizyon Yapı is an Istanbul-based construction company specializing in residential, commercial and industrial projects. We deliver projects at the highest quality standards, prioritizing customer satisfaction.",
        desc2: "With our experienced engineering team and modern technology, we complete every project on time and within budget.",
        experience: "Years of Experience",
        iso: "ISO 9001 Certified",
        team: "Expert Team",
        delivery: "On-Time Delivery",
        quality: "Quality Guarantee"
      },
      services: {
        tag: "Our Services",
        title: "Professional Construction Solutions",
        residential: "Residential Projects",
        residentialDesc: "We design modern and comfortable living spaces, delivering residential projects at the highest quality standards.",
        commercial: "Commercial Projects",
        commercialDesc: "We offer turnkey solutions for business centers, office buildings and commercial structures.",
        renovation: "Renovation & Restoration",
        renovationDesc: "We provide services with our expert team in modernization and restoration of existing structures.",
        infrastructure: "Infrastructure Projects",
        infrastructureDesc: "We produce reliable and sustainable solutions in road, bridge and infrastructure projects.",
        consulting: "Project Consulting",
        consultingDesc: "We provide professional consulting services at every stage of your construction projects.",
        design: "Architectural Design",
        designDesc: "We create unique architectural designs that combine aesthetics and functionality."
      },
      projects: {
        tag: "Our Projects",
        title: "Completed Projects",
        subtitle: "Some of our successfully completed projects",
        project: "Project"
      },
      contact: {
        tag: "Contact",
        title: "Get in Touch With Us",
        subtitle: "Get free site inspection and consulting services for your projects.",
        name: "Your Full Name",
        email: "Your Email Address",
        phone: "Your Phone Number",
        message: "Your Message",
        send: "Send Message",
        success: "Your message has been sent successfully!",
        address: "Address",
        addressVal: "Y. Dudullu Mah. Nato Yolu Cad. No: 174/1 Ümraniye / İstanbul",
        phoneVal: "0532 449 85 36",
        emailVal: "yenivizyonyapiistanbul@gmail.com",
        available: "Available 24/7",
        namePlaceholder: "John Smith",
        emailPlaceholder: "example@email.com",
        phonePlaceholder: "+90 532 000 00 00"
      },
      footer: {
        desc: "Yeni Vizyon Yapı is a professional construction and contracting company based in Istanbul.",
        quickLinks: "Quick Links",
        contactInfo: "Contact Information",
        rights: "All rights reserved."
      },
      stats: {
        experience: "Years of Experience",
        projects: "Completed Projects",
        clients: "Happy Clients",
        area: "m² Construction Area"
      },
      whatsapp: {
        tooltip: "Hello! How can we help you?",
        defaultMessage: "Hello, I would like to get information."
      }
    }
  },
  zh: {
    translation: {
      nav: { home: "首页", about: "关于我们", services: "服务", projects: "项目", contact: "联系我们" },
      hero: {
        title: "建设未来",
        subtitle: "Yeni Vizyon Yapı凭借现代建筑理念和多年经验，将您的梦想变为现实。",
        cta: "探索我们的项目",
        ctaSecondary: "联系我们"
      },
      about: {
        tag: "关于我们",
        title: "信任、质量与愿景",
        desc: "Yeni Vizyon Yapı是一家总部位于伊斯坦布尔的建筑公司，专注于住宅、商业和工业项目。我们以客户满意为首要目标，以最高质量标准交付项目。",
        desc2: "凭借经验丰富的工程团队和现代技术，我们按时并在预算内完成每个项目。",
        experience: "年经验",
        iso: "ISO 9001认证",
        team: "专业团队",
        delivery: "准时交付",
        quality: "质量保证"
      },
      services: {
        tag: "我们的服务",
        title: "专业建筑解决方案",
        residential: "住宅项目",
        residentialDesc: "我们设计现代舒适的生活空间，以最高质量标准交付住宅项目。",
        commercial: "商业项目",
        commercialDesc: "我们为商业中心、办公楼和商业建筑提供交钥匙解决方案。",
        renovation: "翻新与修复",
        renovationDesc: "我们的专业团队提供现有建筑的现代化和修复服务。",
        infrastructure: "基础设施项目",
        infrastructureDesc: "我们在道路、桥梁和基础设施项目中提供可靠和可持续的解决方案。",
        consulting: "项目咨询",
        consultingDesc: "我们在建筑项目的每个阶段提供专业咨询服务。",
        design: "建筑设计",
        designDesc: "我们创造将美学与功能性相结合的独特建筑设计。"
      },
      projects: {
        tag: "我们的项目",
        title: "已完成的项目",
        subtitle: "我们成功完成的部分项目",
        project: "项目"
      },
      contact: {
        tag: "联系方式",
        title: "与我们联系",
        subtitle: "为您的项目获取免费现场检查和咨询服务。",
        name: "您的姓名",
        email: "您的电子邮件",
        phone: "您的电话号码",
        message: "您的留言",
        send: "发送消息",
        success: "您的消息已成功发送！",
        address: "地址",
        addressVal: "Y. Dudullu Mah. Nato Yolu Cad. No: 174/1 Ümraniye / İstanbul",
        phoneVal: "0532 449 85 36",
        emailVal: "yenivizyonyapiistanbul@gmail.com",
        available: "全天候服务",
        namePlaceholder: "张三",
        emailPlaceholder: "example@email.com",
        phonePlaceholder: "+90 532 000 00 00"
      },
      footer: {
        desc: "Yeni Vizyon Yapı是一家总部位于伊斯坦布尔的专业建筑和承包公司。",
        quickLinks: "快速链接",
        contactInfo: "联系信息",
        rights: "版权所有。"
      },
      stats: {
        experience: "年经验",
        projects: "已完成项目",
        clients: "满意客户",
        area: "平方米建筑面积"
      },
      whatsapp: {
        tooltip: "您好！我们能为您做什么？",
        defaultMessage: "您好，我想了解更多信息。"
      }
    }
  },
  de: {
    translation: {
      nav: { home: "Startseite", about: "Über uns", services: "Dienstleistungen", projects: "Projekte", contact: "Kontakt" },
      hero: {
        title: "Wir Bauen die Zukunft",
        subtitle: "Bei Yeni Vizyon Yapı verwandeln wir Ihre Träume mit modernem architektonischem Verständnis und jahrelanger Erfahrung in Realität.",
        cta: "Unsere Projekte Entdecken",
        ctaSecondary: "Kontaktieren Sie Uns"
      },
      about: {
        tag: "Über Uns",
        title: "Vertrauen, Qualität und Vision",
        desc: "Yeni Vizyon Yapı ist ein in Istanbul ansässiges Bauunternehmen, das auf Wohn-, Gewerbe- und Industrieprojekte spezialisiert ist. Wir liefern Projekte nach höchsten Qualitätsstandards und stellen die Kundenzufriedenheit in den Vordergrund.",
        desc2: "Mit unserem erfahrenen Ingenieurteam und moderner Technologie schließen wir jedes Projekt termingerecht und im Budget ab.",
        experience: "Jahre Erfahrung",
        iso: "ISO 9001 Zertifiziert",
        team: "Expertenteam",
        delivery: "Pünktliche Lieferung",
        quality: "Qualitätsgarantie"
      },
      services: {
        tag: "Unsere Dienstleistungen",
        title: "Professionelle Baulösungen",
        residential: "Wohnprojekte",
        residentialDesc: "Wir entwerfen moderne und komfortable Wohnräume und liefern Wohnprojekte nach höchsten Qualitätsstandards.",
        commercial: "Gewerbeprojekte",
        commercialDesc: "Wir bieten schlüsselfertige Lösungen für Geschäftszentren, Bürogebäude und Gewerbebauten.",
        renovation: "Renovierung & Restaurierung",
        renovationDesc: "Wir bieten mit unserem Expertenteam Dienstleistungen bei der Modernisierung und Restaurierung bestehender Gebäude.",
        infrastructure: "Infrastrukturprojekte",
        infrastructureDesc: "Wir produzieren zuverlässige und nachhaltige Lösungen bei Straßen-, Brücken- und Infrastrukturprojekten.",
        consulting: "Projektberatung",
        consultingDesc: "Wir bieten professionelle Beratungsdienstleistungen in jeder Phase Ihrer Bauprojekte.",
        design: "Architektonisches Design",
        designDesc: "Wir schaffen einzigartige architektonische Designs, die Ästhetik und Funktionalität vereinen."
      },
      projects: {
        tag: "Unsere Projekte",
        title: "Abgeschlossene Projekte",
        subtitle: "Einige unserer erfolgreich abgeschlossenen Projekte",
        project: "Projekt"
      },
      contact: {
        tag: "Kontakt",
        title: "Kontaktieren Sie Uns",
        subtitle: "Erhalten Sie kostenlose Besichtigung und Beratung für Ihre Projekte.",
        name: "Ihr vollständiger Name",
        email: "Ihre E-Mail-Adresse",
        phone: "Ihre Telefonnummer",
        message: "Ihre Nachricht",
        send: "Nachricht Senden",
        success: "Ihre Nachricht wurde erfolgreich gesendet!",
        address: "Adresse",
        addressVal: "Y. Dudullu Mah. Nato Yolu Cad. No: 174/1 Ümraniye / İstanbul",
        phoneVal: "0532 449 85 36",
        emailVal: "yenivizyonyapiistanbul@gmail.com",
        available: "Rund um die Uhr erreichbar",
        namePlaceholder: "Max Mustermann",
        emailPlaceholder: "beispiel@email.com",
        phonePlaceholder: "+90 532 000 00 00"
      },
      footer: {
        desc: "Yeni Vizyon Yapı ist ein professionelles Bau- und Vertragsunternehmen mit Sitz in Istanbul.",
        quickLinks: "Schnelllinks",
        contactInfo: "Kontaktinformationen",
        rights: "Alle Rechte vorbehalten."
      },
      stats: {
        experience: "Jahre Erfahrung",
        projects: "Abgeschlossene Projekte",
        clients: "Zufriedene Kunden",
        area: "m² Baufläche"
      },
      whatsapp: {
        tooltip: "Hallo! Wie können wir Ihnen helfen?",
        defaultMessage: "Hallo, ich möchte Informationen erhalten."
      }
    }
  },
  ar: {
    translation: {
      nav: { home: "الرئيسية", about: "من نحن", services: "خدماتنا", projects: "مشاريعنا", contact: "اتصل بنا" },
      hero: {
        title: "نبني المستقبل",
        subtitle: "في يني فيزيون يابي، نحول أحلامكم إلى حقيقة بفهم معماري حديث وسنوات من الخبرة.",
        cta: "اكتشف مشاريعنا",
        ctaSecondary: "تواصل معنا"
      },
      about: {
        tag: "من نحن",
        title: "الثقة والجودة والرؤية",
        desc: "يني فيزيون يابي هي شركة بناء مقرها إسطنبول متخصصة في المشاريع السكنية والتجارية والصناعية. نقدم مشاريع بأعلى معايير الجودة مع إعطاء الأولوية لرضا العملاء.",
        desc2: "بفضل فريقنا الهندسي ذو الخبرة والتكنولوجيا الحديثة، ننجز كل مشروع في الوقت المحدد وضمن الميزانية.",
        experience: "سنوات من الخبرة",
        iso: "شهادة ISO 9001",
        team: "فريق متخصص",
        delivery: "التسليم في الوقت المحدد",
        quality: "ضمان الجودة"
      },
      services: {
        tag: "خدماتنا",
        title: "حلول بناء احترافية",
        residential: "المشاريع السكنية",
        residentialDesc: "نصمم مساحات معيشة حديثة ومريحة ونقدم مشاريع سكنية بأعلى معايير الجودة.",
        commercial: "المشاريع التجارية",
        commercialDesc: "نقدم حلولاً جاهزة لمراكز الأعمال والمباني المكتبية والهياكل التجارية.",
        renovation: "التجديد والترميم",
        renovationDesc: "نقدم خدمات تحديث وترميم المباني القائمة بفريقنا المتخصص.",
        infrastructure: "مشاريع البنية التحتية",
        infrastructureDesc: "ننتج حلولاً موثوقة ومستدامة في مشاريع الطرق والجسور والبنية التحتية.",
        consulting: "استشارات المشاريع",
        consultingDesc: "نقدم خدمات استشارية احترافية في كل مرحلة من مراحل مشاريع البناء الخاصة بكم.",
        design: "التصميم المعماري",
        designDesc: "نبتكر تصاميم معمارية فريدة تجمع بين الجمال والوظيفة."
      },
      projects: {
        tag: "مشاريعنا",
        title: "المشاريع المكتملة",
        subtitle: "بعض مشاريعنا التي أنجزناها بنجاح",
        project: "مشروع"
      },
      contact: {
        tag: "اتصل بنا",
        title: "تواصل معنا",
        subtitle: "احصل على خدمة الفحص والاستشارة المجانية لمشاريعكم.",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        message: "رسالتك",
        send: "إرسال الرسالة",
        success: "تم إرسال رسالتك بنجاح!",
        address: "العنوان",
        addressVal: "Y. Dudullu Mah. Nato Yolu Cad. No: 174/1 Ümraniye / İstanbul",
        phoneVal: "0532 449 85 36",
        emailVal: "yenivizyonyapiistanbul@gmail.com",
        available: "متاح على مدار الساعة",
        namePlaceholder: "أحمد محمد",
        emailPlaceholder: "example@email.com",
        phonePlaceholder: "+90 532 000 00 00"
      },
      footer: {
        desc: "يني فيزيون يابي هي شركة بناء ومقاولات احترافية مقرها إسطنبول.",
        quickLinks: "روابط سريعة",
        contactInfo: "معلومات الاتصال",
        rights: "جميع الحقوق محفوظة."
      },
      stats: {
        experience: "سنوات من الخبرة",
        projects: "مشروع مكتمل",
        clients: "عميل سعيد",
        area: "م² مساحة البناء"
      },
      whatsapp: {
        tooltip: "مرحباً! كيف يمكننا مساعدتك؟",
        defaultMessage: "مرحبا، أريد الحصول على معلومات."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'tr',
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage']
    }
  });

export default i18n;
