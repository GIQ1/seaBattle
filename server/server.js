import express from 'express'
import  pg  from 'pg';


// const DB = new pg.Client({
//   host: 'localhost',
//   user: 'postgres',
//   port: 5432,
//   password: '1',
//   database: 'seaBattle',
// })
// DB.connect();
const app = express()
const port = 3001





const urlencodedParser = express.urlencoded({ extended: false });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/login',urlencodedParser, (req, res) => {
  const query = {
    text: 'SELECT * FROM users WHERE name = $1',
    values: [req.body.username],
  }
  DB.query(query , (error, resolve) => {
    
    if (error) {
      console.log(error.stack)
      res.json({
        token: null
      });
    } else {
      if (resolve.rows[0]===undefined){
        res.json({
          token: null,
          response:'Вас нет в базе'
        });
      }else
      if (resolve.rows[0].password==req.body.password)
      res.json({
        token: resolve.rows[0].id,
        response:'Вход...'
      });
      else res.json({
        token: null,
        response:'Неверный логин или пароль'
      });
     
    }
  })
  
  
});

// app.get('/date',urlencodedParser, (req, res) => {
//   let mas=[];
//   for (let i=0; i<10; i++) {
//     mas[i]=new Array(10);
//   }
//      for (let i=0;i<10;i++)
//       for (let j=0;j<10;j++)
//         mas[i][j]=0;
    
//   res.json(mas);
// })
app.get('/users',urlencodedParser, (req, res) => {
  if(req.query.count>100) req.query.count=100;
  if(req.query.count==undefined) req.query.count=10;
  if(req.query.page==undefined) req.query.page=1;
  
  let page = +req.query.page;
  let count = +req.query.count;
  let users = {};
  let min = (page-1) *count;
  let max = page * count-1;
  console.log(min+" "+ max);
  users.error = null;

  let items=[
    { 
       id: 1, 
       name: {first: 'first 1', second: 'second 1'}, 
       status: 'stat 1', 
       place:{
        country:"Country 1",
        sity:"Sity 1"
       },
       followed: false,},
     { 
       id: 2, 
       name: {first: 'first 2', second: 'second 2'}, 
       status: 'stat 2', 
       place:{
        country:"Country 2",
        sity:"Sity 2"
       },
       followed: false,
     },
     { 
       id: 3, 
       name: {first: 'first 3', second: 'second 3'}, 
       status: 'stat 3', 
       place:{
        country:"Country 3",
        sity:"Sity 3"
       },
       followed: false,
     },
     { 
      id: 1, 
      name: {first: 'first 1', second: 'second 1'}, 
      status: 'stat 1', 
      place:{
       country:"Country 1",
       sity:"Sity 1"
      },
      followed: false,},
    { 
      id: 2, 
      name: {first: 'first 2', second: 'second 2'}, 
      status: 'stat 2', 
      place:{
       country:"Country 2",
       sity:"Sity 2"
      },
      followed: false,
    },
    { 
      id: 3, 
      name: {first: 'sfafsaga 3', second: 'second 3'}, 
      status: 'stat 3', 
      place:{
       country:"Country 3",
       sity:"Sity 3"
      },
      followed: false,
    },
    { 
      id: 1, 
      name: {first: 'first 1', second: 'second 1'}, 
      status: 'stat 1', 
      place:{
       country:"Country 1",
       sity:"Sity 1"
      },
      followed: false,},
    { 
      id: 2, 
      name: {first: 'first 2', second: 'second 2'}, 
      status: 'stat 2', 
      place:{
       country:"Country 2",
       sity:"Sity 2"
      },
      followed: false,
    },
    { 
      id: 3, 
      name: {first: 'first 3', second: 'second 3'}, 
      status: 'stat 3', 
      place:{
       country:"Country 3",
       sity:"Sity 3"
      },
      followed: false,
    },
    { 
      id: 1, 
      name: {first: 'first 1', second: 'second 1'}, 
      status: 'stat 1', 
      place:{
       country:"Country 1",
       sity:"Sity 1"
      },
      followed: false,},
    { 
      id: 2, 
      name: {first: 'first 2', second: 'second 2'}, 
      status: 'stat 2', 
      place:{
       country:"Country 2",
       sity:"Sity 2"
      },
      followed: false,
    },
    { 
      id: 3, 
      name: {first: 'first 3', second: 'second 3'}, 
      status: 'stat 3', 
      place:{
       country:"Country 3",
       sity:"Sity 3"
      },
      followed: false,
    }, { 
      id: 1, 
      name: {first: 'first 1', second: 'second 1'}, 
      status: 'stat 1', 
      place:{
       country:"Country 1",
       sity:"Sity 1"
      },
      followed: false,},
    { 
      id: 2, 
      name: {first: 'first 2', second: 'second 2'}, 
      status: 'stat 2', 
      place:{
       country:"Country 2",
       sity:"Sity 2"
      },
      followed: false,
    },
    { 
      id: 3, 
      name: {first: 'first 3', second: 'second 3'}, 
      status: 'stat 3', 
      place:{
       country:"Country 3",
       sity:"Sity 3"
      },
      followed: false,
    },
    { 
      id: 1, 
      name: {first: 'first 1', second: 'second 1'}, 
      status: 'stat 1', 
      place:{
       country:"Country 1",
       sity:"Sity 1"
      },
      followed: false,},
    { 
      id: 2, 
      name: {first: 'first 2', second: 'second 2'}, 
      status: 'stat 2', 
      place:{
       country:"Country 2",
       sity:"Sity 2"
      },
      followed: false,
    },
    { 
      id: 3, 
      name: {first: 'first 3', second: 'second 3'}, 
      status: 'stat 3', 
      place:{
       country:"Country 3",
       sity:"Sity 3"
      },
      followed: false,
    },
    { 
      id: 1, 
      name: {first: 'first 1', second: 'second 1'}, 
      status: 'stat 1', 
      place:{
       country:"Country 1",
       sity:"Sity 1"
      },
      followed: false,},
    { 
      id: 2, 
      name: {first: 'first 2', second: 'second 2'}, 
      status: 'stat 2', 
      place:{
       country:"Country 2",
       sity:"Sity 2"
      },
      followed: false,
    },
    { 
      id: 3, 
      name: {first: 'first 3', second: 'second 3'}, 
      status: 'stat 3', 
      place:{
       country:"Country 3",
       sity:"Sity 3"
      },
      followed: false,
    },
    { 
     id: 1, 
     name: {first: 'first 1', second: 'second 1'}, 
     status: 'stat 1', 
     place:{
      country:"Country 1",
      sity:"Sity 1"
     },
     followed: false,},
   { 
     id: 2, 
     name: {first: 'first 2', second: 'second 2'}, 
     status: 'stat 2', 
     place:{
      country:"Country 2",
      sity:"Sity 2"
     },
     followed: false,
   },
   { 
     id: 3, 
     name: {first: 'first 3', second: 'second 3'}, 
     status: 'stat 3', 
     place:{
      country:"Country 3",
      sity:"Sity 3"
     },
     followed: false,
   },
   { 
     id: 1, 
     name: {first: 'first 1', second: 'second 1'}, 
     status: 'stat 1', 
     place:{
      country:"Country 1",
      sity:"Sity 1"
     },
     followed: false,},
   { 
     id: 2, 
     name: {first: 'first 2', second: 'second 2'}, 
     status: 'stat 2', 
     place:{
      country:"Country 2",
      sity:"Sity 2"
     },
     followed: false,
   },
   { 
     id: 3, 
     name: {first: 'first 3', second: 'second 3'}, 
     status: 'stat 3', 
     place:{
      country:"Country 3",
      sity:"Sity 3"
     },
     followed: false,
   },
   { 
     id: 1, 
     name: {first: 'first 1', second: 'second 1'}, 
     status: 'stat 1', 
     place:{
      country:"Country 1",
      sity:"Sity 1"
     },
     followed: false,},
   { 
     id: 2, 
     name: {first: 'first 2', second: 'second 2'}, 
     status: 'stat 2', 
     place:{
      country:"Country 2",
      sity:"Sity 2"
     },
     followed: false,
   },
   { 
     id: 3, 
     name: {first: 'first 3', second: 'second 3'}, 
     status: 'stat 3', 
     place:{
      country:"Country 3",
      sity:"Sity 3"
     },
     followed: false,
   }, { 
     id: 1, 
     name: {first: 'first 1', second: 'second 1'}, 
     status: 'stat 1', 
     place:{
      country:"Country 1",
      sity:"Sity 1"
     },
     followed: false,},
   { 
     id: 2, 
     name: {first: 'first 2', second: 'second 2'}, 
     status: 'stat 2', 
     place:{
      country:"Country 2",
      sity:"Sity 2"
     },
     followed: false,
   },
   { 
     id: 3, 
     name: {first: 'first 3', second: 'second 3'}, 
     status: 'stat 3', 
     place:{
      country:"Country 3",
      sity:"Sity 3"
     },
     followed: false,
   },
   { 
     id: 1, 
     name: {first: 'first 1', second: 'second 1'}, 
     status: 'stat 1', 
     place:{
      country:"Country 1",
      sity:"Sity 1"
     },
     followed: false,},
   { 
     id: 2, 
     name: {first: 'first 2', second: 'second 2'}, 
     status: 'stat 2', 
     place:{
      country:"Country 2",
      sity:"Sity 2"
     },
     followed: false,
   },
   { 
     id: 3, 
     name: {first: 'first 3', second: 'second 3'}, 
     status: 'stat 3', 
     place:{
      country:"Country 3",
      sity:"Sity 3"
     },
     followed: false,
   }
        
  ];
  let item = [];
  if(min>items.length) 
  users.error='limit'
  else
  while(min<=max){
    if(items[min]!=null || items[min]!=undefined)
    item.push(items[min])
    min+=1;
  }
 
  users.items = [...item]
  users.totalCount = items.length;
  
  
  res.json(users);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})