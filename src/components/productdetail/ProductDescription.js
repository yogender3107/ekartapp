import React from "react";
import ColorSelector from "./selector/ColorSelector";
import StorageSelector from "./selector/StorageSelector";
import { Col, Row, Button } from "reactstrap";
import TextDescriptor from "./selector/TextDescriptor";

//this is the functional component and displays the description of Product
export default ({
  product_details,
  selectedAttributes,
  availableAttributes,
  attributeSelector
}) => {
  let { name, desc, sale_price, mark_price, sale_msg = "" } = product_details;
  return (
    <div className="product-description__container">
      <p className="product-description__title">{name}</p>
      <div className="product-description__title__border" />
      <TextDescriptor desc={desc} modalTitle={name} />
      <div className="dropdown-divider product-description__dividor " />
      <div className="p10">
        <span className="font-weight-bold">{`₹ ${Math.ceil(sale_price)}`}</span>
        <span className="pl-2 font-weight-bold text-secondary" style={{ fontSize: 10 }}>
          <del>{`₹ ${mark_price}`}</del>
        </span>
        <div>
          <span style={{ color: "#47b6ab", fontSize: 12 }}>{`You Save ₹ ${Math.ceil(mark_price - sale_price)} `}</span>
          <span style={{ color: "#47b6ab", fontSize: 12 }}>{`( ${sale_msg.slice(
            0,
            sale_msg.indexOf("%") + 1
          )} )`}</span>
        </div>
        <div>
          <span className="text-secondary" style={{ fontSize: 10 }}>
            Local taxes included (where applicable)
          </span>
        </div>
      </div>
      <div className="dropdown-divider  product-description__dividor" />
      <Row className="row">
        <Col xs={12} md={12}>
          <span className="text-secondary" style={{ fontSize: 12 }}>{`${
            availableAttributes["color"].length
          } color availabe`}</span>
          <ColorSelector
            attributeSelector={attributeSelector}
            Color={availableAttributes["color"]}
            selectedAttributes={selectedAttributes}
          />
        </Col>
        <Col xs={12} md={12} className=" p10">
          <span className="text-secondary" style={{ fontSize: 12 }}>{`${
            availableAttributes["storage"].length
          } storage availabe`}</span>
          <StorageSelector
            attributeSelector={attributeSelector}
            Storage={availableAttributes["storage"]}
            selectedAttributes={selectedAttributes}
          />
        </Col>
        <Col xs={12} md={12} className=" p10">
          <Row>
            <Col md={8}>
              <Button size="lg" block className="add_to_cart_button">
                Add to cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
