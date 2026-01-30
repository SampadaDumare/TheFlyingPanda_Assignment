require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const logger = require('./middleware/logger');

const app = express();
const port = process.env.PORT || 4000;

connectToMongo();

app.use(express.json());
app.use(cors());
app.use(logger);

// Available routes
app.use('/api/alerts', require('./routes/alerts'));

app.listen(port, ()=>{
    console.log(`App is listening on port http://localhost:${port}`);
}) 