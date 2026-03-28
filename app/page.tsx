import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <div className="min-h-screen pb-">
      <Hero />
      <Overview/>  
      <Projects/>
      <Experience/> 
      <Education/> 
      <Tools/>
    </div>
  );
}