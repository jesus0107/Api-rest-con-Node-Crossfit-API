const express = require("express");
const routerApi = require("./v1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
routerApi(app)

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
});
