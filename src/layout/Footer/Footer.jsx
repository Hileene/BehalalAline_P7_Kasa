import React from "react";
import "./footer.css";
import LogoFooter from "../../assets/logo-footer.png";

function Footer() {
    return(
        <footer>
            <div className="kasa-footer">
                <img src={LogoFooter} alt="Logo Kasa" className="logo-footer" />
                <p className="copyrights-text">&copy; 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;