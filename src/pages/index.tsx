import { FaFacebook } from "react-icons/fa";
import SMIcons from "@/components/SocialMediaIcons";
import SuppliersSection from "@/components/SuppliersSection/SuppliersSection";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import AboutComponent from "@/components/FooterLinks";

export default function Home() {
  return (
    <>
      <main className="bg-gray-200  flex justify-center align-middle ">
        <Form />
      </main>
      <main className="bg-white flex justify-center align-middle">
        {/* <Footer /> */}
        {/* <AboutComponent /> */}
      </main>
    </>
  );
}
