import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] transition-colors duration-500 py-10 px-4">
      <div className="max-w-[650px] mx-auto space-y-6">
        <Header />
      </div>
    </main>
  );
}