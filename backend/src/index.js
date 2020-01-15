const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://oministack:123@cluster-7otrh.mongodb.net/main?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Metodos http: GET, POST, PUT, DELETE

// GET - query params: insominia -> query || req.query
// PUT, DELETE - route params: insominia -> url/param || req.params 
// PUT, POST - body - insominia -> body

app.use(express.json());
app.use(routes);

app.listen(3333);