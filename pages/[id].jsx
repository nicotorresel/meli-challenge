import React from "react";
import ProductDetail from "../product/components/product-detail";
import api from "../product/api";


const IndexPage = ({result}) => {

  return (
    <React.Fragment> 
      <div className="background">
        <div className="container detail">
          <ProductDetail
            product={result}
            // image={result.image}
            // alt={result.title}
            // title={result.title}
            // price={result.price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})} 
            // description={result.title}
          />        
        </div>
      </div>
    </React.Fragment>
  );
}

export const getServerSideProps = async ({query}) => {
  const result = await api.fetch(query.id);
  
  return {
    props: {
      result
    },
  };
}; 

export default IndexPage;