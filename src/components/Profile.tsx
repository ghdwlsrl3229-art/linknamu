"use client";

import { trackClick } from "@/lib/trackClick";

type ProfileProps = {
  name: string;
  bio: string;
};

export default function Profile({ name, bio }: ProfileProps) {
  return (
    <button
      type="button"
      onClick={() => trackClick("profile")}
      className="group flex flex-col items-center gap-3"
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-3xl font-bold text-white shadow-lg shadow-indigo-500/20 transition-transform duration-200 group-hover:scale-105 group-active:scale-95 dark:shadow-black/40">
        {name.slice(0, 1)}
      </div>
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          {name}
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">{bio}</p>
      </div>
    </button>
  );
}
