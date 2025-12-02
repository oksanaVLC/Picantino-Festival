/**
 * Import dependencies from node_modules
 * see commented examples below
 */
// Import all of Bootstrap’s JS
import * as bootstrap from "bootstrap";
console.log(bootstrap);
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
const bsOffcanvas = new bootstrap.Offcanvas(
  document.getElementById("offcanvasNavbar"),
  {
    scroll: true,
    backdrop: false,
  }
);

// Mostrar el offcanvas programáticamente
bsOffcanvas.show();
