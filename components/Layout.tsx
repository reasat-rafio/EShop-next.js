import React from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
   children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
   return (
      <div className="container">
         <Navbar />
         {children}
      </div>
   );
};
