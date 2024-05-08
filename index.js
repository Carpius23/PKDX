const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
 console.log(req);
 res.send("Hello Pokemon")
});

app.get("/pokemon", (req, res, next) => {
    res.json({nombre: "Juan", edad: "21"})
   });

app.listen(3000, () => {
    console.log("Server is running");
});