import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MessageCircle } from "lucide-react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 pt-16">{children}</main>
    <Footer />
    <a
      href="https://wa.me/qr/DO744A2JQRO7H1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-colors"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  </div>
);

export default Layout;
