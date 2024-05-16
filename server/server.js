const express = require("express");
const app = express();
const cors = require("cors")

app.use( express.json(),  express.urlencoded({ extended: true }));
app.use( cors());

require("./config/mongoose.config");
const rutes = require("./routes/autores.routes")
rutes(app) 
app.listen(8000, () => console.log('Listening on port: 8000'));