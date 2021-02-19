
export default {
  search: (query) => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then(res => res.json())
      .then((response) => response.results.slice(0,4).map((rawProduct)=> ({
        author: "Nicolas Torresel",
        id: rawProduct.id,
        title: rawProduct.title,
        image: rawProduct.thumbnail,
        price: rawProduct.price,
        currency: rawProduct.currency_id,
        location: rawProduct.address.state_name,
        condition: rawProduct.condition,
        shipping: rawProduct.shipping.free_shipping
      })), 
      );
  },
      
  
  fetch: (id) => {
    return fetch(`https://api.mercadolibre.com/items/${id}`)
    .then(res => res.json())
    .then((rawProduct) => ({
      author: "Nicolas Torresel",
      id: rawProduct.id,
      title: rawProduct.title,
      image: rawProduct.pictures[0].url,
      price: rawProduct.price,
      currency: rawProduct.currency_id,
      condition: rawProduct.condition,
      sold_quantity: rawProduct.sold_quantity,
      // location: rawProduct.address.state_name
    }),
    )
  }
}