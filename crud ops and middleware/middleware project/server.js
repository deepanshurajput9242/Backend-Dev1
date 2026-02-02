import express from 'express';

const app = express();

// body se data read karne ke liye
app.use(express.json());

let mid1 = (req, res, next) => {
    console.log('Middleware executed');
    next();
}

let mid2 = (req, res, next) => {
    console.log('Second Middleware executed');
    next();
}

app.use(mid1);
app.use(mid2);

// validation middleware
let validateData = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
            error: 'username aur password required hai'
        });
    }
    if (password.length < 6) {
        return res.status(400).json({
            error: 'password kam se kam 6 characters ka hona chahiye'
        });
    }
    next();
}

app.get('/', (req, res) => {
    console.log(req.url);
    res.send('server is running');
});

// app.get('/', mid2,mid1, (req, res) => {
//     console.log(req.url);
//     res.send('server is running');
// });

// app.get('/', mid1,mid2, (req, res) => {
//     console.log(req.url);
//     res.send('server is running');
// });

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

export default {mid1,mid2};