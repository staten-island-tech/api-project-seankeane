import { DOMSelectors } from "./DOM";
import { i } from "./buttons";

const key = "9a9c6529-4e77-4e79-a127-93acf5313c71";

const query = async function() {
    try {
    const response = await fetch(

        `https://api.harvardartmuseums.org/object?apikey=${key}&technique=any&period=any&sortorder=descending&q=totalpageviews:9&title=&person&page=${i}&verificationlevel=4`
    );
        const data = await response.json();
        data.records.forEach((art) => {
          DOMSelectors.grid.insertAdjacentHTML("beforeend", `<section class="home-page">
          <div class="section-content">
            <img class="piece" src="${art.primaryimageurl}" alt="">
            <div class="info">
              <h1 class="piece-name">Piece : ${art.title}</h1>
              <h1 class="technique">Technique Used : ${art.technique}</h1>
              <h1 class="artist">Artist : ${art.displayname}</h1>
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

      /* let i = 1

    document.getElementById("prev-btn").addEventListener("click", function(){
    const newNum = i--;
    console.log(newNum)
    i.replaceChild = newNum
    return newNum;
    }); 

   document.getElementById("next-btn").addEventListener("click", function(){
    const newNum = i++;
    console.log(newNum)
    i.valueOf = newNum
    return newNum;
    }); */

query();

//console.log(n)

//export { key };