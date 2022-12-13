import axios from "axios";
import cheerio from "cheerio";

const url = "https://www.clarks.co.uk/search/?text=kids%20shoes";
const AxiosInstance = axios.create();

interface ShoesData {
  name: string;
  category: string;
  price: number;
}

AxiosInstance.get(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html);

  const result = $("product-thumbnail__product-price-info").get();
  console.log(result);

  const resultDiv: cheerio.Cheerio = $("div").find(
    "product-thumbnail__product-price-info"
  );
  console.log(resultDiv.length);
  const searchResult: ShoesData[] = [];

  resultDiv.each((i, elem) => {
    const name: string = $(elem)
      .find("h3.product-thumbnail__product-name.content-shimmer")
      .text();
    const category: string = $(elem)
      .find("div.product-thumbnail__product-title.content-shimmer")
      .text();
    const price: number = parseInt(
      $(elem)
        .find('div.product-thumbnail__product-price span[itemprop="price"]')
        .text()
    );
    searchResult.push({
      name,
      category,
      price,
    });
  });

  console.log(searchResult);
});
