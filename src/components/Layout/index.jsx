import { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import SideBarNavigation from "../sidebar";

const Layout = ({ children }) => {

  const [isOpenNavbar,setIsOpenNavbar] = useState(false)
  return (
    <>
      <Header isOpenNavbar={isOpenNavbar} setIsOpenNavbar={setIsOpenNavbar} />
      <main>{children}</main>
      <Footer />

      <SideBarNavigation isOpenNavbar={isOpenNavbar} setIsOpenNavbar={setIsOpenNavbar}/>
    </>
  );
};

export default Layout;
