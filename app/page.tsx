import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      <Header />
      <Hero />
      <Overview/>  
      <Projects/>
      <Experience/>
    </div>
  );
}