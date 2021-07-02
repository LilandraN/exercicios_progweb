const express = require('express');
const app = express();
const booksRoute = require('./route/booksRoute');
const clientsRoute = require('./route/clientsRoute');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(booksRoute);
app.use(clientsRoute);
app.listen(3333);


