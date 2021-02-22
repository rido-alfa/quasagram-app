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
  let posts = [];
  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, "=>", doc.data());
        posts.push(doc.data())
      });
      response.send(posts);
    })
    .catch(err => {
      console.log(err);
    });

});

// listen
app.listen(process.env.PORT || 3000);
