import React from "react";

class ProductCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card__detail">
            <div className="card__detail-image"></div>
            <img src={this.props.image} alt={this.props.alt}/>
            <div className="card__detail-description">
              <p className="card__detail-description__price">{this.props.price}</p>
              <p className="card__detail-description__desc>"> {this.props.detail}</p>
            </div>

          </div>
          <p className="location" >{this.props.location}</p>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default ProductCard;