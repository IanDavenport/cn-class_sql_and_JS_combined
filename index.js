
const express = require('express');
// npm i express

const app = express(); 
// initialised express function to use it thought the file

const routes = require('./routes');
// set up our routes so out app.get in aother file
// keeping our index.js nice and clean 

app.use('/', routes);

app.listen(process.env.PORT || 3005, () => {
    //  process.env.PORT == setting us up for deployment
    console.log('Server is listening.')
})








