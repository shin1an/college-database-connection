const mySql = require('mysql2')

const connection = mySql.createConnection({
    host: "5.183.188.132",
    user: "db_vgu_student",
    password: "thasrCt3pKYWAYcK",
    database: "db_vgu_test"
})


module.exports = connection