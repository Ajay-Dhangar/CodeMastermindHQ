import React, {useState} from 'react';
import './ImageGallery.css';

const ImageGallery = ({images}) => {
  const [activeImage, setActiveImage] = useState(null);

  const setActiveImageHandler = (image) => {
    setActiveImage(image);
  };

  if (!images || images.length === 0) {
    return <p>No images to display</p>;
  }

  return (
    <div className="gallery">
      <div className="gallery-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-container ${
              image === activeImage ? 'active' : ''
            }`}
            onClick={() => setActiveImageHandler(image)}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
