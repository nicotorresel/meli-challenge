import React from "react";
import { GetServerSideProps } from "next";
import ProductCard from "../product/components/product-card"
import Link from "next/link"; 
import api from "../product/api";


const IndexPage = ({result}) => {
  
  console.log({result});

  return (
    <React.Fragment> 
      <div className="background">
        <div className="container">

          HOlaaa
          
        </div>
      </div>
    </React.Fragment>
  );
}

export const getServerSideProps = async ({query}) => {
  const result = await api.fetch(query.id);
  
  return {
    props: {
      result,
    },
  };
}; 

export default IndexPage;