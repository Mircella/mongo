db.patients.insertOne(
    {
        firstName: "Jane",
        lastName: "Li",
        age: 28,
        history: [
            {disease: "Varicose", treatement: "Operation"},
            {disease: "Cold", treatement: "Aspirine"}
        ]
    }
);

db.patients.insertMany([
    {
        firstName: "Tom",
        lastName: "Cruise",
        age: 52,
        history: [
            {disease: "Grippe", treatement: "Nimesil"}
        ]
    },
    {
        firstName: "Ann",
        lastName: "Smith",
        age: 28,
        history: [
            {disease: "Headache", treatement: "Cytramon"},
            {disease: "Cold", treatement: "Aspirine"}
        ]
    }
    ]);

db.patients.updateOne({firstName: "Tom"}, {$set:{age:56}});

db.patients.updateOne(
    {firstName: "Jane"},
    {
        $set:{age:29, firstName: "Mary"}
    });

db.patients.updateOne(
    {firstName: "Mary"},
    {
        $push:{history: {disease:"Stomacheache", treatement:"Linex"}}
    });

db.patients.updateOne(
    {firstName: "Tom"},
    {
        $push:{history: {disease:"Obesity", treatement:"Diet"}},
        $set:{age:54}
    });

db.patients.updateMany(
    {age: {$gt:20}},
    {
        $push:{history: {disease:"Depression", treatement:"Therapy"}}
    }
);

db.patients.find({age: {$gt: 25}}).pretty();
db.patients.find({ age : { $gt :  25, $lt : 50}}).pretty();
db.patients.find({ history : {
    $elemMatch :  { disease: "Cold" }
}}).pretty();
db.patients.deleteMany({ history : {
        $elemMatch :  { disease: "Cold" }
}});
db.patients.deleteMany({"history.disease": "Cold"})
db.patients.updateMany({}, { $inc: { age: 2 }});
