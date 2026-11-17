"use client";
import { useState } from "react";

const classes = ["Седан / хэтчбек", "Кроссовер", "Внедорожник / минивэн"] as const;

const packages = [
  { name: "Экспресс-блеск", desc: "Мойка, деконтаминация, один шаг полировки, воск", time: "4 часа", prices: [6900, 8400, 9900] },
  { name: "Керамика 2 года", desc: "Двухэтапная полировка, керамическое покрытие в 2 слоя, диски и стёкла", time: "2 дня", prices: [24900, 29900, 34900], hit: true },
  { name: "Химчистка салона", desc: "Сиденья, потолок, ковры, пластик, кожа — с пропиткой", time: "6 часов", prices: [9900, 11900, 13900] },
  { name: "Плёнка на зоны риска", desc: "Капот, бампер, фары, зеркала — полиуретан, гарантия 5 лет", time: "2 дня", prices: [39900, 44900, 52900] },
];

export function Prices() {
  const [c, setC] = useState(0);
  return (
    <div>
      <div className="inline-flex flex-wrap gap-1 rounded-xl border border-line p-1">
        {classes.map((name, i) => (
          <button
            key={name}
            onClick={() => setC(i)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${c === i ? "bg-acid text-bg" : "text-muted hover:text-fg"}`}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {packages.map((p) => (
          <div key={p.name} className={`relative rounded-2xl border p-6 ${p.hit ? "border-acid" : "border-line"} bg-card`}>
            {p.hit && <span className="absolute -top-3 left-6 rounded-full bg-acid px-3 py-1 text-xs font-bold text-bg">Выбирают чаще</span>}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <span className="whitespace-nowrap text-2xl font-extrabold">{p.prices[c].toLocaleString("ru-RU")} ₽</span>
            </div>
            <p className="mt-3 text-muted">{p.desc}</p>
            <p className="mt-4 text-sm text-muted">⏱ {p.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
