import React, { Component } from "react";
import "./index.css";

class GallerySection extends Component {
  render() {
    return (
      <div className="th-gallery">
        {this.props.data.map((item, index) => (
          <img key={index} src={item.image} alt="..." />
        ))}
      </div>
    );
  }
}
export default GallerySection;
