const express = require('express');
const app = express();
const accountsRoute = require('./route/accountsRoute');
const clientsRoute = require('./route/clientsRoute');
const dependentsRoute = require('./route/dependentsRoute');
const placesRoute = require('./route/placesRoute');
const typesRoute = require('./route/typesRoute');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(accountsRoute);
app.use(clientsRoute);
app.use(dependentsRoute);
app.use(placesRoute);
app.use(typesRoute);
app.listen(3456);


