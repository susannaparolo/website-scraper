const url = "https://www.clarks.co.uk/search-ajax?query=kids%20shoes";

interface ShoesData {
  name: string;
  category: string;
  price: number;
}

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((post) => {
    const searchResult: ShoesData[] = [];
    for (const product of post.products) {
      const { name, merchandisingCategory, price } = product;
      searchResult.push({
        name,
        category: merchandisingCategory,
        price: price.value,
      });
    }
    console.log(searchResult);
  });

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((post) => {
//     console.log(post.products[0].name);
//     console.log(post.products[0].merchandisingCategory);
//     console.log(post.products[0].price.value);
//     console.log(post.products);
//   });
