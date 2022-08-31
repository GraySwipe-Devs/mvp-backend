const express = require('express');
const app = express();
const dotenv = require('dotenv'); 
const cors = require('cors');
const morgan = require('morgan')
const apiRoutes = require("./routes/")
app.use(
    cors({
        origin: "*",
    })
);
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// app.use('/api' , )
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
