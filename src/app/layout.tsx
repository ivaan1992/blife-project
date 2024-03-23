'use client';

import React, { useState } from "react";
import "~/styles/globals.css";
import Header from "./components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  }

  return (
    <html lang="en">
      <body>
        <Header cartCount={cartCount} />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
