import { images, type ProjectCategory, type ProjectImage } from "@/lib/images";

export const COMPANY = {
  name: "Yeni Vizyon Yapı",
  phone: "0532 449 85 36",
  phoneHref: "tel:+905324498536",
  whatsapp: "905324498536",
  email: "yenivizyonyapiistanbul@gmail.com",
  address: "Y. Dudullu Mah. Nato Yolu Cad. No: 174/1 Ümraniye / İstanbul",
  site: "yenivizyonyapi.com",
  year: 2026,
};

export const waLink = (text: string) =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;

export const STATS = [
  { value: "15+", label: "Yıllık deneyim" },
  { value: "200+", label: "Tamamlanan proje" },
  { value: "500+", label: "Mutlu müşteri" },
  { value: "50K+", label: "m² inşaat alanı" },
];

export const PROMISES = [
  { title: "Ücretsiz keşif", text: "Yerinde ölçü ve danışmanlık için ücret almıyoruz." },
  { title: "Uzman kadro", text: "Projeleriniz teknik uzman kadromuzun elinden çıkar." },
  { title: "Hızlı ve güvenli montaj", text: "Projeleri zamanında ve güvenli şekilde teslim ederiz." },
  { title: "Çelik ve otomasyon garantisi", text: "Çelik ve otomasyon işlerimiz garanti kapsamındadır." },
];

export interface Category {
  key: ProjectCategory;
  code: string;
  title: string;
  short: string;
  desc: string;
  uses: string[];
  photos: ProjectImage[];
}

const base: Omit<Category, "code" | "photos">[] = [
  {
    key: "autoDoor",
    title: "Otomatik Kapı ve Kepenk Sistemleri",
    short: "Kepenk ve Otomatik Kapı",
    desc: "Mağazalar ve tesisler için fotoselli cam kapılar, otomatik motorlu kepenkler ve endüstriyel yana kayar bahçe ve fabrika kapıları kuruyoruz.",
    uses: ["Motorlu kepenk", "Fotoselli cam kapı", "Yana kayar bahçe ve fabrika kapısı"],
  },
  {
    key: "steelStructure",
    title: "Çelik Yapı ve Sundurma Sistemleri",
    short: "Çelik Yapı ve Sundurma",
    desc: "Modern ve dayanıklı çelik ve prefabrik evler, açık otopark sundurmaları ve yüksek taşıma kapasiteli çelik konstrüksiyon projeleri hayata geçiriyoruz.",
    uses: ["Çelik ve prefabrik ev", "Açık otopark sundurması", "Yüksek taşıma kapasiteli konstrüksiyon"],
  },
  {
    key: "aluminum",
    title: "Alüminyum Doğrama ve Ofis Bölme",
    short: "Alüminyum ve Ofis Bölme",
    desc: "İş yerleri ve ticari alanlar için estetik alüminyum vitrinler, dış cepheler ve modern ofis içi cam bölme sistemleri uyguluyoruz.",
    uses: ["Alüminyum vitrin", "Dış cephe", "Mağaza girişi", "Ofis içi cam bölme"],
  },
  {
    key: "stairs",
    title: "Çelik Merdiven Sistemleri",
    short: "Çelik Merdiven",
    desc: "İç ve dış mekanlar için yüksek güvenlikli yangın merdivenleri, dekoratif çelik merdivenler ve endüstriyel çalışma platformları üretiyoruz.",
    uses: ["Yangın merdiveni", "Dekoratif çelik merdiven", "Endüstriyel çalışma platformu"],
  },
  {
    key: "lightSteel",
    title: "Hafif Çelik ve Duvar Profil Sistemleri",
    short: "Hafif Çelik ve Profil",
    desc: "İç mekanlarınızı yapılandırmak için galvanizli hafif çelik duvar karkasları, alçıpan profilleri ve sağlam bölme duvar sistemleri inşa ediyoruz.",
    uses: ["Galvanizli duvar karkası", "Alçıpan profili", "Bölme duvar sistemi"],
  },
  {
    key: "wroughtIron",
    title: "Ferforje ve Mimari Demir Doğrama",
    short: "Ferforje",
    desc: "Mekanlarınıza değer katan özel tasarım, lüks detaylı ferforje bahçe ve villa kapıları, korkuluklar ve sanatsal demir doğrama işleri yapıyoruz.",
    uses: ["Villa ve bahçe kapısı", "Korkuluk", "Sanatsal demir doğrama"],
  },
];

export const CATEGORIES: Category[] = base.map((c, i) => ({
  ...c,
  code: String(i + 1).padStart(2, "0"),
  photos: images.projects.filter(p => p.category === c.key),
}));
