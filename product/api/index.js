
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
    return new Promise(resolve => {
      const request1 = fetch(`https://api.mercadolibre.com/items/${id}`);
      const request2 = fetch(`https://api.mercadolibre.com/items/${id}/description`);
      Promise.all([request1, request2])
      .then((responses) => {
        const prom1 = responses[0].json();
        const prom2 = responses[1].json();
        Promise.all([prom1, prom2])
        .then((response) => {
          resolve ({
            author: "Nicolas Torresel",
            id: response[0].id,
            title: response[0].title,
            image: response[0].pictures[0].url,
            price: response[0].price,
            currency: response[0].currency_id,
            condition: response[0].condition,
            sold_quantity: response[0].sold_quantity,
            description: response[1].plain_text || response[0].title,
          })
        })
      })
    });
  }
  
}