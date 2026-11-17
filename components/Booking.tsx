"use client";
import { useState } from "react";

export function Booking({ dark = true }: { dark?: boolean }) {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="rounded-2xl border border-acid p-8 text-center">
        <p className="text-2xl font-bold">Заявка отправлена ✓</p>
        <p className="mt-2 text-muted">Мы перезвоним в течение 15 минут и подберём удобное время.</p>
      </div>
    );
  const field = `w-full rounded-xl border border-line px-4 py-3 outline-none focus:border-acid ${dark ? "bg-bg" : "bg-white"}`;
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="grid gap-3 md:grid-cols-2"
    >
      <input required placeholder="Имя" className={field} />
      <input required type="tel" placeholder="Телефон" className={field} />
      <input placeholder="Марка и модель авто" className={field} />
      <select className={field} defaultValue="">
        <option value="" disabled>Услуга</option>
        <option>Полировка</option><option>Керамика</option><option>Химчистка</option><option>Плёнка</option><option>Не знаю — нужна консультация</option>
      </select>
      <button className="btn btn-acid md:col-span-2">Записаться на осмотр</button>
      <p className="text-xs text-muted md:col-span-2">Перезвоним за 15 минут в рабочее время. Осмотр и консультация бесплатно.</p>
    </form>
  );
}
