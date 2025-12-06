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

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("load-more");
  if (button) {
    button.addEventListener("click", () => {
      document.querySelectorAll(".participant-card.extra").forEach((card) => {
        card.style.display = "flex";
      });
      button.style.display = "none";
    });
  }

  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("formSuccess");
  if (form && successMessage) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      fetch("/", {
        method: "POST",
        body: formData,
      })
        .then(() => {
          form.style.display = "none";
          successMessage.style.display = "block";
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 100);
        })
        .catch((error) => {
          alert("Error al enviar el formulario");
          console.log(error);
        });
    });
  }
});
