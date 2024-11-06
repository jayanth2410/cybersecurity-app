// backend/server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const topicRoutes = require('./routes/topicRoutes');

// const authController = require('./controllers/authController');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/topics', topicRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
