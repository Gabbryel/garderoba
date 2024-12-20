import React from "react";
import "@/assets/styles/global.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = ({children}) => {
  return ( 
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
   );
}
 
export default MainLayout;