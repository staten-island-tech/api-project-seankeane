import { prev , next } from "./buttons"

const DOMSelectors = {
    grid: document.querySelector(".art-grid"),
    searchForm: document.getElementById("search-form"),
    searchArea: document.getElementById("search-area"),
    prevBtn : document.getElementById("prev-btn").addEventListener("click", prev),
    nextBtn : document.getElementById("next-btn").addEventListener("click", next),
    pageNum : document.getElementById("page-number")
  };
  
  export { DOMSelectors };