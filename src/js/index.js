import { DOMSelectors } from "./DOM";

const key = "9a9c6529-4e77-4e79-a127-93acf5313c71";

const query = async function() {
    try {
    const response = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=${key}&technique=any&period=any&sortorder=descending&q=totalpageviews:10&title=&person&page=1`
    );
        const data = await response.json();
        data.records.forEach((art) => {
          DOMSelectors.grid.insertAdjacentHTML("beforeend", `<section class="home-page">
          <div class="section-content">
            <img class="piece" src="${art.primaryimageurl}" alt="">
            <div class="info">
              <h1 class="piece-name">${art.title}</h1>
              <h1 class="description">${art.provenance}</h1>
              <h1 class="artist">${art.people}</h1>
              <h1 class="time-period">${art.period}</h1>
            </div>
          </div>
        </section>`);

        });
      }
       catch (error) {
        console.log(error);
        alert("there was an error");
      } 
    };

query();
