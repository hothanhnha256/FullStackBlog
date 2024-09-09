import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import PopularPost from "@/components/home_components/popular_post/page";
import FeaturePost from "@/components/home_components/feature_post/page";
export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex-col w-full justify-center p-5">
        <PopularPost />
        <FeaturePost />
      </div>
      <Footer />
    </div>
  );
}
