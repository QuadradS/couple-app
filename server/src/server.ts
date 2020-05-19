import * as express from "express";
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import {uniqueNamesGenerator, adjectives, colors, animals} from 'unique-names-generator';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: 'http://localhost:3000', // front app
}))

app.use(bodyParser.urlencoded({extended: true}))

app.get("/getList", (req, res) => {

    const shortName = uniqueNamesGenerator({
        dictionaries: [adjectives, animals, colors],
        length: 3
    });

    res.send(JSON.stringify({data: {name: shortName}}))
})

app.get("*", (req, res) => {
    res.send("Hello World test 4")
})

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})
