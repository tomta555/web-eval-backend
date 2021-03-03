const express = require('express');
const path = require('path');
const cors = require('cors')

require('./database/mongo');
const routes = require('./routes');
const { sendErrorResponse } = require('./helper/api-response');
const app = express();
const port = process.env.PORT || 8000;

// app.use('/public', express.static(path.join(__dirname,'/public')))
app.use(cors({origin: '*'}))
app.use(express.json({ extended: false }));
app.use('/api', routes);
    
app.get('/', (req, res) => {
    res.send('Final exam scheduling system (261942) Backend API');
});

app.all('*', (req, res) => {
    const error = new Error(`${req.method} ${req.path} not found.`);
    error.code = 404;
    throw error;
});

app.use((error, req, res, next) => {
    
    console.log(error);
    const code = error.code || 500;
    const message = error.message;
    sendErrorResponse(res, { message: message }, code);
  });


app.listen(port, () => {
    console.log(`listening at port ${port}`);
});