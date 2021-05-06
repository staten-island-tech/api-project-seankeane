import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "YOURKEYHERE";
const key = "AIzaSyDjy291ibm_9_SKA72uWli2rHSedK4Wq8c";

const query = async function() {
    try {
    const response = await fetch(
        'http://www.songsterr.com/a/wa/song?id={id}'
    );
        const data = await response.json();
        console.log(data);
      }
       catch (error) {
        console.log(error);
        alert("there was an error");
      }
    };
query();
