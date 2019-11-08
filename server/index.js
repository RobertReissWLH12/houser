require('dotenv').config();
const express = require('express');
controller = require('./controller')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const app = express()

app.use(express.json())

// POSSIBLE MASSIVE SECTION
massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db);
        console.log('database is connected')
})
.catch(err => console.log(err))


// ENDPOINTS
// app.get('/api/****', controller.whatever)
// app.post('/api/****', controller.whatever)
// app.put('/api/****', controller.whatever)
// app.delete('/api/****', controller.whatever)

app.listen(SERVER_PORT, () =>
    console.log(`I am fluent in over ${SERVER_PORT} forms of communication...`))