// dependencies
const express = require("express");
const admin = require("firebase-admin");
let inspect = require("util").inspect;
let Busboy = require("busboy");

// config-express
const app = express();

// config firebase-admin
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// endpoint get posts
app.get("/posts", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  let posts = [];
  db.collection("posts")
    .orderBy("date", "desc")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, "=>", doc.data());
        posts.push(doc.data());
      });
      response.send(posts);
    });
});

// endpoint create post
app.post("/createPost", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  let busboy = new Busboy({ headers: request.headers });
  let fields = {};

  busboy.on("file", function(fieldname, file, filename, encoding, mimetype) {
    console.log(
      "File [" +
        fieldname +
        "]: filename: " +
        filename +
        ", encoding: " +
        encoding +
        ", mimetype: " +
        mimetype
    );
    file.on("data", function(data) {
      console.log("File [" + fieldname + "] got " + data.length + " bytes");
    });
    file.on("end", function() {
      console.log("File [" + fieldname + "] Finished");
    });
  });

  busboy.on("field", function(
    fieldname,
    val,
    fieldnameTruncated,
    valTruncated,
    encoding,
    mimetype
  ) {
    fields[fieldname] = val;
  });

  busboy.on("finish", function() {
	db.collection('posts').doc(fields.id).set({
		id: fields.id,
		caption: fields.caption,
		location: fields.location,
		date: parseInt(fields.date),
		imageUrl: 'https://i.imgur.com/25zhGbg.jpeg',
		username: 'rido_js'
	});
    response.send("Done parsing form!");
  });

  request.pipe(busboy);
});

// listen
app.listen(process.env.PORT || 3000);
