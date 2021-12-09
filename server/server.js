const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

const urlencodedParser = express.urlencoded({ extended: false });
// create application/json parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/login',urlencodedParser, (req, res) => {
  console.log(req.body)
  res.json({
    token: 'test123'
  });
});

app.get('/date',urlencodedParser, (req, res) => {
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