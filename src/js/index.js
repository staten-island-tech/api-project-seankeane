const key = "413585-Project-WV53SSDM";

const query = async function() {
    try {
    const response = await fetch(
        ``
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

// Still trying to figure out how to isolate the music section of the API

//using TasteDive