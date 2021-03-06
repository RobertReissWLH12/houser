require('dotenv').config();
const express = require('express');
// const session = require('express-session')
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
        app.listen(SERVER_PORT, () =>
            console.log(`I am fluent in over ${SERVER_PORT} forms of communication...`))
})
.catch(err => console.log(err))


// ENDPOINTS
app.get('/api/houses', controller.getHouses)
app.post('/api/houses', controller.addHouse)
app.delete('/api/houses/:id', controller.deleteHouse)
