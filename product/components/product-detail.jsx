import React from "react";

class ProductDetail extends React.Component {
  render() {

    const {image, alt, title, price, description} = this.props;

    return (
      <React.Fragment>
        <div className="main">
          <img src={image} alt={alt}/>
          <div className="description">
            <h1>{title}</h1>
            <h2>{price}</h2>
            <button>Comprar</button>
          </div>
        </div>
        <div className="description__more">
          <h3>Descripción del producto</h3>
          <p>{description}</p>
        </div>
      </React.Fragment>
    );
  }

}

export default ProductDetail;