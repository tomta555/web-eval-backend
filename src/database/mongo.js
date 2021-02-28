const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  connectTimeoutMS: 10000,
  useUnifiedTopology: true 
};

const url = 'mongodb+srv://finalexam:D49gpWJzLmODzT4v@final-exam-web-eval.4ctqp.mongodb.net/webeval?retryWrites=true&w=majority&authSource=admin'

mongoose
    .connect(url, options)
    .then(function() {
      console.log('MongoDB is connected');
    })
    .catch(function(err) {
      console.log(err);
    });
