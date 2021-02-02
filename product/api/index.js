
export default {
  search: (query) => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then(res => res.json())
      .then((response) => response.results.map((rawProduct)=> ({
        id: rawProduct.id,
        title: rawProduct.title,
        image: rawProduct.thumbnail,
        price: rawProduct.price,
        location: rawProduct.address.state_name
      })),
      );
  },
      
  
  fetch: (id) => {
    return Promise.resolve(null);
  }
}