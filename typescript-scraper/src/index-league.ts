import axios from "axios";
import cheerio from "cheerio";

const url =
  "https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1";
const AxiosInstance = axios.create();

interface PlayerData {
  rank: number;
  name: string;
  nationality: string;
  goals: number;
}

AxiosInstance.get(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const statsTable: cheerio.Cheerio = $(".statsTableContainer > tr");
    const topScorers: PlayerData[] = [];

    statsTable.each((i, elem) => {
      const rank: number = parseInt($(elem).find(".rank > strong").text());
      const name: string = $(elem).find(".playerName > strong").text();
      const nationality: string = $(elem).find(".playerCountry").text();
      const goals: number = parseInt($(elem).find(".mainStat").text());
      topScorers.push({
        rank,
        name,
        nationality,
        goals,
      });
    });

    console.log(topScorers);
  })
  .catch(console.error); // Error handling
