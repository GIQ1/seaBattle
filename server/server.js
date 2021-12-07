const express = require('express')
const app = express()
const port = 3001
app.use(express.static(__dirname));

app.get('/date', (req, res) => {
  let mas=[];
  for (let i=0; i<10; i++) {
    mas[i]=new Array(10);
  }
     for (let i=0;i<10;i++)
      for (let j=0;j<10;j++)
        mas[i][j]=0;
    
  res.json(mas);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})