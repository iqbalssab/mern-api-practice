const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = 4000;
const authRoutes = require('./src/routes/auth')
const blogRoutes = require('./src/routes/blog')

app.use(bodyParser.json()) //type JSON

// Mengatasi Error CORS Origin Browser
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

// memanggil isi routing, berdasarkan parameter di browser
app.use('/v1/auth', authRoutes)
app.use('/v1/blog', blogRoutes)

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json({message: message, data: data})
})


app.listen(port)
