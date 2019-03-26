/* eslint-disable no-console, no-process-exit */

const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://imad:test@cluster0-6vxvq.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "article";
var compteur = 0;
var articles = require('./tout.json');

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
	var database, collection;
const imdb = require('./src/imdb');
const DENZEL_IMDB_ID = 'nm0000243';

app.listen(9191, () => {

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }

        database = client.db('article');
        collection = database.collection("article_table");
		console.log("You are connecte");
 });
 });

 app.get("/article/populate", (request, response) => {

	// Get the documents collection
	(async () => {

 collection = database.collection("article_table");


 // Insert some documents
	collection.insertMany(
	articles, function(err, result) {
		
		if(err) {
				return response.status(500).send(err);
		}
   
response.send(result.result);
	});   

				  })();



});


 app.get("/article/:id", (request, response) => {

    collection.findOne({ "journal": request.params.id }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});