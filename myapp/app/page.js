import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/Newsletter/Newsletter";
import Press from "@/components/Press/Press";
import Product from "@/components/Product/Product";

export default function Home() {
  return (
    <main>
      <Hero />
      <Product />
      <Press />
      <Newsletter />
    </main>
  )
}
