import { Prices } from "@/components/Prices";
import { Booking } from "@/components/Booking";
import { Reveal } from "@/components/Reveal";
import { img } from "@/components/img";

const PHONE = "+7 (812) 649-27-18";

const P = {
  hero: "photo-1622329821376-a19fd6002562",
  polish: "photo-1780558852670-3f49298ecc1f",
  hood: "photo-1658244500543-47f32dc51dc2",
  headlight: "photo-1758985057225-cb689fb5175e",
  spray: "photo-1624884269715-70759892cd29",
  leather: "photo-1682858110563-3f609263d418",
  foam: "photo-1607860108855-64acf2078ed9",
  bmw: "photo-1758976194379-b94053358e33",
  red: "photo-1508974239320-0a029497e820",
  black: "photo-1714438064150-8f33340da669",
  foam2: "photo-1605164598708-25701594473e",
  mustang: "photo-1520587210458-bd3bee813b97",
};

const services = [
  { t: "Полировка кузова", d: "Убираем царапины, паутинку и мутность. Лак снова блестит.", p: "от 6 900 ₽", photo: P.polish },
  { t: "Керамика", d: "Защитный слой на 2 года: грязь хуже липнет, машина легче моется.", p: "от 24 900 ₽", photo: P.hood },
  { t: "Химчистка салона", d: "Сиденья, потолок, ковры и пластик. Уходит грязь и запахи.", p: "от 9 900 ₽", photo: P.spray },
  { t: "Плёнка от сколов", d: "Прозрачная плёнка на капот, бампер и фары. Гарантия 5 лет.", p: "от 39 900 ₽", photo: P.headlight },
  { t: "Уход за кожей", d: "Чистим и питаем кожу, чтобы не трескалась и не блестела.", p: "от 4 900 ₽", photo: P.leather },
  { t: "Детейлинг-мойка", d: "Ручная мойка в 3 фазы, сушка, чернение резины.", p: "от 2 500 ₽", photo: P.foam },
];

const gallery = [
  { photo: P.bmw, t: "BMW M3 · керамика", big: true },
  { photo: P.red, t: "McLaren · полировка" },
  { photo: P.black, t: "Genesis G80 · плёнка" },
  { photo: P.foam2, t: "Honda Civic · мойка" },
  { photo: P.mustang, t: "Dodge Challenger · полировка" },
];

const steps = [
  ["Осмотр", "Бесплатно. Показываем все дефекты под лампой и замеряем лак."],
  ["Цена", "Называем точную сумму и срок. Доплат потом не будет."],
  ["Работа", "Присылаем фото и видео процесса в мессенджер."],
  ["Выдача", "Показываем результат и рассказываем про уход."],
];

export default function Page() {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="wrap flex h-20 items-center justify-between">
          <div className="font-display text-lg font-extrabold tracking-wide">GLOSS<span className="text-acid">LAB</span></div>
          <nav className="hidden gap-8 text-sm font-semibold text-white/80 md:flex">
            <a href="#uslugi" className="hover:text-acid">Услуги</a>
            <a href="#ceny" className="hover:text-acid">Цены</a>
            <a href="#raboty" className="hover:text-acid">Работы</a>
            <a href="#zapis" className="hover:text-acid">Запись</a>
          </nav>
          <span className="hidden text-sm font-extrabold sm:block">{PHONE}</span>
        </div>
      </header>

      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img src={img(P.hero, 2000)} alt="Мастер полирует чёрный автомобиль" className="kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/40 to-transparent" />
        <div className="wrap relative z-10 pb-16 pt-32 md:pb-24">
          <span className="tag rise"><i className="pulse-dot h-2 w-2 rounded-full bg-acid" /> Сегодня есть свободные окна</span>
          <h1 className="rise mt-6 max-w-3xl font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight md:text-7xl" style={{ animationDelay: ".1s" }}>
            Детейлинг <span className="text-acid">в Приморском</span> районе
          </h1>
          <p className="rise mt-6 max-w-xl text-lg text-white/80 md:text-xl" style={{ animationDelay: ".2s" }}>
            Полировка, керамика и химчистка. Точную цену называем после бесплатного осмотра.
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: ".3s" }}>
            <a href="#zapis" className="btn btn-acid">Записаться на осмотр</a>
            <a href="#ceny" className="btn btn-white">Цены по классу авто</a>
          </div>
          <dl className="rise mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-6" style={{ animationDelay: ".4s" }}>
            {[["1 200", "машин обслужили"], ["5 лет", "гарантия на плёнку"], ["1 день", "на полировку"]].map(([a, b]) => (
              <div key={b}><dt className="font-display text-2xl font-extrabold md:text-3xl">{a}</dt><dd className="mt-1 text-sm text-white/60">{b}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <div className="overflow-hidden border-y border-line bg-acid py-4 text-bg">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-lg font-extrabold uppercase">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Полировка", "Керамика", "Химчистка", "Плёнка", "Уход за кожей", "Мойка"].map((s) => (
              <span key={s + k} className="flex items-center gap-10">{s}<span>✦</span></span>
            )),
          )}
        </div>
      </div>

      <section id="uslugi" className="wrap py-24">
        <Reveal>
          <span className="tag">Услуги</span>
          <h2 className="h2 mt-4">Услуги и цены</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <article className="group relative h-[340px] overflow-hidden rounded-3xl border border-line">
                <img src={img(s.photo, 800, 680)} alt={s.t} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="rounded-full bg-acid px-3 py-1 text-xs font-extrabold text-bg">{s.p}</span>
                  <h3 className="mt-3 font-display text-xl font-extrabold">{s.t}</h3>
                  <p className="mt-2 text-sm text-white/75">{s.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="ceny" className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] rounded-full bg-acid/10 blur-3xl" />
        <div className="wrap relative">
          <Reveal>
            <span className="tag">Цены</span>
            <h2 className="h2 mt-4">Цена зависит от размера машины</h2>
            <p className="mt-4 mb-10 text-lg text-muted">Выберите класс — цены обновятся.</p>
          </Reveal>
          <Reveal delay={100}><Prices /></Reveal>
        </div>
      </section>

      <section id="raboty" className="wrap py-24">
        <Reveal>
          <span className="tag">Работы</span>
          <h2 className="h2 mt-4">Недавние машины</h2>
        </Reveal>
        <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.t} delay={i * 80} className={g.big ? "md:col-span-2" : ""}>
              <figure className="group relative h-[220px] overflow-hidden rounded-3xl">
                <img src={img(g.photo, g.big ? 1200 : 700, 440)} alt={g.t} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold backdrop-blur">{g.t}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap py-24">
        <Reveal><h2 className="h2">Как всё проходит</h2></Reveal>
        <ol className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <Reveal key={t} delay={i * 100}>
              <li className="h-full rounded-3xl border border-line bg-card p-6 transition hover:border-acid">
                <span className="font-display text-4xl font-extrabold text-acid">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-extrabold">{t}</h3>
                <p className="mt-2 text-muted">{d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="zapis" className="wrap pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line">
            <img src={img(P.black, 1600, 900)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/60" />
            <div className="relative grid gap-10 p-8 md:grid-cols-[1fr_1.3fr] md:p-14">
              <div>
                <h2 className="h2">Бесплатный осмотр</h2>
                <p className="mt-4 text-lg text-white/75">Приезжайте, покажем дефекты и посчитаем точную стоимость. Осмотр бесплатный, даже если не будете заказывать.</p>
                <p className="mt-8 font-display text-2xl font-extrabold text-acid">{PHONE}</p>
                <p className="mt-2 text-sm text-muted">Приморский р-н, Богатырский пр. · каждый день 9:00–21:00</p>
              </div>
              <Booking />
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-line py-10">
        <div className="wrap flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="font-display font-extrabold">GLOSS<span className="text-acid">LAB</span></div>
          <p className="text-xs opacity-60">© {new Date().getFullYear()} GLOSS LAB. Все права защищены.</p>
        </div>
      </footer>
    </>
  );
}
