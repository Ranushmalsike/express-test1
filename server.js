import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";
import router from './router/router.js'
const app = express();
const port = process.env.PORT || 8000;

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
// bodyParser
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/user/', router);

// app.get('/', (req, res) => {
//     res.send('Hello sey something')
// });

//This use for only static server 



app.listen(port, () =>{
    console.log(`Example app listening on port ${port}!`)
}); 