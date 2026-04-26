import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  tr: {
    translation: {
      nav: {
        home: "Ana Sayfa",
        about: "Hakkımızda",
        services: "Hizmetler",
        projects: "Projeler",
        contact: "İletişim",
      },
      hero: {
        title: "Geleceği İnşa Ediyoruz",
        subtitle:
          "Yeni Vizyon Yapı olarak, modern mimari anlayışı ve yılların deneyimiyle hayallerinizi gerçeğe dönüştürüyoruz.",
        cta: "Projelerimizi Keşfedin",
        ctaSecondary: "Bize Ulaşın",
      },
      about: {
        tag: "Hakkımızda",
        title: "Metal ve Otomasyonda Güçlü Vizyon",
        desc: "Yeni Vizyon Yapı, İstanbul merkezli olarak otomatik kepenk sistemleri, çelik konstrüksiyon yapılar ve mimari metal çözümleri alanında uzmanlaşmış lider bir firmadır. Estetiği güvenlikle buluşturan ferforje, alüminyum doğrama ve endüstriyel otomasyon projelerinde yüksek kalite standartlarını mimari hassasiyetle birleştiriyoruz.",
        desc2:
          "Dayanıklı çelik yapılar, modern ofis bölme sistemleri ve akıllı geçiş çözümlerimizle; projelerinizi ileri teknoloji ve uzman işçilikle zamanında hayata geçiriyoruz. Teknik ustalığımızı, mekanlarınıza değer katan yenilikçi tasarımlarla harmanlıyoruz.",
        experience: "Yıllık Tecrübe",
        iso: "Yüksek Standartlı İşçilik",
        team: "Teknik Uzman Kadro",
        delivery: "Hızlı ve Güvenli Montaj",
        quality: "%100 Çelik ve Otomasyon Garantisi",
      },
      services: {
        tag: "Hizmetlerimiz",
        title: "Profesyonel Metal, Otomasyon ve Yapı Çözümleri",

        residential: "Çelik Yapı ve Sundurma Sistemleri",
        residentialDesc:
          "Modern ve dayanıklı çelik/prefabrik evler, açık otopark sundurmaları ve yüksek taşıma kapasiteli çelik konstrüksiyon projeleri hayata geçiriyoruz.",

        commercial: "Otomatik Kapı ve Kepenk Sistemleri",
        commercialDesc:
          "Mağazalar ve tesisler için fotoselli cam kapılar, otomatik motorlu kepenkler ve endüstriyel yana kayar bahçe/fabrika kapıları kuruyoruz.",

        renovation: "Alüminyum Doğrama ve Ofis Bölme",
        renovationDesc:
          "İş yerleri ve ticari alanlar için estetik alüminyum vitrinler, dış cepheler ve modern ofis içi cam bölme sistemleri uyguluyoruz.",

        infrastructure: "Çelik Merdiven Sistemleri",
        infrastructureDesc:
          "İç ve dış mekanlar için yüksek güvenlikli yangın merdivenleri, dekoratif çelik merdivenler ve endüstriyel çalışma platformları üretiyoruz.",

        consulting: "Hafif Çelik ve Duvar Profil Sistemleri",
        consultingDesc:
          "İç mekanlarınızı yapılandırmak için galvanizli hafif çelik duvar karkasları, alçıpan profilleri ve sağlam bölme duvar sistemleri inşa ediyoruz.",

        design: "Ferforje ve Mimari Demir Doğrama",
        designDesc:
          "Mekanlarınıza değer katan özel tasarım, lüks detaylı ferforje bahçe/villa kapıları, korkuluklar ve sanatsal demir doğrama işleri yapıyoruz.",
      },
      projects: {
        tag: "Projelerimiz",
        title: "Tamamlanan Projeler",
        subtitle: "Başarıyla tamamladığımız projelerden bazıları",
        project: "Proje",
        all: "Tüm Projeler",
      },
      contact: {
        tag: "İletişim",
        title: "Bizimle İletişime Geçin",
        subtitle:
          "Projeleriniz için ücretsiz keşif ve danışmanlık hizmeti alın.",
        name: "Adınız Soyadınız",
        email: "E-posta Adresiniz",
        phone: "Telefon Numaranız",
        message: "Mesajınız",
        send: "Mesaj Gönder",
        success: "Mesajınız başarıyla gönderildi!",
        address: "Adres",
        addressVal:
          "Y. Dudullu Mah. Nato Yolu Cad. No: 174/1 Ümraniye / İstanbul",
        phoneVal: "0532 449 85 36",
        emailVal: "yenivizyonyapiistanbul@gmail.com",
        available: "7/24 Ulaşılabilir",
        namePlaceholder: "Ahmet Yılmaz",
        emailPlaceholder: "ornek@email.com",
        phonePlaceholder: "0532 000 00 00",
      },
      footer: {
        desc: "Yeni Vizyon Yapı, İstanbul merkezli olarak otomatik kepenk sistemlerinden ağır çelik konstrüksiyona, modern alüminyum doğramadan estetik ferforje çözümlerine kadar geniş bir yelpazede hizmet veren profesyonel bir metal ve yapı sistemleri uzmanıdır. Kalite, güven ve yenilikçi tasarımı bir araya getirerek projelerinize değer katıyoruz.",
        quickLinks: "Hızlı Bağlantılar",
        contactInfo: "İletişim Bilgileri",
        rights: "Tüm hakları saklıdır.",
      },
      stats: {
        experience: "Yıllık Deneyim",
        projects: "Tamamlanan Proje",
        clients: "Mutlu Müşteri",
        area: "m² İnşaat Alanı",
      },
      whatsapp: {
        tooltip: "Merhaba! Size nasıl yardımcı olabiliriz?",
        defaultMessage: "Merhaba, bilgi almak istiyorum.",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        title: "Building the Future",
        subtitle:
          "At Yeni Vizyon Yapı, we turn your dreams into reality with modern architectural understanding and years of experience.",
        cta: "Explore Our Projects",
        ctaSecondary: "Contact Us",
      },
      about: {
        tag: "About Us",
        title: "Strong Vision in Metal and Automation",
        desc: "Yeni Vizyon Yapı is a leading Istanbul-based company specializing in automatic roller shutter systems, steel construction structures, and architectural metal solutions. We combine high quality standards with architectural precision in wrought iron, aluminum joinery, and industrial automation projects that bring aesthetics and security together.",
        desc2:
          "With durable steel structures, modern office partitioning systems, and smart access solutions, we bring your projects to life on time with advanced technology and expert craftsmanship. We blend our technical mastery with innovative designs that add value to your spaces.",
        experience: "Years of Experience",
        iso: "High Standard Craftsmanship",
        team: "Expert Technical Team",
        delivery: "Fast and Safe Installation",
        quality: "100% Steel and Automation Guarantee",
      },
      services: {
        tag: "Our Services",
        title: "Professional Metal, Automation, and Construction Solutions",
        residential: "Steel Structure and Canopy Systems",
        residentialDesc:
          "We bring to life modern and durable steel/prefab houses, open car park canopies, and high-load-bearing steel construction projects.",
        commercial: "Automatic Door and Roller Shutter Systems",
        commercialDesc:
          "We install photocell glass doors, automatic motorized roller shutters, and industrial sliding garden/factory gates for stores and facilities.",
        renovation: "Aluminum Joinery and Office Partitioning",
        renovationDesc:
          "We apply aesthetic aluminum showcases, exterior facades, and modern interior glass partition systems for workplaces and commercial areas.",
        infrastructure: "Steel Stair Systems",
        infrastructureDesc:
          "We manufacture high-security fire escapes, decorative steel stairs, and industrial work platforms for indoor and outdoor spaces.",
        consulting: "Light Steel and Wall Profile Systems",
        consultingDesc:
          "We build galvanized light steel wall frames, drywall profiles, and solid partition wall systems to structure your interiors.",
        design: "Wrought Iron and Architectural Ironworks",
        designDesc:
          "We create custom-designed, luxury-detailed wrought iron garden/villa gates, railings, and artistic iron joinery works that add value to your spaces.",
      },
      projects: {
        tag: "Our Projects",
        title: "Completed Projects",
        subtitle: "Some of our successfully completed projects",
        project: "Project",
        all: "All Projects",
      },
      contact: {
        tag: "Contact",
        title: "Get in Touch With Us",
        subtitle:
          "Get free site inspection and consulting services for your projects.",
        name: "Your Full Name",
        email: "Your Email Address",
        phone: "Your Phone Number",
        message: "Your Message",
        send: "Send Message",
        success: "Your message has been sent successfully!",
        address: "Address",
        addressVal:
          "Y. Dudullu Mah. Nato Yolu Cad. No: 174/1 Ümraniye / İstanbul",
        phoneVal: "0532 449 85 36",
        emailVal: "yenivizyonyapiistanbul@gmail.com",
        available: "Available 24/7",
        namePlaceholder: "John Smith",
        emailPlaceholder: "example@email.com",
        phonePlaceholder: "+90 532 000 00 00",
      },
      footer: {
        desc: "Based in Istanbul, Yeni Vizyon Yapı is a professional metal and building systems specialist providing a wide range of services from automatic roller shutter systems to heavy steel construction, and from modern aluminum joinery to aesthetic wrought iron solutions. We add value to your projects by combining quality, trust, and innovative design.",
        quickLinks: "Quick Links",
        contactInfo: "Contact Information",
        rights: "All rights reserved.",
      },
      stats: {
        experience: "Years of Experience",
        projects: "Completed Projects",
        clients: "Happy Clients",
        area: "m² Construction Area",
      },
      whatsapp: {
        tooltip: "Hello! How can we help you?",
        defaultMessage: "Hello, I would like to get information.",
      },
    },
  },
  zh: {
    translation: {
      nav: {
        home: "首页",
        about: "关于我们",
        services: "服务",
        projects: "项目",
        contact: "联系我们",
      },
      hero: {
        title: "建设未来",
        subtitle:
          "Yeni Vizyon Yapı凭借现代建筑理念和多年经验，将您的梦想变为现实。",
        cta: "探索我们的项目",
        ctaSecondary: "联系我们",
      },
      about: {
        tag: "关于我们",
        title: "在金属与自动化领域的强大愿景",
        desc: "Yeni Vizyon Yapı 是一家总部位于伊斯坦布尔的领先企业，专注于自动卷帘门系统、钢结构建筑和建筑金属解决方案。在将美学与安全相结合的铁艺、铝合金门窗和工业自动化项目中，我们将高质量标准与建筑精确度完美融合。",
        desc2:
          "凭借耐用的钢结构、现代办公隔断系统和智能通道解决方案，我们通过先进技术和精湛工艺按时实现您的项目。我们将技术优势与为您的空间增值的创新设计融为一体。",
        experience: "年经验",
        iso: "高标准工艺",
        team: "技术专家团队",
        delivery: "快速安全的安装",
        quality: "100% 钢铁与自动化保证",
      },
      services: {
        tag: "我们的服务",
        title: "专业的金属、自动化与建筑解决方案",
        residential: "钢结构与顶棚系统",
        residentialDesc:
          "我们致力于打造现代耐用的钢结构/预制房屋、露天停车场顶棚以及高承重钢结构项目。",
        commercial: "自动门与卷帘门系统",
        commercialDesc:
          "我们为门店和设施安装感应玻璃门、电动卷帘门以及工业庭院/工厂平移门。",
        renovation: "铝合金门窗与办公隔断",
        renovationDesc:
          "我们为工作场所和商业区提供美观的铝合金橱窗、外墙以及现代室内玻璃隔断系统。",
        infrastructure: "钢楼梯系统",
        infrastructureDesc:
          "我们为室内外空间制造高安全性的消防通道、装饰性钢楼梯和工业工作平台。",
        consulting: "轻钢与墙体型材系统",
        consultingDesc:
          "我们使用镀锌轻钢墙体骨架、石膏板型材和坚固的隔墙系统来构建您的室内空间。",
        design: "铁艺与建筑铁艺门窗",
        designDesc:
          "我们定制设计具有奢华细节的铁艺庭院/别墅大门、栏杆和艺术铁艺工程，为您的空间增添价值。",
      },
      projects: {
        tag: "我们的项目",
        title: "已完成的项目",
        subtitle: "我们成功完成的部分项目",
        project: "项目",
        all: "所有项目",
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
        addressVal:
          "Y. Dudullu Mah. Nato Yolu Cad. No: 174/1 Ümraniye / İstanbul",
        phoneVal: "0532 449 85 36",
        emailVal: "yenivizyonyapiistanbul@gmail.com",
        available: "全天候服务",
        namePlaceholder: "张三",
        emailPlaceholder: "example@email.com",
        phonePlaceholder: "+90 532 000 00 00",
      },
      footer: {
        desc: "Yeni Vizyon Yapı 总部位于伊斯坦布尔，是一家专业的金属与建筑系统专家。我们提供从自动卷帘门系统到重型钢结构、从现代铝合金门窗到美观铁艺解决方案的广泛服务。我们通过将品质、信任与创新设计相结合，为您的项目增添价值。",
        quickLinks: "快速链接",
        contactInfo: "联系信息",
        rights: "版权所有。",
      },
      stats: {
        experience: "年经验",
        projects: "已完成项目",
        clients: "满意客户",
        area: "平方米建筑面积",
      },
      whatsapp: {
        tooltip: "您好！我们能为您做什么？",
        defaultMessage: "您好，我想了解更多信息。",
      },
    },
  },
  de: {
    translation: {
      nav: {
        home: "Startseite",
        about: "Über uns",
        services: "Dienstleistungen",
        projects: "Projekte",
        contact: "Kontakt",
      },
      hero: {
        title: "Wir Bauen die Zukunft",
        subtitle:
          "Bei Yeni Vizyon Yapı verwandeln wir Ihre Träume mit modernem architektonischem Verständnis und jahrelanger Erfahrung in Realität.",
        cta: "Unsere Projekte Entdecken",
        ctaSecondary: "Kontaktieren Sie Uns",
      },
      about: {
        tag: "Über Uns",
        title: "Starke Vision in Metall und Automatisierung",
        desc: "Yeni Vizyon Yapı ist ein führendes Unternehmen mit Sitz in Istanbul, das sich auf automatische Rollladensysteme, Stahlbaukonstruktionen und architektonische Metalllösungen spezialisiert hat. Wir verbinden hohe Qualitätsstandards mit architektonischer Präzision bei Schmiedeeisen-, Aluminiumbau- und industriellen Automatisierungsprojekten, die Ästhetik und Sicherheit vereinen.",
        desc2:
          "Mit langlebigen Stahlkonstruktionen, modernen Bürotrennwandsystemen und intelligenten Zugangslösungen realisieren wir Ihre Projekte pünktlich durch fortschrittliche Technologie und fachmännische Handwerkskunst. Wir kombinieren unser technisches Können mit innovativen Designs, die Ihren Räumen Mehrwert verleihen.",
        experience: "Jahre Erfahrung",
        iso: "Handwerkskunst auf hohem Niveau",
        team: "Technisches Expertenteam",
        delivery: "Schnelle und sichere Montage",
        quality: "100% Stahl- und Automatisierungsgarantie",
      },
      services: {
        tag: "Unsere Dienstleistungen",
        title: "Professionelle Metall-, Automatisierungs- und Baulösungen",
        residential: "Stahlbau- und Überdachungssysteme",
        residentialDesc:
          "Wir realisieren moderne und langlebige Stahl-/Fertighäuser, offene Parkplatzüberdachungen und hochbelastbare Stahlbauprojekte.",
        commercial: "Automatische Tür- und Rollladensysteme",
        commercialDesc:
          "Wir installieren automatische Glasschiebetüren, motorisierte Rollläden und industrielle Schiebetore für Geschäfte und Anlagen.",
        renovation: "Aluminiumbau und Bürotrennwände",
        renovationDesc:
          "Wir setzen ästhetische Aluminiumschaufenster, Außenfassaden und moderne gläserne Bürotrennwandsysteme für Arbeitsplätze und Gewerbeflächen um.",
        infrastructure: "Stahltreppensysteme",
        infrastructureDesc:
          "Wir fertigen hochsichere Feuertreppen, dekorative Stahltreppen und industrielle Arbeitsbühnen für den Innen- und Außenbereich.",
        consulting: "Leichtstahl- und Wandprofilsysteme",
        consultingDesc:
          "Wir bauen verzinkte Leichtstahl-Wandrahmen, Trockenbauprofile und massive Trennwandsysteme zur Strukturierung Ihrer Innenräume.",
        design: "Schmiedeeisen und architektonische Metallarbeiten",
        designDesc:
          "Wir fertigen maßgeschneiderte, luxuriöse schmiedeeiserne Garten-/Villentore, Geländer und kunstvolle Metallarbeiten, die Ihren Räumen Wert verleihen.",
      },
      projects: {
        tag: "Unsere Projekte",
        title: "Abgeschlossene Projekte",
        subtitle: "Einige unserer erfolgreich abgeschlossenen Projekte",
        project: "Projekt",
        all: "Alle Projekte",
      },
      contact: {
        tag: "Kontakt",
        title: "Kontaktieren Sie Uns",
        subtitle:
          "Erhalten Sie kostenlose Besichtigung und Beratung für Ihre Projekte.",
        name: "Ihr vollständiger Name",
        email: "Ihre E-Mail-Adresse",
        phone: "Ihre Telefonnummer",
        message: "Ihre Nachricht",
        send: "Nachricht Senden",
        success: "Ihre Nachricht wurde erfolgreich gesendet!",
        address: "Adresse",
        addressVal:
          "Y. Dudullu Mah. Nato Yolu Cad. No: 174/1 Ümraniye / İstanbul",
        phoneVal: "0532 449 85 36",
        emailVal: "yenivizyonyapiistanbul@gmail.com",
        available: "Rund um die Uhr erreichbar",
        namePlaceholder: "Max Mustermann",
        emailPlaceholder: "beispiel@email.com",
        phonePlaceholder: "+90 532 000 00 00",
      },
      footer: {
        desc: "Yeni Vizyon Yapı mit Sitz in Istanbul ist ein professioneller Spezialist für Metall- und Bausysteme, der ein breites Spektrum an Dienstleistungen anbietet – von automatischen Rollladensystemen über schweren Stahlbau bis hin zu modernen Aluminiumkonstruktionen und ästhetischen Schmiedeeisenlösungen. Wir verleihen Ihren Projekten Wert, indem wir Qualität, Vertrauen und innovatives Design vereinen.",
        quickLinks: "Schnelllinks",
        contactInfo: "Kontaktinformationen",
        rights: "Alle Rechte vorbehalten.",
      },
      stats: {
        experience: "Jahre Erfahrung",
        projects: "Abgeschlossene Projekte",
        clients: "Zufriedene Kunden",
        area: "m² Baufläche",
      },
      whatsapp: {
        tooltip: "Hallo! Wie können wir Ihnen helfen?",
        defaultMessage: "Hallo, ich möchte Informationen erhalten.",
      },
    },
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        projects: "مشاريعنا",
        contact: "اتصل بنا",
      },
      hero: {
        title: "نبني المستقبل",
        subtitle:
          "في يني فيزيون يابي، نحول أحلامكم إلى حقيقة بفهم معماري حديث وسنوات من الخبرة.",
        cta: "اكتشف مشاريعنا",
        ctaSecondary: "تواصل معنا",
      },
      about: {
        tag: "من نحن",
        title: "رؤية قوية في مجال المعادن والأتمتة",
        desc: "Yeni Vizyon Yapı هي شركة رائدة مقرها إسطنبول تتخصص في أنظمة الأبواب الدوارة الأوتوماتيكية، والهياكل الفولاذية، والحلول المعدنية المعمارية. نحن نجمع بين معايير الجودة العالية والدقة المعمارية في مشاريع الحديد المطاوع، وأعمال الألمنيوم، والأتمتة الصناعية التي تجمع بين الجمال والأمان.",
        desc2:
          "من خلال الهياكل الفولاذية المتينة، وأنظمة قواطع المكاتب الحديثة، وحلول المرور الذكية؛ نقوم بإنجاز مشاريعكم في الوقت المحدد باستخدام التكنولوجيا المتقدمة والمهارة المهنية. نحن نمزج براعتنا الفنية مع تصميمات مبتكرة تضفي قيمة على مساحاتكم.",
        experience: "سنوات من الخبرة",
        iso: "حرفية عالية المعايير",
        team: "فريق فني خبير",
        delivery: "تركيب سريع وآمن",
        quality: "ضمان 100% على الفولاذ والأتمتة",
      },
      services: {
        tag: "خدماتنا",
        title: "حلول احترافية في المعادن، الأتمتة، والبناء",
        residential: "الهياكل الفولاذية وأنظمة المظلات",
        residentialDesc:
          "نقوم بتنفيذ منازل جاهزة وفولاذية حديثة ومتينة، ومظلات مواقف السيارات المفتوحة، ومشاريع البناء الفولاذية ذات القدرة العالية على التحمل.",
        commercial: "أنظمة الأبواب والأنظمة الأوتوماتيكية",
        commercialDesc:
          "نقوم بتركيب أبواب زجاجية ذات مستشعرات ضوئية، وأبواب رول شتر أوتوماتيكية، وأبواب سحابة صناعية للحدائق والمصانع والمتاجر والمرافق.",
        renovation: "أعمال الألمنيوم وقواطع المكاتب",
        renovationDesc:
          "نقوم بتنفيذ واجهات ألمنيوم جمالية، وواجهات خارجية، وأنظمة قواطع زجاجية داخلية حديثة لأماكن العمل والمناطق التجارية.",
        infrastructure: "أنظمة السلالم الفولاذية",
        infrastructureDesc:
          "نصنع سلالم طوارئ عالية الأمان، وسلالم فولاذية مزخرفة، ومنصات عمل صناعية للمساحات الداخلية والخارجية.",
        consulting: "أنظمة الفولاذ الخفيف ومقاطع الجدران",
        consultingDesc:
          "نقوم ببناء هياكل جدران من الفولاذ الخفيف المجلفن، ومقاطع ألواح الجبس، وأنظمة جدران فاصلة متينة لتشكيل مساحاتك الداخلية.",
        design: "الحديد المطاوع والأعمال الحديدية المعمارية",
        designDesc:
          "نقوم بتصميمات مخصصة بلمسات فاخرة لأبواب الحدائق والفلل من الحديد المطاوع، والدرابزين، والأعمال الحديدية الفنية التي تضفي قيمة على مساحاتك.",
      },
      projects: {
        tag: "مشاريعنا",
        title: "المشاريع المكتملة",
        subtitle: "بعض مشاريعنا التي أنجزناها بنجاح",
        project: "مشروع",
        all: "جميع المشاريع",
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
        addressVal:
          "Y. Dudullu Mah. Nato Yolu Cad. No: 174/1 Ümraniye / İstanbul",
        phoneVal: "0532 449 85 36",
        emailVal: "yenivizyonyapiistanbul@gmail.com",
        available: "متاح على مدار الساعة",
        namePlaceholder: "أحمد محمد",
        emailPlaceholder: "example@email.com",
        phonePlaceholder: "+90 532 000 00 00",
      },
      footer: {
        desc: "شركة Yeni Vizyon Yapı، ومقرها إسطنبول، هي متخصصة محترفة في أنظمة المعادن والبناء، تقدم مجموعة واسعة من الخدمات بدءاً من أنظمة الأبواب الدوارة الأوتوماتيكية إلى الهياكل الفولاذية الثقيلة، ومن أعمال الألمنيوم الحديثة إلى حلول الحديد المطاوع الجمالية. نحن نضيف قيمة لمشاريعكم من خلال الجمع بين الجودة والثقة والتصميم المبتكر.",
        quickLinks: "روابط سريعة",
        contactInfo: "معلومات الاتصال",
        rights: "جميع الحقوق محفوظة.",
      },
      stats: {
        experience: "سنوات من الخبرة",
        projects: "مشروع مكتمل",
        clients: "عميل سعيد",
        area: "م² مساحة البناء",
      },
      whatsapp: {
        tooltip: "مرحباً! كيف يمكننا مساعدتك؟",
        defaultMessage: "مرحبا، أريد الحصول على معلومات.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng") || "tr",
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
  });

export default i18n;
