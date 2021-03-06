const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
// connectDB();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

app.get('/', (req, res) => res.send('API is running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
