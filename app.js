const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 8080;

const router = require('./Router/index');

app.use(cors());

app.use(express.json());  // parse json object 

app.use('/', router);

const url = 'mongodb+srv://db_user_29:zoua268cLuMvgixv@cluster0.zcikl.mongodb.net/TestDB?retryWrites=true&w=majority';

// const url = 'mongodb+srv://ZOMATO-CLONE:Viper9718575302@cluster0.epmmr.mongodb.net/ZOMATO?retryWrites=true&w=majority'


mongoose.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, () => {
            console.log(`Server is running at${port}`);
        });
    })
    .catch(err => console.log(err));
