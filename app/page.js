import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Clients from "@/components/Clients/Clients";
import CompanyDetails from "@/components/CompanyDetails/CompanyDetails";
import Description from "@/components/Description/Description";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import { Insights } from "@/components/Insights/Insights";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner/>
       <About />
       <Gallery />
       <Clients />
       <Description />
       <CompanyDetails />
       <Insights />
       <Footer />
    </main>
  );
}
