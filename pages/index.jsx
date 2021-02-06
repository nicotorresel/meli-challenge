import React from "react";
import ProductCard from "../product/components/product-card"
import Link from "next/link"; 
import api from "../product/api";


const IndexPage = ({results}) => {
  return (
    <React.Fragment>       
      <div className="background">
        <div className="container">
          {results.map((product) => {
            return ( 
              <Link key={product.id} href={`/${product.id}`}>
                <a>
                  <ProductCard
                    key={product.id}
                    image={product.image} 
                    alt={product.title} 
                    price={product.price.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})} 
                    detail={product.title} 
                    location={product.location} 
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export const getServerSideProps = async ({query}) => {
  const results = await api.search(query.q);
  
  return {
    props: {
      results,
    },
  };
}; 

export default IndexPage;