import React from "react";
import * as actions from "../../actions";
import { connect } from 'react-redux';
import ProductDetailScreen from "./ProductDetailScreen";

//Main Product Detail Component
class ProductDetail extends React.Component {
  
  //This lifecycle method is used to fetch the data with API
  componentDidMount() {
    this.props.productDetailFetch();
  }

  //Function used for updating store by the child component(ColorSelector and StorageSelector)
  attributeSelector = (key, id) => {
    this.props.setSelectedAttribute(key,id)
  };

  render() {
    return (
      <ProductDetailScreen
        product_details={this.props.product_details}
        selectedAttributes={this.props.attributeSelection}
        availableAttributes={this.props.options}
        attributeSelector={this.attributeSelector}
      />
    );
  }
}

//mapping of application state with component props
function mapStateToProps(state) {
  let productDetail=state.productDetail ? state.productDetail : {};
  return {
      ...productDetail
  }
}

// HOC connect is used to provide bridge between store and the component.
export default connect(mapStateToProps, actions)(ProductDetail);