import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import CustomCKEditor from "@/components/writing/page";
export default function Writing() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex-col w-full justify-center p-5">
        <CustomCKEditor />
      </div>
      <Footer />
    </div>
  );
}
