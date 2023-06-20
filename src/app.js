import express from "express";

import indexRoutes from "./routes/index.routes.js";
import indexHorarioRoutes from "./routes/indexhorarios.routes.js";
//Modulo para hacer que dirnmame funcione de manera multiplataforma (Windows, linux, etc)
import path from "path";
import { create } from "express-handlebars";
//Es un middleware (Encargado de enviar los mensajes de peticiones (/get, /post, etc) )
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();

//Esto se usa para indicarle a express donde está la carpeta "views"
//__dirname permite un atajo a la carpeta absoluta, la cual seria c://Users/etc/etc/etc

app.set("views", path.join(__dirname, "views"));

//Que motor de plantillas usaremos, en este caso "Handlebars"
var hbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);

app.set("view engine", ".hbs");

//morgan middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Rutas
app.use(indexRoutes);
app.use(indexHorarioRoutes);

export default app;
