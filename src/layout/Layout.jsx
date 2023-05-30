import React from "react";
import "./layout.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


// La prop "children"représente les éléments enfants du composant Layout, 
//c'est-à-dire les éléments qui seront inclus à l'intérieur du composant lorsqu'il est utilisé.
function Layout({children}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
