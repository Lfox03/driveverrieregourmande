import { BasketProvider } from "@/lib/basket-context"
import { NoticeBanner } from "@/components/notice-banner"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <BasketProvider>
      <div className="min-h-screen flex flex-col">
        <NoticeBanner />
        <Header />
        <main className="flex-1">
          <Hero />
          <ProductGrid />
        </main>
        <Footer />
      </div>
    </BasketProvider>
  )
}
