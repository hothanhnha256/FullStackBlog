import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import MyBlog from "@/components/myblog/page";
export default function About() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <div className="flex-grow flex w-full justify-center">
        <MyBlog />
      </div>
      <Footer />
    </div>
  );
}
