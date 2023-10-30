import React, { Component } from "react";
import "./ImageGallery.css";

class ImageGallery extends Component {
    constructor() {
      super();
      this.state = {
        activeImage: null,
      };
    }
  
    setActiveImage = (image) => {
      this.setState({ activeImage: image });
    };
  
    render() {
      return (
        <div className="gallery">
          <div className="gallery-container">
            {this.props.images.map((image, index) => (
              <div
                key={index}
                className={`image-container ${image === this.state.activeImage ? "active" : ""}`}
                onClick={() => this.setActiveImage(image)}
              >
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
  
  export default ImageGallery;
  