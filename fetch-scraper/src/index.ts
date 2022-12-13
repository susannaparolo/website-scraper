const url = "https://www.clarks.co.uk/search-ajax?query=kids%20shoes";

interface Product {
  name: string;
  averageRating: number;
}

interface ClarksResponse {
  products: Product[];
}

export const getShoesData = async (): Promise<ClarksResponse> => {
  const response = await fetch(url);
  const foo = response.text();
  const result: ClarksResponse = JSON.parse(await foo);
  const output = result.products.map(function (value, index) {
    console.log(`product ${value.name}, rating ${value.averageRating}`);
  });
  console.log(output.at[0]);
  return result;
};

getShoesData();
