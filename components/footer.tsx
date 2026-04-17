import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer id="about" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                <span className="text-foreground font-serif text-xl font-bold">LV</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">La Verrière Gourmande</h3>
                <p className="text-sm text-background/70">Produits Agricoles de Qualité</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Une sélection authentique de produits fermiers et artisanaux, 
              choisis avec soin auprès de producteurs locaux passionnés.
            </p>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Information</h4>
            <div className="space-y-3 text-sm text-background/70">
              <p>
                Ce site est une vitrine de présentation uniquement. 
                Aucun achat en ligne n&apos;est disponible.
              </p>
              <p>
                Pour passer commande, veuillez nous contacter par téléphone 
                ou via notre site principal.
              </p>
              <a
                href="https://laverrieregourmande.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-background hover:text-background/80 transition-colors underline underline-offset-2"
              >
                laverrieregourmande.com
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              <Link 
                href="#products" 
                className="block text-sm text-background/70 hover:text-background transition-colors"
              >
                Nos Produits
              </Link>
              <Link 
                href="#about" 
                className="block text-sm text-background/70 hover:text-background transition-colors"
              >
                À Propos
              </Link>
              <a
                href="https://laverrieregourmande.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-background/70 hover:text-background transition-colors"
              >
                Site Principal
                <ExternalLink className="w-3 h-3" />
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-background/50">
                © {new Date().getFullYear()} La Verrière Gourmande. Vitrine de présentation.
              </p>
              <p className="text-sm text-background/50">
                Commandes par téléphone uniquement
              </p>
            </div>
            <p className="text-xs text-background/40 italic">
              Ce site n&apos;est pas affilié avec La Verrière Gourmande ni avec l&apos;ISNAB.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
