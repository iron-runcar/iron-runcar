const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/iron-runcar';

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.info(`Successfully connected to the datbase ${MONGODB_URI}`))
  .catch((error) => {
    console.error(`An error ocurred trying to connect to database ${MONGODB_URI}`, error);
    process.exit(0);
  });

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on app termination');
    procces.exit(0);
  });
});

module.exports.connectionUrl = MONGODB_URI;