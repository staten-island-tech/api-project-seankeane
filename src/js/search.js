import { DOMSelectors } from "./DOM";

const listen = function(){
    DOMSelectors.searchForm.addEventListener("submit", function(e){
        e.preventDefault();
        const searchParams = DOMSelectors.searchArea.value;
        const searchQuery = async function() {
            try {
            const response = await fetch(
                `https://api.harvardartmuseums.org/object?apikey=${key}&technique=any&period=any&sortorder=descending&q=totalpageviews:10&title=&person&page=1`

                // still need to add a way to search by name

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
        searchQuery();
    });
}

listen();