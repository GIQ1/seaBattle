const express = require('express')
const app = express()
const port = 3001
app.use(express.static(__dirname));

app.get('/users', (req, res) => {
  res.json([
    [1, 5, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})