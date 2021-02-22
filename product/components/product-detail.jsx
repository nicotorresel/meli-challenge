import React from "react";

// tenia el componente escrito con clases y lo pase a componentes funcionales
const ProductDetail = ({ product }) => {

  const { image, alt, title, price, description, currency, condition, sold_quantity } = product;
  const moneda = {
    style: "currency",
    currency: currency
  }

  const condicion = () => {
    return condition==="new"? "nuevo" : "usado";
  }

  return (
    <React.Fragment>
      <div className="main">
        <img src={image} alt={alt}/>
        <div className="description">
          <p>{condicion()} - {sold_quantity} vendidos</p>
          <h1>{title}</h1>
          <h2>{price.toLocaleString('es-AR', moneda)}</h2>
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

export default ProductDetail;