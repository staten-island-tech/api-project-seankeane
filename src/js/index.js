import { DOMSelectors } from "./DOM";

const key = "9a9c6529-4e77-4e79-a127-93acf5313c71";

const query = async function() {
    try {
    const response = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=${key}&technique=any&period=any&sort=random&q=totalpageviews:10&title=&person`
    );
        const data = await response.json();
        data.records.array.forEach((art) => {
          DOMSelectors.grid.insertAdjacentHTML("beforeend" ``);

        });
      }
       catch (error) {
        console.log(error);
        alert("there was an error");
      }
    };
query();

// Still trying to figure out how to isolate the music section of the API

//using TasteDive