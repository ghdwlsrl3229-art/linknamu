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
      className="flex flex-col items-center gap-2"
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 text-2xl font-bold text-gray-500 dark:bg-gray-700 dark:text-gray-300">
        {name.slice(0, 1)}
      </div>
      <h1 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">{bio}</p>
    </button>
  );
}
