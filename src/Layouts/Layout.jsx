import React from "react";
import "./layout.css";
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";

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
