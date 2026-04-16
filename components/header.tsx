"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingBasket, Menu, X, ExternalLink, Phone } from "lucide-react"
import { useState } from "react"
import { useBasket } from "@/lib/basket-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const PHONE_NUMBER = "+33 4 XX XX XX XX"

function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}

export function Header() {
  const { totalItems } = useBasket()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 border border-border">
              <Image
                src="/images/logo.jpg"
                alt="La Verrière Gourmande logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-lg md:text-xl font-semibold text-foreground leading-tight">
                La Verriere Gourmande
              </h1>
              <p className="text-xs text-muted-foreground">Produits Agricoles de Qualite</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#products" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Nos Produits
            </Link>
            <Link 
              href="#about" 
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              À Propos
            </Link>
            <Link 
              href="https://laverrieregourmande.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Site Principal
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingBasket className="w-5 h-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                      {totalItems}
                    </span>
                  )}
                  <span className="sr-only">Ouvrir le panier</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <BasketSheet />
              </SheetContent>
            </Sheet>

            {/* Mobile Menu */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link 
                href="#products" 
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nos Produits
              </Link>
              <Link 
                href="#about" 
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link 
                href="https://laverrieregourmande.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                Site Principal
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

function BasketSheet() {
  const { items, removeItem, updateQuantity, clearBasket, totalItems } = useBasket()

  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (items.length === 0) {
    return (
      <div className="flex flex-col h-full">
        <h2 className="font-serif text-xl font-semibold mb-4">Votre Sélection</h2>
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <ShoppingBasket className="w-16 h-16 text-muted-foreground/40 mb-4" />
          <p className="text-muted-foreground mb-2">Votre panier est vide</p>
          <p className="text-sm text-muted-foreground">
            Parcourez nos produits et ajoutez vos favoris à votre sélection.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-xl font-semibold">Votre Sélection</h2>
        <Button variant="ghost" size="sm" onClick={clearBasket} className="text-muted-foreground">
          Vider
        </Button>
      </div>

      <div className="flex-1 overflow-auto space-y-3 pr-1">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 p-3 bg-muted/50 rounded-lg">
            <div className="w-14 h-14 rounded-md bg-secondary overflow-hidden flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-sm leading-tight line-clamp-2">{item.name}</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-6 w-6 flex-shrink-0 text-muted-foreground hover:text-destructive"
                  onClick={() => removeItem(item.id)}
                >
                  <X className="w-3.5 h-3.5" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{item.unit}</p>
              <div className="flex items-center justify-between mt-auto pt-2">
                <div className="flex items-center gap-1.5">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-6 w-6 text-xs"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-6 w-6 text-xs"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <p className="text-sm font-semibold text-primary">{formatPrice(item.price * item.quantity)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-4 mt-4 space-y-4">
        {/* Price Summary */}
        <div className="flex items-center justify-between px-1">
          <span className="text-muted-foreground">
            {totalItems} article{totalItems > 1 ? 's' : ''}
          </span>
          <span className="text-lg font-bold text-foreground">
            {formatPrice(totalPrice)}
          </span>
        </div>

        {/* Phone Order Notice */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Phone className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Commander par téléphone</span>
          </div>
          <a 
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="text-lg font-bold text-primary hover:text-primary/80 transition-colors"
          >
            {PHONE_NUMBER}
          </a>
          <p className="text-xs text-muted-foreground mt-2">
            Aucun achat en ligne n&apos;est possible sur ce site.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Appeler pour commander
          </a>
          <a
            href="https://laverrieregourmande.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full border border-border py-2.5 px-4 rounded-lg font-medium hover:bg-muted transition-colors text-foreground text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Visiter notre site principal
          </a>
        </div>
      </div>
    </div>
  )
}
