const express = require('express');
const app = express();
const dotenv = require('dotenv'); 
const cors = require('cors');
const morgan = require('morgan')
const db = require('./config/db');
const { default: connectDB } = require('./config/db');
const apiRoutes = require("./routes/v1/api")
app.use(
    cors({
        origin: "*",
    })
);
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use('/api' , apiRoutes )
const PORT = process.env.PORT || 1337;
db()
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
