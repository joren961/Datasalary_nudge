require('dotenv').config();

model = require('Model')
const express = require("express");
const router = express.Router();

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

router.get('/prediction', (req, res) => {

});

router.get('/', (req, res) => {
    res.send()
});