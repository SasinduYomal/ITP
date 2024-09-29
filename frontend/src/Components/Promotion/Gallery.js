import React from 'react';
import off from "../../assets/images/off.jpg";
import promo from "../../assets/images/promo.jpg";
import sale from "../../assets/images/sale.jpg";



const Gallery = () => {
    return (
        <section className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-images">
                <div className="image-placeholder">
                    <img src={off} alt="Image 1" />
                </div>
                <div className="image-placeholder">
                    <img src={promo} alt="Image 2" />
                </div>
                <div className="image-placeholder">
                    <img src={sale} alt="Image 3" />
                </div>
            </div>
        </section>
    );
}

export default Gallery;

