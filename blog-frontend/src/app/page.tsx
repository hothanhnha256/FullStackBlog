import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import AboutMe from "@/components/home_components/aboutme/page";
import FeaturePost from "@/components/home_components/feature_post/page";
import PopularPost from "@/components/home_components/popular_post/page";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-5">
      <Header />
      <div className="flex-col w-full justify-center ">
        <PopularPost />
        <AboutMe />
        <FeaturePost />
      </div>
      <Footer />
    </div>
  );
}
