
const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const request = require("request");
const { connect } = require("./routes/auth");

//import routes
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const { /*request,*/ response } = require("express");

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology:true },
    () => console.log("connect to db!"));

//middleware
app.use(express.json());

app.use('/api/user', authRouter);//route middlewares
app.use('/shop', postRouter);


//test za weather
app.get("/getWeather", (req, res) => {
    request(
        "http://api.weatherstack.com/current?access_key=378cb56b9d806afdbccdddebcedad3f1&query=Split",
        function (error, response, body) {
            if (!error&& response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var temp=parsedBody["current"]["temperature"];
                res.send({temp});
            }
        });
});

app.listen(port, () => console.log("Example app listening on port!"));