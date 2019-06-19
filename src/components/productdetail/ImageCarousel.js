import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  onChange = value => {
    this.setState({ value });
  };

  render() {
    let { images } = this.props;
    return (
      <div>
        <Carousel
          infinite
          onChange={this.onChange}
          value={this.state.value}
          arrowLeft={
            <div className="left-arrow-container">
              <i className="fas fa-angle-left left-arrow-icon" />
            </div>
          }
          arrowRight={
            <div className="right-arrow-container">
              <i className="fas fa-angle-right right-arrow-icon" />
            </div>
          }
          addArrowClickHandler
        >
          {images.map(image => {
            return (
              <img src={image} key={`${image}__key`} alt="carousel__image" className="coursel__image" style={{}} />
            );
          })}
        </Carousel>
        <Dots
          value={this.state.value}
          onChange={this.onChange}
          thumbnails={images.map((image, index) => {
            return <div style={{ height: 60, width: 60, background: `url(${image})` }} className="thumbnail_images" />;
          })}
        />
      </div>
    );
  }
}
