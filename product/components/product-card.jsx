import React from "react";

class ProductCard extends React.Component {
  render() {

    const { product } = this.props
    const { image, alt, price, title, location } = product;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card__detail">
            <div className="card__detail-image"></div>
            <img src={image} alt={alt}/>
            <div className="card__detail-description">
              <p className="price">{price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</p>
              <p className="desc>"> {title}</p>
            </div>

          </div>
          <p className="location" >{location}</p>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default ProductCard;