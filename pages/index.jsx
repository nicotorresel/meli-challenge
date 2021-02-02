import React from "react";
import { GetServerSideProps } from "next";
import ProductCard from "../product/components/product-card"
import api from "../product/api";


const IndexPage = ({results}) => {
  console.log({results});
  return (
    <React.Fragment> 
      <div className="background">
        <div className="container">
          {results.map((product) => {
            return (
              <ProductCard image={product.image} alt={product.title} price={product.price} detail={product.title} location={product.location} />
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