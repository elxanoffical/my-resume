import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      <Header />
      <Hero />
      <Overview/> 
    </div>
  );
}