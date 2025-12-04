/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";

// Import all of Bootstrap’s JS
import * as bootstrap from "bootstrap";
console.log(bootstrap);
// import 'some-node-module';
// import SomeModule from 'some-node-module';

import "bootstrap-icons/font/bootstrap-icons.css";

/**
 * Write any other JavaScript below
 */

const button = document.getElementById("load-more");
button.addEventListener("click", () => {
  document.querySelectorAll(".participant-card.extra").forEach((card) => {
    card.style.display = "flex";
  });
  button.style.display = "none";
});
