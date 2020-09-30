import React, { Component } from "react";
import Slider from "react-slick";
import "./index.css";

class GallerySection extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
  }
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: this.state.currentIndex - 1,
    };

    return (
      <div>
        <div className="th-gallery">
          {this.props.data.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt="..."
              onClick={() => this.setState({ currentIndex: index + 1 })}
            />
          ))}
        </div>

        {this.state.currentIndex ? (
          <div
            className="th-gallery-backdrop position-fixed"
            onClick={() => this.setState({ currentIndex: null })}
          >
            <div className="th-slider-container w-100">
              <Slider {...settings}>
                {this.props.data.map((item, index) => (
                  <div>
                    <div
                      key={index}
                      className="th-slider-image"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default GallerySection;
