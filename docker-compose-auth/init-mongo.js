db.createUser({
    user: "mircella",
    pwd: "mircella",
    roles: [
        {
            role: "readWrite",
            db: "patients"
        }
    ]
});