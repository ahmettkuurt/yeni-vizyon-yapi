import { useEffect, useRef, useState } from "react";
import { images, type ProjectImage } from "@/lib/images";
import { CATEGORIES, COMPANY, PROMISES, STATS, waLink, type Category } from "./data";

const PDF_URL = "/katalog/yeni-vizyon-yapi-katalog.pdf";
const TOTAL_PAGES = CATEGORIES.length + 3;

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="kt-ico">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z"
      />
    </svg>
  );
}

function PageFoot({ n }: { n: number }) {
  return (
    <div className="kt-foot">
      <span>{COMPANY.name} · Ürün ve Hizmet Kataloğu {COMPANY.year}</span>
      <span>{COMPANY.site} · {COMPANY.phone}</span>
      <span className="kt-foot-n">{String(n).padStart(2, "0")} / {String(TOTAL_PAGES).padStart(2, "0")}</span>
    </div>
  );
}

function CategorySheet({ c, page, onOpen }: { c: Category; page: number; onOpen: (p: ProjectImage) => void }) {
  const msg = `Merhaba, kataloğunuzdaki "${c.title}" için keşif ve teklif almak istiyorum.`;
  return (
    <section className="sheet kt-cat" id={c.key} aria-labelledby={`${c.key}-t`}>
      <div className="kt-wrap kt-cat-in">
        <header className="kt-cat-head">
          <div className="kt-code" aria-hidden="true">{c.code}</div>
          <div className="kt-cat-txt">
            <p className="kt-eyebrow">Ürün grubu {c.code} / {String(CATEGORIES.length).padStart(2, "0")}</p>
            <h2 id={`${c.key}-t`}>{c.title}</h2>
            <p className="kt-desc">{c.desc}</p>
            <ul className="kt-uses" aria-label="Uygulama alanları">
              {c.uses.map(u => <li key={u}>{u}</li>)}
            </ul>
          </div>
        </header>

        <div className="kt-grid" data-count={c.photos.length}>
          {c.photos.map((p, i) => (
            <button type="button" className="kt-shot" key={p.url} onClick={() => onOpen(p)} aria-label={`${p.title} fotoğrafını büyüt`}>
              <img src={p.url} alt={p.title} loading={i < 2 ? "eager" : "lazy"} />
              <span className="kt-cap">{p.title}</span>
            </button>
          ))}
        </div>

        <div className="kt-cta">
          <div>
            <strong>Keşif ve fiyat teklifi</strong>
            <span>Ölçü ve fiyat için yerinde ücretsiz keşif yapıyoruz. Telefon: {COMPANY.phone}</span>
          </div>
          <a className="kt-btn kt-btn-gold no-print" href={waLink(msg)} target="_blank" rel="noopener">
            <WaIcon /> Bu ürün için teklif al
          </a>
          <img className="kt-qr print-only" src="/katalog/qr-whatsapp.svg" alt="WhatsApp teklif QR kodu" />
        </div>
      </div>
      <PageFoot n={page} />
    </section>
  );
}

export default function Catalog() {
  const [open, setOpen] = useState<ProjectImage | null>(null);
  const [active, setActive] = useState<string>("");
  const dlg = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) dlg.current?.showModal();
    else dlg.current?.close();
  }, [open]);

  useEffect(() => {
    const els = CATEGORIES.map(c => document.getElementById(c.key)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="kt">
      <header className="kt-bar no-print">
        <div className="kt-wrap kt-bar-in">
          <a href="/" className="kt-brand" aria-label="Ana sayfaya dön">
            <img src={images.logo} alt="" />
            <span>Yeni Vizyon <b>Yapı</b></span>
          </a>
          <div className="kt-bar-act">
            <a className="kt-btn kt-btn-line" href={PDF_URL} download>PDF indir</a>
            <a className="kt-btn kt-btn-gold" href={waLink("Merhaba, kataloğunuzu inceledim, bilgi almak istiyorum.")} target="_blank" rel="noopener">
              <WaIcon /> <span className="kt-hide-sm">WhatsApp</span>
            </a>
          </div>
        </div>
        <nav className="kt-index" aria-label="Ürün grupları">
          <div className="kt-wrap kt-index-in">
            {CATEGORIES.map(c => (
              <a key={c.key} href={`#${c.key}`} className={active === c.key ? "on" : ""}>
                <em>{c.code}</em>{c.short}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* 01 · Kapak */}
      <section className="sheet kt-cover">
        <img className="kt-cover-bg" src={images.hero} alt="" />
        <div className="kt-wrap kt-cover-in">
          <div className="kt-cover-brand">
            <img src={images.logo} alt="Yeni Vizyon Yapı logosu" />
            <span>Yeni Vizyon <b>Yapı</b></span>
          </div>
          <div className="kt-cover-main">
            <p className="kt-eyebrow">Ürün ve Hizmet Kataloğu · {COMPANY.year}</p>
            <h1>Metal, Çelik ve Otomasyon Çözümleri</h1>
            <p className="kt-lead">
              Otomatik kepenkten çelik konstrüksiyona, alüminyum doğramadan ferforjeye kadar tüm metal yapı
              işleriniz için İstanbul'da ücretsiz keşif ve danışmanlık.
            </p>
          </div>
          <ol className="kt-toc" aria-label="İçindekiler">
            {CATEGORIES.map((c, i) => (
              <li key={c.key}>
                <a href={`#${c.key}`}>
                  <em>{c.code}</em>
                  <span>{c.title}</span>
                  <i className="print-only">s. {i + 3}</i>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 02 · Hakkımızda */}
      <section className="sheet kt-about">
        <div className="kt-wrap kt-about-in">
          <div className="kt-about-txt">
            <p className="kt-eyebrow">Hakkımızda</p>
            <h2>Estetik ile güvenliği aynı işte buluşturuyoruz</h2>
            <p>
              Yeni Vizyon Yapı, İstanbul merkezli olarak otomatik kepenk sistemleri, çelik konstrüksiyon yapılar ve
              mimari metal çözümleri alanında uzmanlaşmış bir firmadır. Ferforje, alüminyum doğrama ve endüstriyel
              otomasyon projelerinde yüksek kalite standartlarını mimari hassasiyetle birleştiriyoruz.
            </p>
            <p>
              Dayanıklı çelik yapılar, modern ofis bölme sistemleri ve akıllı geçiş çözümlerimizle projelerinizi uzman
              işçilikle zamanında hayata geçiriyoruz.
            </p>
          </div>
          <img className="kt-about-img" src={images.about} alt="Yeni Vizyon Yapı" />
          <dl className="kt-stats">
            {STATS.map(s => (
              <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
            ))}
          </dl>
          <div className="kt-band" aria-hidden="true">
            {["celik-ev", "kepenk-2", "ferforje-kapi-2"].map(k => {
              const p = images.projects.find(x => x.url.includes(`/${k}.`))!;
              return <img key={k} src={p.url} alt="" />;
            })}
          </div>
          <ul className="kt-promises">
            {PROMISES.map(p => (
              <li key={p.title}><strong>{p.title}</strong><span>{p.text}</span></li>
            ))}
          </ul>
        </div>
        <PageFoot n={2} />
      </section>

      {/* 03–08 · Ürün grupları */}
      {CATEGORIES.map((c, i) => (
        <CategorySheet key={c.key} c={c} page={i + 3} onOpen={setOpen} />
      ))}

      {/* Son sayfa · İletişim */}
      <section className="sheet kt-contact" id="iletisim">
        <div className="kt-wrap kt-contact-in">
          <div>
            <p className="kt-eyebrow">İletişim</p>
            <h2>Ücretsiz keşif için bize ulaşın</h2>
            <p className="kt-lead">
              Beğendiğiniz ürünün fotoğrafını WhatsApp'tan gönderin ya da arayın. Ekibimiz yerinde ölçü alır ve size
              özel fiyat teklifi hazırlar.
            </p>
            <div className="kt-contact-act no-print">
              <a className="kt-btn kt-btn-gold" href={waLink("Merhaba, ücretsiz keşif talep ediyorum.")} target="_blank" rel="noopener">
                <WaIcon /> WhatsApp'tan yaz
              </a>
              <a className="kt-btn kt-btn-ghost" href={COMPANY.phoneHref}>Hemen ara</a>
            </div>
          </div>
          <dl className="kt-rows">
            <div><dt>Telefon / WhatsApp</dt><dd>{COMPANY.phone}</dd></div>
            <div><dt>E-posta</dt><dd>{COMPANY.email}</dd></div>
            <div><dt>Adres</dt><dd>{COMPANY.address}</dd></div>
            <div><dt>Web</dt><dd>{COMPANY.site}</dd></div>
          </dl>
          <div className="kt-qrs">
            <figure><img src="/katalog/qr-whatsapp.svg" alt="" /><figcaption>WhatsApp'tan teklif iste</figcaption></figure>
            <figure><img src="/katalog/qr-site.svg" alt="" /><figcaption>Kataloğun güncel hali</figcaption></figure>
          </div>
        </div>
        <PageFoot n={TOTAL_PAGES} />
      </section>

      <dialog ref={dlg} className="kt-lb no-print" onClose={() => setOpen(null)} onClick={e => e.target === dlg.current && setOpen(null)}>
        {open && (
          <figure>
            <img src={open.url} alt={open.title} />
            <figcaption>
              <span>{open.title}</span>
              <button type="button" onClick={() => setOpen(null)}>Kapat</button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </div>
  );
}
