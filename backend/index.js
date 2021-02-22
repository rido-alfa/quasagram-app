// dependencies
const express = require("express");

// config-express
const app = express();

// endpoint
app.get("/", (request, response) => {
  let posts = [
    {
      caption: "Dimana ini ",
      location: "Serang Banten"
    },
    {
      caption: "Dimana ini cuk ",
      location: "Cilegon Banten"
    }
  ]

  response.send(posts);
});

// listen
app.listen(process.env.PORT || 3000);
