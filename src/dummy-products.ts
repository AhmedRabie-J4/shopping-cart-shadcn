import mochaOvercoat from "./assets/mocha-overcoat-62c666a8.jpg";
import rainJacket from "./assets/rain-jacket-91f81b08.jpg";
import merlotSuit from "./assets/merlot-suit-0dc521a8.jpg";
import denimPioneer from "./assets/denim-pioneer-6adab778.jpg";

// Define the type for a product
export interface Product {
  id: string;
  image: string; // or a more specific type if using imported images (e.g., StaticImageData with Next.js)
  title: string;
  price: number;
  description: string;
}

export const DUMMY_PRODUCTS: Product[] = [
  {
    id: "p1",
    image: mochaOvercoat,
    title: "Majestic Vintage Mocha Overcoat",
    price: 129.99,
    description:
      "Channel timeless sophistication with this stunning mocha overcoat. Crafted for the discerning gentleman who appreciates the fine blend of vintage charm and modern elegance.",
  },
  {
    id: "p2",
    image: denimPioneer,
    title: "Pioneer Rugged Denim Jacket",
    price: 169.99,
    description:
      "Our Pioneer Rugged Denim Jacket is a tribute to those who embody the spirit of adventure. Designed with durability and comfort in mind, this jacket is a wardrobe essential for the urban explorer.",
  },
  {
    id: "p3",
    image: rainJacket,
    title: "Vintage Sunshine Rain Jacket",
    price: 49.99,
    description:
      "Brace the showers in style! Our Vintage Sunshine Rain Jacket ensures that you stand out, even in the dullest weather. Because rain is never a reason to compromise on your fashion quotient.",
  },
  {
    id: "p4",
    image: merlotSuit,
    title: "Classic Merlot Business Suit",
    price: 249.99,
    description:
      "Step into the boardroom with unmatched confidence in our Classic Merlot Business Suit. Exuding an air of refined class and understated power, it is ideal for the modern executive who values tradition and elegance.",
  },
  {
    id: "p5",
    image: mochaOvercoat,
    title: "Majestic Vintage Mocha Overcoat",
    price: 149.99,
    description:
      "Channel timeless sophistication with this stunning mocha overcoat. Crafted for the discerning gentleman who appreciates the fine blend of vintage charm and modern elegance.",
  },
  {
    id: "p6",
    image: denimPioneer,
    title: "Pioneer Rugged Denim Jacket",
    price: 79.99,
    description:
      "Our Pioneer Rugged Denim Jacket is a tribute to those who embody the spirit of adventure. Designed with durability and comfort in mind, this jacket is a wardrobe essential for the urban explorer.",
  },
];
