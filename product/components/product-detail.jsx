import React from "react";

class ProductDetail extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <img src={this.props.image} alt={this.props.alt}/>
          <div className="description">
            <h1>{this.props.title}</h1>
            <h2>{this.props.price}</h2>
            <button>Comprar</button>
          </div>
        </div>
        <div className="description__more">
          <h3>Descripción del producto</h3>
          <p>{this.props.description}</p>
        </div>
      </React.Fragment>
    );
  }

}

export default ProductDetail;