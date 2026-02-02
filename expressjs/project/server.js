const express = require('express');
const app = express();
const users = require('./data.js');
const port = 3000;

//kisi object ke andar se values nikalna aur unhe alag variable me store karna
//object destructuring
let userInfo={ //object
    username:"qwerty",
    password:"pass@123"
}
// let name=userInfo.username;
// let pass=userInfo.password;

const {name,pass}=userInfo;

//array destructuring
let arr=[1,2,3]
// let a =arr[0];
// let b=arr[1]; [old way]
// let c=arr[2];
const [a,b,c]=arr; // new way

//imp for thurs exam - 22/1/26
//async programming
//event loop
//streams
//server


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.json(users);
});

// users above age 25
app.get('/users/age/above25', (req, res) => {
    const result = users.filter(u => u.age > 25);
    res.json(result);
});

// MR prefix
app.get('/users/mr', (req, res) => {
    const result = users.map(u => ({
        ...u,
        name: `Mr. ${u.name}`
    }));
    res.json(result);
});

// GENDER ROUTE (BEFORE :id)
app.get('/users/gender', (req, res) => {
    const type = req.query.type; // male / female
    let result = users;
    if (type) {
        result = users.filter(u => u.gender === type);
    }
    result = result.map(u => ({
        ...u,
        name: `${u.gender === 'male' ? 'Mr.' : 'Ms.'} ${u.name}`
    }));
    res.json(result);
});

// ALWAYS LAST
//:id - params
// ALWAYS LAST
// :id - params
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let user = users.find((ele) => ele.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

//sir way

// app.get("/username", (req, res) => {
//     let modifiedName = users.map((ele) => {
//         if (ele.gender === "male") {
//             return `Mr. ${ele.name}`;
//         } else {
//             return `Ms. ${ele.name}`;
//         }
//     });
//     res.json(modifiedName);
// });

app.listen(port, () => {
    console.log('Server running on http://localhost:3000');
});
