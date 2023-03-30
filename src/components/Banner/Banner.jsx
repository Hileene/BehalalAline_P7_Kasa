import React from 'react';
import "./banner.css"

function Banner({image, text}) {
    return(
        <div className="banner">
            <img src={image} alt="bannière Kasa" className="banner-img" />
            <span className="banner-text">{text}</span>

        </div>
    )
}

export default Banner