import "~/styles/globals.css";
import Header from "./components/header";
import { CartProvider} from "./context/cart-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <CartProvider>
      <html lang="en">
        <body>
          <Header />
          <div>
            {children}
          </div>
        </body>
      </html>
    </CartProvider>
  );
}
