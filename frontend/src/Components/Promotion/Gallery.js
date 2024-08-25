import React from 'react';

// Example image and video URLs (replace these with your actual URLs)
const image1 = 'path/to/your/image1.jpg';
const image2 = 'path/to/your/image2.jpg';
const image3 = 'path/to/your/image3.jpg';
const videoSrc = 'path/to/your/video.mp4';

const Gallery = () => {
    return (
        <section className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-images">
                <div className="image-placeholder">
                    <img src={image1} alt="Image 1" />
                </div>
                <div className="image-placeholder">
                    <img src={image2} alt="Image 2" />
                </div>
                <div className="image-placeholder">
                    <img src={image3} alt="Image 3" />
                </div>
            </div>
            <div className="video-placeholder">
                <video controls>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}

export default Gallery;

