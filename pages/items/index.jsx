import React from "react";
import Link from "next/link"; 
import api from "../../product/api";
import ProductCard from "../../product/components/product-card";

const IndexPage = ({results}) => {

  return (
    <React.Fragment>
      <div className="background">
        { results.length ?   
          <div className="container">
            {results.map((product) => {
              return (
                <Link key={product.id} href={`/items/${product.id}`}>
                  <a>
                    <ProductCard
                      product={product}
                    />
                  </a>
                </Link>
              );
            })} 
          </div>
          : <p>No se encontraron resultados</p>
        }
      </div>
    </React.Fragment>
  );
}

export const getServerSideProps = async ({query}) => {
  const results = await api.search(query.search);

  return {
    props: {
      results,
    },
  };
}; 

export default IndexPage;