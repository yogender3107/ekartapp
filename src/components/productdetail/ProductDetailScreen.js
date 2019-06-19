import React, { Component } from "react";
import ImageCarousel from "./ImageCarousel";
import ProductDescription from "./ProductDescription";
import { Col, Row, Container } from "reactstrap";

//this component is just to pass on the data to next child and display image
export default class ProductDetailScreen extends Component {
  render() {
    let { product_details } = this.props;
    if (!product_details) {
      return null;
    }
    return (
      <Container>
        <Row className="pt20">
          <Col md={6}>
            <ImageCarousel images={product_details.images} />
          </Col>
          <Col md={6}>
            <ProductDescription {...this.props} />
          </Col>
        </Row>
      </Container>
    );
  }
}
