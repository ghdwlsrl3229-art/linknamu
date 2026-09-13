"use client";

import { trackClick } from "@/lib/trackClick";

type LinkCardProps = {
  id: string;
  label: string;
  url: string;
  icon: string;
  accent: string;
};

export default function LinkCard({ id, label, url, icon, accent }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClick(id)}
      className="group flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]"
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${accent}`}
      >
        {icon}
      </span>
      <span className="flex-1 font-medium text-slate-800 dark:text-slate-100">{label}</span>
      <span
        aria-hidden
        className="text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 dark:text-slate-600"
      >
        →
      </span>
    </a>
  );
}
