import React from "react";
import { Navbar } from "./Navbar";
import Notify from "./Notify";

interface LayoutProps {
   children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
   return (
      <div className="container">
         <Navbar />
         <Notify />
         {children}
      </div>
   );
};
