import "~/styles/globals.css";
import Header from "./components/header";

export default function RootLayout({
  children,
  cartItemsCount,
}: {
  children: React.ReactNode;
  cartItemsCount: number;
}) {

  
  return (
    <html lang="en">
      <body>
        <Header cartItemsCount={cartItemsCount} />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
