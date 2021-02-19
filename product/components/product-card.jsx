import React from "react";

// en principio realicé el componente con clases luego lo transforme a uno funcional

// class ProductCard extends React.Component {
//   render() {

//     const { product } = this.props;
//     const { image, alt, price, title, location } = product;

//     return (
//       <React.Fragment>
//         <div className="card">
//           <div className="card__detail">
//             <div className="card__detail-image"></div>
//             <img src={image} alt={alt}/>
//             <div className="card__detail-description">
//               <p className="price">{price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</p>
//               <p className="desc>"> {title}</p>
//             </div>

//           </div>
//           <p className="location" >{location}</p>
//         </div>
//         <hr />
//       </React.Fragment>
//     );
//   }
// }


//paso el componente a uno funcional:

const ProductCard = ( {product} ) => {

  const { image, alt, price, currency, title, location, condition, shipping } = product;

  const moneda = {
    style: "currency",
    currency: currency
  }

  return (
    <React.Fragment>
      <div className="card">
        <div className="card__detail">
          <div className="card__detail-image"></div>
          <img src={image} alt={alt}/>
          <div className="card__detail-description">
            <div className="shipping">
              <p className="price">{price.toLocaleString('es-AR', moneda)} </p>
              {shipping ? <img src="../../ic_shipping.png" alt="shipping" /> : null}
            </div>
            <p className="desc>"> {title}</p>
          </div>
        </div>
        <p className="location" >{location}</p>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default ProductCard;