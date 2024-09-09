import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import AboutMe from "@/components/home_components/aboutme/page";
export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex w-full justify-center">
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
}
