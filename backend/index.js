const express = require('express')
const app = express()
const db = require ("./src/database/database")


app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(3001, () => {
  console.log('Example app listening on port 3001!')
  db.connect();
})
