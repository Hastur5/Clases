El modelo clásico es el del cliente-servidor. El cliente solicita una info en específica y el servidor
se encarga de regresar información ya sea un html, base de datos (apirest). Esta solicitud es procesada por medio de
el protocolo HTTP(hay más pero es el protocola más usado) que funge como reglas (un lenguaje) entre el cliente y el servidor. 

¿Cómo se comunica el cliente con el servidor?
El cliente pide y el servidor responde.
Hay dos grandes grupos de mensajes que se manda:
1) Request y 2)Response.
Ambos son un mensaje siguiendo las reglas HTTP: línea de inicio, cabeceras y cuerpo.

Líneas de inicio: aquí vienen la información de los métodos HTTP o verbos (get, post, delete, create, etc.) y también, la URL(dirección).
Cabeceras: ahí están contenidos los metadatos como usuario, password, etc.
Cuerpo: es básicamente el mensaje o la información que se pide o se envía.

Métodos HTTP -> Indica el ¿Qué? Es una forma en la que el cliente indica al servidor el tipo de acción que el cliente debe de ejecutar. 
|--> Get: busca consultar o solicitar información al servidor. Es lo que se hizo con las apis de la kata de computer science.
|->Post: Pide crear un nuevo recurso. Por ejemplo, crear una cuenta. Guardar una base de datos o enviar a otro servicio web.
|->Put: Actualizar o modificar un contenido o recurso ya existente.
|->Delete: Eliminar información.

URL -> Indica en ¿dónde? Va a crear un recurso o de dónde lo va a obtener. Es la dirección puede ser de una página web pero también de las carpetas de tu disco duro, etc. Está dividida en el protocolo: HTTPS Dominio: www.fili.com Path:indica qué recurso y a qué parte específica se solicita el método. 

Rest -> Funciona para hacer transferencia de datos. Por ejemplo, un JSON. Y tiene que cumplir ciertas reglas para poder cumplir con la arquitectura REST. Si una API, utiliza la arquitectura REST, entonces se le llama una REST API.



Express es un framework para levantar el servidor y crear APIs en solamente 4 líneas:

// 1 Importaciones de componentes necesarios
const express = require('express');
// 2 Declaración de variables para levantar el servidor
const app = express();
const port = 3000;
// 3 Obtener los routes
const routerApi = require('./routes/main.controller');
// 4 Agregar middleware para uso de req.body
app.use(express.json());
// 5 Levantar el servidor
app.listen(port, () => {
    console.log('Servidor express listening...'.rainbow);
});
// 6 Agregar el route a la app
routerApi(app);

// localhost:3000