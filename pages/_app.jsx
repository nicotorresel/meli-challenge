import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import Link from "next/link";
import '../styles/_app.scss';
import '../styles/product-card.scss';
import '../styles/product-detail.scss';

const App = ({ Component, pageProps }) => {

  const router = useRouter();

  function handleSubmit(event){
    event.preventDefault();

    router.push(`/?q=${event.target["query"].value}`);
  }

  return (
    
    <React.Fragment>
      <Head>
        <title>Meli Challenge</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="nav">
        <div className="container">
          <div className="searchBar">
            <Link href="/">
              <a>
                <img src="./Logo_ML.png" />
              </a>
            </Link>
            <form onSubmit={handleSubmit} className="searchBar__input">
              <input name="query" placeholder="Nunca dejes de buscar" />
              <button>
                <img src="./ic_Search.png" alt="busqueda"/>
              </button>
            </form>
          </div>   
        </div>
      </div>
      <Component {...pageProps} />
    </React.Fragment>
    
  )
}

export default App
