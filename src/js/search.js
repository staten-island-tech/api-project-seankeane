import { DOMSelectors } from "./DOM";

const key = "9a9c6529-4e77-4e79-a127-93acf5313c71"; // apparently can't import this value from index.js

const listen = function(){
    DOMSelectors.searchForm.addEventListener("submit", function(e) {
        e.preventDefault();
        DOMSelectors.grid.innerHTML = "";
        const searchParams = DOMSelectors.searchArea.value;
        console.log(searchParams);
        const searchQuery = async function() {
            try {
            const response = await fetch(

              `https://api.harvardartmuseums.org/object?apikey=${key}&technique=any&period=any&sortorder=descending&q=totalpageviews:9&title=&classification=${searchParams}`

                
            );
              const data = await response.json();
              data.records.forEach((art) => {
                DOMSelectors.grid.insertAdjacentHTML("beforeend", `<section class="home-page">
          <div class="section-content">
            <img class="piece" src="${art.primaryimageurl}" alt="">
            <div class="info">
              <h1 class="piece-name">Piece : ${art.title}</h1>
              <h1 class="technique">Technique Used : ${art.technique}</h1>
              <h1 class="time-period">Time Period : ${art.period}</h1>
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
        searchQuery();
    });
}

listen();

/* Some base search terms for going by category:
. "Coins"
. "Tools and Equipment"
. "Seals"
. "Photographs" ** This returns a lot of blank images
. "Jewelry"
. "Vessels"
. "Textile Arts"
. "Lighting Devices"
*/