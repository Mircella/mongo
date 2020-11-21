mongoimport boxoffice-extended.json -d boxoffice -c exmoviestarts --jsonArray --drop;
use boxoffice;
db.exmoviestarts.find({ "genre": { "$size" : 2 }}).pretty();
db.exmoviestarts.find({ $where: "this.genre.length == 2" } ).pretty();
db.exmoviestarts.find({}, { genre: 1 } ).forEach(function(doc) {
    db.exmoviestarts.update({ _id: doc._id },{ $set: { genreSize: doc.genre.length } } );
});
db.exmoviestarts.find({ "genreSize": { "$eq" : 2 }}).pretty();
db.exmoviestarts.find({ "meta.aired": { "$eq" : 2018 }}).pretty();
db.exmoviestarts.find({ "meta.aired": 2018}).pretty();
db.exmoviestarts.find({ "ratings": 2018}).pretty();
db.exmoviestarts.find({"ratings": {$elemMatch: {$gt:8, $lt: 10}}})
db.exmoviestarts.find({ $and: [
        { "ratings" : { $elemMatch : { $gt:8 } } },
        { "ratings" : { $elemMatch : { $lt: 10 } }} ]});
db.exmoviestarts.find({ratings: {$gt: 8, $lt: 10}});