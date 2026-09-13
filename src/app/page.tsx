import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";

const links = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/username",
    icon: "Gh",
    accent: "bg-neutral-900",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "in",
    accent: "bg-[#0A66C2]",
  },
  {
    id: "blog",
    label: "Blog",
    url: "https://blog.example.com",
    icon: "B",
    accent: "bg-emerald-600",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-12 dark:from-neutral-950 dark:to-neutral-900">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center gap-8 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-200/60 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
          <Profile name="홍길동" bio="세계 최강 바이브코드" />
          <LinkList links={links} />
        </div>
        <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-600">
          © 2026 링크나무
        </p>
      </div>
    </main>
  );
}
