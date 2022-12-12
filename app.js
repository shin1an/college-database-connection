const db = require('./db/db')

db.execute('SELECT * FROM coupon', (err, res) => {
    if (err) throw err;
    console.log(res)
})
