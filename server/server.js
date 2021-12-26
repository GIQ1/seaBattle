import express from 'express'
import pg from 'pg';

let login = {
    userId: 0,
    name: 'you'
}
let items = [{
        id: 0,
        name: { first: 'dfsfs1', second: 'second 1' },
        status: 'stat 1',
        place: {
            country: "Country 1",
            sity: "Sity 1"
        },
        followed: false,
    },
    {
        id: 1,
        name: { first: 'hffdhfdhd', second: 'second 2' },
        status: 'stat 2',
        place: {
            country: "Country 2",
            sity: "Sity 2"
        },
        followed: false,
    },
    {
        id: 2,
        name: { first: 'fsafasga', second: 'second 3' },
        status: 'stat 3',
        place: {
            country: "Country 3",
            sity: "Sity 3"
        },
        followed: false,
    },
    {
        id: 3,
        name: { first: 'first 1', second: 'second 1' },
        status: 'stat 1',
        place: {
            country: "Country 1",
            sity: "Sity 1"
        },
        followed: false,
    },
    {
        id: 4,
        name: { first: 'first 2', second: 'second 2' },
        status: 'stat 2',
        place: {
            country: "Country 2",
            sity: "Sity 2"
        },
        followed: false,
    },
    {
        id: 5,
        name: { first: 'sfafsaga 3', second: 'second 3' },
        status: 'stat 3',
        place: {
            country: "Country 3",
            sity: "Sity 3"
        },
        followed: false,
    },
    {
        id: 6,
        name: { first: 'first 1', second: 'second 1' },
        status: 'stat 1',
        place: {
            country: "Country 1",
            sity: "Sity 1"
        },
        followed: false,
    },
    {
        id: 7,
        name: { first: 'first 2', second: 'second 2' },
        status: 'stat 2',
        place: {
            country: "Country 2",
            sity: "Sity 2"
        },
        followed: false,
    },
    {
        id: 8,
        name: { first: 'first 3', second: 'second 3' },
        status: 'stat 3',
        place: {
            country: "Country 3",
            sity: "Sity 3"
        },
        followed: false,
    },
    {
        id: 9,
        name: { first: 'first 1', second: 'second 1' },
        status: 'stat 1',
        place: {
            country: "Country 1",
            sity: "Sity 1"
        },
        followed: false,
    },
    {
        id: 10,
        name: { first: 'first 2', second: 'second 2' },
        status: 'stat 2',
        place: {
            country: "Country 2",
            sity: "Sity 2"
        },
        followed: false,
    },
    {
        id: 11,
        name: { first: 'first 3', second: 'second 3' },
        status: 'stat 3',
        place: {
            country: "Country 3",
            sity: "Sity 3"
        },
        followed: false,
    }, {
        id: 12,
        name: { first: 'first 1', second: 'second 1' },
        status: 'stat 1',
        place: {
            country: "Country 1",
            sity: "Sity 1"
        },
        followed: false,
    },
    {
        id: 13,
        name: { first: 'first 2', second: 'second 2' },
        status: 'stat 2',
        place: {
            country: "Country 2",
            sity: "Sity 2"
        },
        followed: false,
    },
    {
        id: 14,
        name: { first: 'first 3', second: 'second 3' },
        status: 'stat 3',
        place: {
            country: "Country 3",
            sity: "Sity 3"
        },
        followed: false,
    },
    {
        id: 15,
        name: { first: 'first 1', second: 'second 1' },
        status: 'stat 1',
        place: {
            country: "Country 1",
            sity: "Sity 1"
        },
        followed: false,
    },
    {
        id: 16,
        name: { first: 'first 2', second: 'second 2' },
        status: 'stat 2',
        place: {
            country: "Country 2",
            sity: "Sity 2"
        },
        followed: false,
    },
    {
        id: 17,
        name: { first: 'first 3', second: 'second 3' },
        status: 'stat 3',
        place: {
            country: "Country 3",
            sity: "Sity 3"
        },
        followed: false,
    },
];
// const DB = new pg.Client({
//   host: 'localhost',
//   user: 'postgres',
//   port: 5432,
//   password: '1',
//   database: 'seaBattle',
// })
// DB.connect();
// const query = {
//   text: 'SELECT * FROM users WHERE name = $1',
//   values: [req.body.username],
// }
// DB.query(query , (error, resolve) => {
//   if (error) {
//     console.log(error.stack)
//     res.json({
//       token: null
//     });
//   } else {
//     if (resolve.rows[0]===undefined){
//       res.json({
//         token: null,
//         response:'Вас нет в базе'
//       });
//     }else
//     if (resolve.rows[0].password==req.body.password)
//     res.json({
//       token: resolve.rows[0].id,
//       response:'Вход...'
//     });
//     else res.json({
//       token: null,
//       response:'Неверный логин или пароль'
//     });

//   }
// })
const app = express()
const port = 3001





const urlencodedParser = express.urlencoded({ extended: false });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/auth', urlencodedParser, (req, res) => {
    console.log(req.query)
    res.json(login)

});
// app.get('/auth/me', urlencodedParser, (req, res) => {
//     res.json(login)
// });

app.get('/users', urlencodedParser, (req, res) => {
    if (req.query.count > 100) req.query.count = 100;
    if (req.query.count == undefined) req.query.count = 10;
    if (req.query.page == undefined) req.query.page = 1;

    let page = +req.query.page;
    let count = +req.query.count;
    let users = {};
    let min = (page - 1) * count;
    let max = page * count - 1;
    users.error = null;


    let item = [];
    if (min > items.length)
        users.error = 'limit'
    else
        while (min + 1 <= max) {
            if (items[min] != null || items[min] != undefined)
                item.push(items[min])
            min += 1;
        }

    users.items = [...item]
    users.totalCount = items.length;


    res.json(users);
})
app.get('/profile', urlencodedParser, (req, res) => {
    res.json(items[req.query.id])

})
app.post('/follow', urlencodedParser, (req, res) => {
    items[req.query.id].followed = !items[req.query.id].followed;
    res.json({ followed: items[req.query.id].followed, status: 'OK' })

})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})