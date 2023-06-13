/*Importaciones de librerias */
var express = require("express");
var mysql = require("mysql");
var cors = require('cors');
var app = express();

/*Configuracion */
app.use(express.json());
app.use(cors());    

var conexion = mysql.createConnection(
    {   
        host: "localhost",
        user: "root",
        password: "admin",
        database: "registrosncs"
    }
);

conexion.connect(
    function(error){
        if(error){
            throw error;
        }else{
            console.log("Conexion Exitosa");
        }
    }
);

const port = process.env.PUERTO || 3000;

app.listen(
    port, function(){
        console.log("Servidor Funcionando en el PUERTO " + port)
    }
);

//localhost:3000/
app.post(
    "/api/usuarios", (req, res) => {
        let data = {
            NOMBRE: req.body.NOMBRE,
            APELLIDO: req.body.APELLIDO,
            DNI: req.body.DNI,
            CELULAR: req.body.CELULAR,
            EMAIL: req.body.EMAIL,
        }
        let sql = "INSERT INTO usuarios SET ?";
        conexion.query(
            sql, data , function(error, resultado){
                if(error){
                    throw error;
                } else{
                    console.log(data)
                    res.send(data)
                }
            }
        )
    }
);