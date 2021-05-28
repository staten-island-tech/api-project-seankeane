 import { DOMSelectors } from "./DOM";
 //import {setNo} from "./index"

    const prevBtn = document.getElementById("prev-btn").addEventListener("click", prev);
    const nextBtn = document.getElementById("next-btn").addEventListener("click", next);

        let i = 1;
  
         function prev() {
  
            // Starting page 
            if (i === 1) {
  
                // Add disabled attribute on
                prevBtn.disabled = true;
  
                nextBtn.disabled = false;
            } else {
                i--;
                return setNo();
            }
        }
  
        function next() {
  
            // The api returns 53 pages total
            if (i === 53) {
  
                // Add disabled attribute on next button
                nextBtn.disabled = true;
  
                prevBtn.disabled = false;
            } else {
                i++;
                return setNo();
            }
        }
  
         function setNo() {

            // Change innerhtml
            return DOMSelectors.pageNum.innerHTML = `${i}`;
        }
 
       

export { next , prev, i}