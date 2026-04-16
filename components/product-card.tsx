"use client"

import { useState } from "react"
import { ShoppingBasket, MapPin, Check } from "lucide-react"
import { useBasket, type Product } from "@/lib/basket-context"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: Product
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, items } = useBasket()
  const [justAdded, setJustAdded] = useState(false)
  
  const itemInBasket = items.find(item => item.id === product.id)
  const quantityInBasket = itemInBasket?.quantity || 0

  const handleAddToBasket = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem(product)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1500)
  }

  return (
    <Dialog>
      <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-lg">
        <DialogTrigger asChild>
          <button className="w-full text-left cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden bg-muted relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {quantityInBasket > 0 && (
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <ShoppingBasket className="w-3.5 h-3.5" />
                  <span className="text-xs font-semibold">{quantityInBasket}</span>
                </div>
              )}
            </div>
            <div className="p-4">
              <Badge variant="secondary" className="text-xs mb-2">
                {product.category}
              </Badge>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>{product.origin}</span>
              </div>
            </div>
          </button>
        </DialogTrigger>

        <div className="px-4 pb-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-primary">{formatPrice(product.price)}</span>
              <span className="text-xs text-muted-foreground">{product.unit}</span>
            </div>
            <Button
              onClick={handleAddToBasket}
              size="sm"
              variant={justAdded ? "secondary" : "default"}
              className="min-w-[120px] transition-all"
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4 mr-1" />
                  Ajouté
                </>
              ) : (
                <>
                  <ShoppingBasket className="w-4 h-4 mr-1" />
                  Ajouter
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <DialogContent className="sm:max-w-2xl">
        <ProductDetail product={product} />
      </DialogContent>
    </Dialog>
  )
}

function ProductDetail({ product }: { product: Product }) {
  const { addItem, items, updateQuantity } = useBasket()
  const [justAdded, setJustAdded] = useState(false)
  
  const itemInBasket = items.find(item => item.id === product.id)
  const quantityInBasket = itemInBasket?.quantity || 0

  const handleAddToBasket = () => {
    addItem(product)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1500)
  }

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <div className="aspect-square rounded-lg overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <Badge variant="secondary" className="w-fit text-xs mb-2">
          {product.category}
        </Badge>
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
          {product.name}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {product.description}
        </p>
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium">Origine:</span>
            <span className="text-muted-foreground">{product.origin}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Conditionnement:</span>
            <span className="text-muted-foreground">{product.unit}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Prix:</span>
            <span className="text-primary font-semibold">{formatPrice(product.price)}</span>
          </div>
        </div>

        <div className="mt-auto space-y-3">
          {quantityInBasket > 0 ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                <span className="text-sm font-medium text-foreground">
                  Dans votre panier
                </span>
                <div className="flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => updateQuantity(product.id, quantityInBasket - 1)}
                  >
                    -
                  </Button>
                  <span className="font-semibold w-6 text-center">{quantityInBasket}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => updateQuantity(product.id, quantityInBasket + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              <Button 
                onClick={handleAddToBasket} 
                className="w-full" 
                size="lg"
                variant="secondary"
              >
                <ShoppingBasket className="w-4 h-4 mr-2" />
                Ajouter un de plus
              </Button>
            </div>
          ) : (
            <Button 
              onClick={handleAddToBasket} 
              className="w-full" 
              size="lg"
              variant={justAdded ? "secondary" : "default"}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Ajouté au panier
                </>
              ) : (
                <>
                  <ShoppingBasket className="w-4 h-4 mr-2" />
                  Ajouter au panier
                </>
              )}
            </Button>
          )}
          <p className="text-xs text-center text-muted-foreground">
            Vitrine uniquement - Commande par téléphone après sélection
          </p>
        </div>
      </div>
    </div>
  )
}
