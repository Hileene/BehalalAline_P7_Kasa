import React from "react";
import "./footer.css";
import LogoFooter from "../../assets/logo-footer.png";

function Footer() {
    return(
        <footer>
            <div>
                <img src={LogoFooter} alt="Logo Kasa" />
                <p>&copy; 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;