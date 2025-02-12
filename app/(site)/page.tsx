import { Metadata } from "next";
import Dashboard from "@/components/Dashboard";
import Brands from "@/components/Brands";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import HomeDashboard from "@/components/HomeDashboard";


import { getPosts } from "@/lib/service";


export const metadata: Metadata = {
  title: "Sharpsys - Elevate your Business Productivity",
  description: "This is the home for your entire business solutions",
};

export default async function Home() {
  const data = await getPosts();
  return (
    <main>
      <Dashboard />
      <Brands />
      <HomeDashboard posts={data} />
      <FAQ />
      <Contact />
    </main>
  );
}
