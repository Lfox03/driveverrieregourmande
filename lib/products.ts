import type { Product } from "./basket-context"

export const products: Product[] = [
  {
    id: "1",
    name: "Miel de Lavande",
    description: "Miel artisanal récolté dans les champs de lavande de Provence. Saveur douce et florale, parfait pour accompagner vos tisanes et desserts.",
    category: "Miels & Confitures",
    image: "/images/honey.jpg",
    origin: "Provence, France",
    unit: "pot de 500g",
    price: 14.90
  },
  {
    id: "2",
    name: "Huile d'Olive Vierge Extra",
    description: "Huile d'olive première pression à froid, issue de nos oliviers centenaires. Fruité vert avec des notes d'artichaut et d'amande fraîche.",
    category: "Huiles & Vinaigres",
    image: "/images/olive-oil.jpg",
    origin: "Vallée des Baux, France",
    unit: "bouteille 75cl",
    price: 18.50
  },
  {
    id: "3",
    name: "Fromage de Chèvre Frais",
    description: "Fromage frais au lait cru de chèvre, texture crémeuse et goût délicat. Élevage traditionnel en plein air.",
    category: "Fromages",
    image: "/images/goat-cheese.jpg",
    origin: "Loire Valley, France",
    unit: "pièce 200g",
    price: 8.90
  },
  {
    id: "4",
    name: "Confiture de Figues",
    description: "Confiture artisanale préparée avec des figues mûries au soleil. Texture généreuse, idéale pour vos tartines du matin.",
    category: "Miels & Confitures",
    image: "/images/fig-jam.jpg",
    origin: "Solliès, France",
    unit: "pot de 340g",
    price: 7.50
  },
  {
    id: "5",
    name: "Vinaigre Balsamique Tradition",
    description: "Vinaigre balsamique vieilli en fûts de chêne pendant 12 ans. Notes de fruits secs et de vanille.",
    category: "Huiles & Vinaigres",
    image: "/images/balsamic.jpg",
    origin: "Modène, Italie",
    unit: "bouteille 25cl",
    price: 24.90
  },
  {
    id: "6",
    name: "Pâtes Artisanales au Blé Dur",
    description: "Pâtes façonnées à la main avec du blé dur cultivé localement. Texture rugueuse qui retient parfaitement les sauces.",
    category: "Épicerie Fine",
    image: "/images/pasta.jpg",
    origin: "Gragnano, Italie",
    unit: "paquet 500g",
    price: 6.90
  },
  {
    id: "7",
    name: "Tomates Séchées Bio",
    description: "Tomates séchées au soleil et conservées dans l'huile d'olive. Goût intense et concentré, parfaites en antipasti.",
    category: "Conserves",
    image: "/images/dried-tomatoes.jpg",
    origin: "Sicile, Italie",
    unit: "bocal 280g",
    price: 9.50
  },
  {
    id: "8",
    name: "Noisettes Torréfiées du Piémont",
    description: "Noisettes IGP du Piémont, légèrement torréfiées pour révéler leurs arômes. Croquantes et savoureuses.",
    category: "Fruits Secs",
    image: "/images/hazelnuts.jpg",
    origin: "Piémont, Italie",
    unit: "sachet 250g",
    price: 12.90
  },
  {
    id: "9",
    name: "Saucisson Sec Artisanal",
    description: "Saucisson traditionnel pur porc, séché naturellement en cave. Assaisonnement aux épices douces.",
    category: "Charcuterie",
    image: "/images/saucisson.jpg",
    origin: "Auvergne, France",
    unit: "pièce 300g",
    price: 11.50
  },
  {
    id: "10",
    name: "Herbes de Provence",
    description: "Mélange aromatique de thym, romarin, sarriette, origan et lavande. Séchées naturellement au soleil.",
    category: "Épices & Aromates",
    image: "/images/herbs.jpg",
    origin: "Provence, France",
    unit: "sachet 100g",
    price: 5.90
  },
  {
    id: "11",
    name: "Terrine de Canard aux Figues",
    description: "Terrine artisanale au canard fermier, agrémentée de figues confites. Recette traditionnelle du Sud-Ouest.",
    category: "Terrines & Pâtés",
    image: "/images/terrine.jpg",
    origin: "Périgord, France",
    unit: "bocal 180g",
    price: 13.90
  },
  {
    id: "12",
    name: "Chocolat Noir Grand Cru 72%",
    description: "Tablette de chocolat noir d'exception, cacao grand cru d'Équateur. Notes fruitées et légèrement boisées.",
    category: "Confiserie",
    image: "/images/chocolate.jpg",
    origin: "Équateur",
    unit: "tablette 100g",
    price: 8.50
  },
  {
    id: "13",
    name: "truc",
    description: "Tablette de chocolat noir d'exception, cacao grand cru d'Équateur. Notes fruitées et légèrement boisées.",
    category: "Confiserie",
    image: "/images/miam.jpg",
    origin: "Équateur",&
    unit: "tablette 100g",
    price: 805.50
  }
]

export const categories = [...new Set(products.map(p => p.category))]
