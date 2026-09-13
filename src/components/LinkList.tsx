"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";

type Link = {
  id: string;
  label: string;
  url: string;
  icon: string;
  accent: string;
};

export default function LinkList({ links }: { links: Link[] }) {
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(links.map((link) => [link.id, 0]))
  );

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => {
        if (!cancelled) {
          setCounts((prev) => ({ ...prev, ...data }));
        }
      })
      .catch(() => {
        // 조회 실패 시 0회 표시를 그대로 유지
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleIncrement = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          {...link}
          count={counts[link.id] ?? 0}
          onIncrement={handleIncrement}
        />
      ))}
    </div>
  );
}
