import express from 'express';
import sequelize from './config/db.js';
import router from './router/router.js';
import bodyParser from "body-parser"

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


app.use("/", router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});