require("dotenv").config();
const express = require('express');
const app = express();
require('./DB/conn');
const cors = require('cors');
const PORT = 5004;
const router = require('./Routes/router');

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
})