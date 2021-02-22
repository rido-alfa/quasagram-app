// dependencies
const express = require("express");
const admin = require("firebase-admin");

// config-express
const app = express();

// config firebase-admin
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// endpoint
app.get("/posts", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  let posts = [];
  db.collection("posts")
	.orderBy('date', 'desc')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, "=>", doc.data());
        posts.push(doc.data());
      });
      response.send(posts);
    });
});

// listen
app.listen(process.env.PORT || 3000);
