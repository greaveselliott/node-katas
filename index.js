import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import ListRoutes from './src/list/list.route';

const app = express();
const PORT = 3000;

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/to-do-list', {
    useMongoClient: true
});

// Boder parser configuration
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

ListRoutes(app);

// Serving static files
app.use(express.static('public'));

app.get('/', (res, req) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);
