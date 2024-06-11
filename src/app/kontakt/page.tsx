import Navbar from "../components/ui/Navbar";
import StepCard from "../components/ui/StepCard";
import ButtonPrimary from "../components/ui/ButtonPrimary";
import MessageCard from "../components/ui/MessageBox";
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "../components/ui/ButtonSecondary";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <main className="px- flex flex-col items-center bg-white tracking-tight text-black">
      <Navbar />



      {/* Hjälpa Section */}
      <section className="mt-32 md:mt-52 flex w-full flex-col items-center px-3 text-center sm:px-8 ">
        <p className="text-4xl font-medium tracking-tighter md:text-5xl">
          Har du frågor < br /> eller behöver hjälp?
        </p>
        <p className="mt-8 text-xl max-w-xl font-medium">
          Tveka inte att kontakta oss.{" "}
          <span className="opacity-50">
            {" "}
            Tillsammans försöker vi hitta ett betalningsalternativ som passar din ekonomiska situation.
          </span>
        </p>
      </section>


      {/* Kontakt Section */}
      <section className="m-32 flex w-full max-w-6xl flex-col items-center px-3 text-center sm:px-8 ">
        <div className="grid grid-cols-1 grid-rows-2 gap-16 text-left md:grid-cols-3">
          <div className="flex flex-col">
            <p className="text-xl font-medium">Telefon</p>
            <p className="mt-4 opacity-50">
              Kundtjänst öppettider: <br />
              Vardagar 08:00-18:00
            </p>
            <Link className="mt-4 hover:underline" href={"tel:08-123 45 67"}>08-123 45 67</Link>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-medium">E-post</p>

            <Link className="mt-4 hover:underline" href={"tel:08-123 45 67"}>info@payable.se</Link>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-medium">Mina sidor</p>
            <p className="mt-4 opacity-50">
              Kommunicera med kundservice <br />
            </p>
            <Link className="mt-4 hover:underline" href={"tel:08-123 45 67"}>Logga in på Mina Sidor</Link>
          </div>


        </div>

      </section>





      <Footer />
    </main>
  );
}
