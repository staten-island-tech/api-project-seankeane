import { DOMSelectors } from "./DOM";

const key = "9a9c6529-4e77-4e79-a127-93acf5313c71";

const query = async function() {
    try {
    const response = await fetch(

        `https://api.harvardartmuseums.org/object?apikey=${key}&technique=any&period=any&sortorder=descending&q=totalpageviews:10&title=&person&page=${currentPage()}`
    );
        const data = await response.json();
        data.records.forEach((art) => {
          DOMSelectors.grid.insertAdjacentHTML("beforeend", `<section class="home-page">
          <div class="section-content">
            <img class="piece" src="${art.primaryimageurl}" alt="">
            <div class="info">
              <h1 class="piece-name">${art.title}</h1>
              <h1 class="technique">${art.technique}</h1>
              <h1 class="artist">${art.displayname}</h1>
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

    const currentPage = function(){
    
      let pageNum = 1

      function n (){
   document.getElementById("prev-btn").addEventListener("click", function(){
        let newValue = pageNum--
        return newValue
    });
   document.getElementById("next-btn").addEventListener("click", function(){
        console.log(newValue)
        let newValue = pageNum++
        return newValue;
    });
  };

  //console.log(newValue)

  }

//currentPage();

query();