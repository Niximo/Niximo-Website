require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const contactUs = require('./routes/contactUsRoutes')

const app = express();

app.use(express.json());

const allowedOrigins = [
    'http://localhost:5173'
];

app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }));

  // logging
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });

  //Routes
  app.use('/api', contactUs);

  //MongoDB connection
  mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});