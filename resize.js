const sharp = require("sharp");

sharp("src\\assets\\images\\agenda1.jpg")
  .resize({ width: 1920 }) // ajusta el ancho
  .toFile("src\\assets\\images\\agenda1-small.jpg", (err, info) => {
    if (err) {
      console.error("Error al redimensionar la imagen:", err);
    } else {
      console.log("Imagen redimensionada con éxito:", info);
    }
  });
