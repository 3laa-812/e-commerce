import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

const HomeLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 flex flex-col">{children}</main>
    <Footer />
  </div>
);

export default HomeLayout;
