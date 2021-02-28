const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const url = 'mongodb+srv://finalexam:finalexam1234@eaxm-data.4ctqp.mongodb.net/webeval?retryWrites=true&w=majority&authSource=admin'

mongoose
    .connect(url, options)
    .then(function() {
      console.log('MongoDB is connected');
    })
    .catch(function(err) {
      console.log(err);
    });
