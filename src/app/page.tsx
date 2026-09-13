import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";

const links = [
  { id: "github", label: "GitHub", url: "https://github.com/username" },
  { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/username" },
  { id: "blog", label: "Blog", url: "https://blog.example.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center gap-8 px-4 py-10">
      <Profile name="홍길동" bio="세계 최강 바이브코드" />
      <div className="flex w-full flex-col gap-3">
        {links.map((link) => (
          <LinkCard key={link.id} id={link.id} label={link.label} url={link.url} />
        ))}
      </div>
    </main>
  );
}
