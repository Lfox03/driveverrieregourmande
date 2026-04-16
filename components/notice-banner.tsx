import { Phone, ExternalLink } from "lucide-react"

const PHONE_NUMBER = "+33 4 XX XX XX XX"

export function NoticeBanner() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 py-2.5 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span className="font-medium">Vitrine de présentation</span>
          </div>
          <span className="hidden sm:inline text-primary-foreground/60">|</span>
          <span className="text-center">
            Commandes par téléphone :{" "}
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              {PHONE_NUMBER}
            </a>
          </span>
          <span className="hidden sm:inline text-primary-foreground/60">|</span>
          <a
            href="https://laverrieregourmande.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Site principal
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  )
}
