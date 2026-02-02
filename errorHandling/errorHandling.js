const http = require('http');
// console.log("first");

// const a = 10;

// // console.log(a/0);

// try {
//     throw new Error("something wrong");
// } catch (error) {
//     console.log(error);
// }

// console.log("end");

// throw new Error("This is a custom error message");

const server = http.createServer((req, res) => {

    try {
        throw new Error("there is something wrong");
    } catch (error) {
        console.log(error.message);
    }

    res.end("server is running");

});

server.listen(3000, () => {
    console.log("server is running on port 3000");
});
