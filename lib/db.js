const mongoose = require('mongoose');

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function() {
  console.log('MongoDB successfully connected');
});
