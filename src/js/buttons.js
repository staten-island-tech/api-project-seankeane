import { DOMSelectors } from "./DOM";
//import { query } from "./index";

              
        let i = 1;
  
         function prev() {
  
            // Start position 
            if (i === 1) {
  
                // Add disabled attribute on
                DOMSelectors.prevBtn.disabled = true;
  
                DOMSelectors.nextBtn.disabled = false;
            } else {
                i--;
                return setNo();
            }
        }
  
        function next() {
  
            // The api returns 53 pages total
            if (i === 53) {
  
                // Add disabled attribute on next button
                document.getElementsByClassName(
                        'next').disabled = true;
  
                // Remove disabled attribute from prev button
                document.getElementsByClassName(
                        'prev').disabled = false;
            } else {
                i++;
                return setNo();
            }
        }
  
        function setNo() {
  
            // Change innerhtml
            return DOMSelectors.pageNum.innerHTML = `${i}` //, query.response = `https://api.harvardartmuseums.org/object?apikey=${key}&technique=any&period=any&sortorder=descending&q=totalpageviews:9&title=&person&page=${i}&verificationlevel=4`;
        }

export { next , prev, i}
