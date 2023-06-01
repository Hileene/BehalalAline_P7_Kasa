import React from 'react';
import "./banner.css"

function Banner({image, text, className}) {
    return(
        <div className={`banner ${className}`}>
            <img src={image} alt="bannière Kasa" className={`banner-img ${className}`} />
            <span className="banner-text">{text}</span>

        </div>
    )
}

export default Banner