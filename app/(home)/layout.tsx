import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import ClientProviders from "@/components/shared/client-providers";

const HomeLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <ClientProviders>{children}</ClientProviders>
    <Footer />
  </div>
);

export default HomeLayout;
