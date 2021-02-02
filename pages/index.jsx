import React from "react";
import { GetServerSideProps } from "next";
import api from "../product/api";


const IndexPage = ({results}) => {
  console.log({results});
  return (
    <React.Fragment> 
      {results.map((product) => {
        return (
          <div>
            <img src={product.image} alt={product.title}/>

          </div>
        );
      })}
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