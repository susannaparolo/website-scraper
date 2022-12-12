const url = 'https://www.clarks.co.uk/search-ajax?query=kids%20shoes'

interface ShoesData {
  name: string;
  category: string;
  price: number;
}

interface Product {
  name: string;
  averageRating: number;
}


interface ClarksResponse {
  products: Product[]
}


export const getShoesData = async (): Promise<ClarksResponse> => {
  const response = await fetch(url)
  const foo = response.text()
  const result: ClarksResponse = JSON.parse(await foo)
  const output = result.products.map(function(value, index) {
    console.log(`product ${value.name}, rating ${value.averageRating}`)
  })
  console.log(output.at[0])
  return result
}

getShoesData()

// fetch(url)
//   .then(
//     response => {
//       return response.json();
//     })
//   .then(post => {
//     const searchResult: ShoesData[] = [];
//     for (const product of post.products) {
//       const name: string = post?.products[product]?.name;
//       const category: string = post?.products[product]?.merchandisingCategory;
//       const price: number = post?.products[product]?.price.value;
//       searchResult.push({
//         name,
//         category,
//         price
//       })
//     }
//     console.log(searchResult);
//   });

    // console.log(post.products[0].name);
    // console.log(post.products[0].merchandisingCategory)
    // console.log(post.products[0].price.value)

