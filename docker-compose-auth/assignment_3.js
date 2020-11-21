mongoimport boxoffice.json -d boxoffice -c boxoffice --jsonArray --drop;
mongo;
use boxoffice;
db.boxoffice.find({$and: [{"meta.rating": {$gt: 9.2}}, {"meta.runtime": {$lt: 100}}]}).pretty();
db.boxoffice.find({genre: {$in: ["drama","action"]}}).pretty();
db.boxoffice.find({$or: [{genre: "drama"}, {genre: "action"}]}).pretty();
db.boxoffice.find({$or: [{genre: /^DRAMA$/i}, {genre: /^ACTION$/i}]}).pretty();
db.boxoffice.find({$expr:{$gt:["$visitors", "$expectedVisitors"]}}).pretty();
