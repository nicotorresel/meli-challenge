import React from "react";
import {AppProps} from "next/app";
import {useRouter} from "next/router";
import '../styles/_app.scss'
import '../styles/product-card.scss';

const App = ({ Component, pageProps }) => {

  const router = useRouter();

  function handleSubmit(event){
    event.preventDefault();

    router.push(`/?q=${event.target["query"].value}`);
  }

  return (
    <React.Fragment>
      <div className="nav">
        <div className="container">
          <div className="searchBar">
            <img src="./Logo_ML.png" />
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
