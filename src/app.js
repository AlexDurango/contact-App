const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// Importing routes
const contactRoutes = require('./routes/contacts');
// const { urlencoded } = require('express');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
dbOptions = {
    host: 'b7mtdbnufzvemeev7qzg-mysql.services.clever-cloud.com',
    user: 'ul5lqbcmte36ni1u',
    password: 'z4kzSc25100TVjvCL5U5',
    port: 3306,
    database: 'b7mtdbnufzvemeev7qzg'
}

// Middlewares
app.use(morgan('dev'));  //Ver que peticiones nos da el cliente por consola
app.use(myConnection(mysql, dbOptions, 'single'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', contactRoutes);
app.use('/proyecto', contactRoutes);

// Static files
app.use(express.static(path.join(__dirname,'public')));

// Starting server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});