import React from "react";

class ProductCard extends React.Component {
  render() {

    const {image, alt, price, detail, location} = this.props;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card__detail">
            <div className="card__detail-image"></div>
            <img src={image} alt={alt}/>
            <div className="card__detail-description">
              <p className="price">{price}</p>
              <p className="desc>"> {detail}</p>
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