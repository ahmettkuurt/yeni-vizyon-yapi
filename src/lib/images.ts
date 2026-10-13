// Tüm görseller public/images klasöründedir.
const IMG = "/images";

export type ProjectCategory =
  | "steelStructure"
  | "autoDoor"
  | "aluminum"
  | "stairs"
  | "lightSteel"
  | "wroughtIron";

export interface ProjectImage {
  url: string;
  category: ProjectCategory;
  title: string;
}

const projects: ProjectImage[] = [
  // Çelik Yapı ve Sundurma
  { url: `${IMG}/celik-ev.webp`, title: "Çelik konstrüksiyon ev", category: "steelStructure" },
  { url: `${IMG}/otopark-sundurma.webp`, title: "Kademeli otopark sundurması", category: "steelStructure" },

  // Otomatik Kapı ve Kepenk
  { url: `${IMG}/kepenk-1.webp`, title: "Motorlu alüminyum kepenk", category: "autoDoor" },
  { url: `${IMG}/kepenk-2.webp`, title: "Otomatik kepenk, iç cephe", category: "autoDoor" },
  { url: `${IMG}/kepenk-servis-kapili.webp`, title: "Servis kapılı kepenk", category: "autoDoor" },
  { url: `${IMG}/fotoselli-kapi-1.webp`, title: "Fotoselli cam giriş kapısı", category: "autoDoor" },
  { url: `${IMG}/fotoselli-kapi-2.webp`, title: "Mağaza girişi, fotoselli kayar kapı", category: "autoDoor" },
  { url: `${IMG}/yana-kayar-kapi.webp`, title: "Yana kayar endüstriyel kapı", category: "autoDoor" },

  // Alüminyum Doğrama ve Ofis Bölme
  { url: `${IMG}/aluminyum-vitrin.webp`, title: "Alüminyum vitrin ve giriş", category: "aluminum" },
  { url: `${IMG}/ofis-bolme.webp`, title: "Ofis bölme sistemi", category: "aluminum" },

  // Çelik Merdiven
  { url: `${IMG}/yangin-merdiveni.webp`, title: "Dış cephe yangın merdiveni", category: "stairs" },
  { url: `${IMG}/celik-merdiven-1.webp`, title: "Dekoratif iç merdiven", category: "stairs" },
  { url: `${IMG}/celik-merdiven-2.webp`, title: "Depo ve atölye merdiveni", category: "stairs" },
  { url: `${IMG}/celik-merdiven-3.webp`, title: "Galvaniz dış merdiven", category: "stairs" },

  // Hafif Çelik ve Duvar Profil
  { url: `${IMG}/hafif-celik-1.webp`, title: "Hafif çelik duvar karkası", category: "lightSteel" },
  { url: `${IMG}/hafif-celik-2.webp`, title: "Koridor bölme duvar profili", category: "lightSteel" },

  // Ferforje
  { url: `${IMG}/ferforje-kapi-1.webp`, title: "Ferforje villa kapısı", category: "wroughtIron" },
  { url: `${IMG}/ferforje-kapi-2.webp`, title: "Ferforje bahçe kapısı", category: "wroughtIron" },
];

export const images = {
  logo: `${IMG}/logo.png`,
  hero: `${IMG}/hero.webp`,
  about: `${IMG}/about.webp`,
  projects,
};
