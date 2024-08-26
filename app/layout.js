// app/layout.js
import { Mitr } from "next/font/google";

const mitr = Mitr({
  weight: ['300', '400'],
  subsets: ['latin'],
  display: 'swap',
})

import "./globals.css";
import Link from 'next/link';
import { ProductProvider } from '../context/ProductContext';
// import { ProductsProvider } from '../context/ProductsContext';
import { UserProvider } from '../context/userContext';
import { CartProvider } from '../context/CartContext';
import { AddressProvider } from '../context/AddressContext';
// import ShoppingCart from "./components/(icon)/ShoppingCart";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mitr.className}>
      <UserProvider>
      <ProductProvider>
      <CartProvider>
      {/* <ProductsProvider> */}
      {/* <Link href="/cart"> */}
            {/* <ShoppingCart />  */}
            {/* Assuming ShoppingCart is a component */}
          {/* </Link> */}
          <AddressProvider>
            
<div className="flex items-center"> 
  <img 
    src="https://warathepj.github.io/js-ai-gallery/public/image/buybuybuy.jpg" 
    alt="logo"
    className="w-16"
  />
  <h1 className="text-2xl font-bold ml-2 text-yellow-600">BuyBuyBuy</h1>
</div>

          {children}
        </AddressProvider>
        </CartProvider>
      {/* </ProductsProvider> */}
        </ProductProvider>
        </UserProvider>
      </body>
    </html>
  );
}
