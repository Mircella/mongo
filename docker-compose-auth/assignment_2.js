use companies;
db.createCollection('companies',{
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['title', 'year', 'founders'],
            properties: {
                title:{
                    bsonType: 'string',
                    description:'Title must be string'
                },
                year:{
                    bsonType: 'double',
                    description:'Area must be double'
                },
                founders:{
                    bsonType: 'array',
                    description:'Founders must be array',
                    items: {
                        bsonType: 'object',
                        required: ['firstName', 'lastName'],
                        properties: {
                            firstName: {
                                bsonType: 'string',
                                description:'firstName must be string'
                            },
                            lastName: {
                                bsonType: 'string',
                                description:'lastName must be string'
                            }
                        }
                    }
                }
            }
        }
    }
});
db.companies.insertOne({title: "Google", year: 2000, founders: [{firstName: "Sergey", lastName: "Brin"}]});
db.companies.insertMany([
    {title: "ViacomCBS", year: 1990, founders:[{firstName:"Bob", lastName:"Snow"}, {firstName: "John", lastName: "Smith"}]},
    {title: "HBO", year: 2001, founders: [{firstName: "Ann", lastName: "Doe"}, {firstName: "Jane", lastName: "Stone"}]}
]);
db.companies.insertMany(
    [
        {_id: ObjectId("5fa7c2d54c4a7dcd0445335d"), title: "RedHat", year: 2007, founders: [{firstName: "Michael", lastName: "Dickens"}]},
        {title: "Oracle", year: 1999, founders: [{firstName: "Jenny", lastName: "Doe"}]}
    ],
    {ordered: false}
    );
db.companies.insertOne({
    title: "Sumologic", year: 2006,
    founders: [
        {firstName: "Kate", lastName: "Simpson"},
        {firstName: "Alex", lastName: "Brenner"}
        ]},
    {writeConcern: {w:1, j:true,wtimeout:200}});
db.companies.insertOne({
        title: "NewRelic", year: 2010,
        founders: [
            {firstName: "Amanda", lastName: "Bole"}
        ]},
    {writeConcern: {w:1, j:false}});
db.companies.insertOne({
        title: "Cisco", year: 1992,
        founders: [
            {firstName: "Dorothy", lastName: "Cruise"},
            {firstName: "Tom", lastName: "Spark"}
        ]},
    {writeConcern: {w:0}});
db.companies.find();
