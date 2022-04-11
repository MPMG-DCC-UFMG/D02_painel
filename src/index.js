const express = require("express");
const app = express();

const options = {
};

require('dotenv').config();
const static_path = process.env.STATIC_PATH;

const static_route = express.static(static_path, options);

app.use(static_route);


app.listen(3000, () => {
    console.log(`Server is up. Running at port ${3000}`);
    console.log(`Static path: ${static_path}`)
});
