import React from "react";
import ProductDetail from "./productdetail/ProductDetail";
import Header from "./header/Header";

//this is our main Application
class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <ProductDetail />
      </div>
    );
  }
}

export default App;
