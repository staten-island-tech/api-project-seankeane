 import { DOMSelectors } from "./DOM";
 import {query} from "./index"

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
             //console.log(i)
            // Change innerhtml
            return DOMSelectors.pageNum.innerHTML = `${i}`, DOMSelectors.grid;
        }
 
console.log(setNo(i)) // not working
       

export { next , prev, i}