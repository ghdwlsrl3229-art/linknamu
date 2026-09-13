"use client";

import { trackClick } from "@/lib/trackClick";

type LinkCardProps = {
  id: string;
  label: string;
  url: string;
};

export default function LinkCard({ id, label, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClick(id)}
      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-center font-medium text-gray-800 shadow-sm transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
    >
      {label}
    </a>
  );
}
