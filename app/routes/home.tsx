import { Link } from "react-router";
import type { Route } from "./+types/home";
import AsidePage from "./aside/aside";
import Hero from "~/components/hero";
import PaymentToggle from "~/components/pjd";
import WalletEarning from "~/components/walletEarning";
import SellingSection from "~/components/sellingSection";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "DataHub Website" },
    { name: "description", content: "Welcome to DataHub powered by React Router" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
   
      
      <div className="md:w-64 w-full md:block hidden">
        <AsidePage />
      </div>

      <main className="flex-1 p-4 sm:p-6 space-y-6">
        <div>
          <Hero />
        </div>

        <section className="mt-6 sm:mt-8">
          <PaymentToggle />
        </section>

        <WalletEarning />
        <SellingSection />
      </main>
    </div>
  );
}
