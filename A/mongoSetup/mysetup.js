db.createUser(
{
    user: "root",
    pwd: "123456",
    roles: [
      { role: "dbOwner", db: "test" }
    ]
})
