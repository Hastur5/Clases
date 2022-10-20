// // Objetos -> 
// // ¿Que es ? -> Algo fisico, Posee caracteristicas. 

// // Lapiz -> Marca Lapimex. , es amarillo, no. 2, punta gruesa, tiene borrador... (Propiedades)
// //    ¿Para que sirve?  -- Escribir, dibujar, puede borrar ... (Metodos / Funciones)
// // Auto -> Marca, modelo, año, color, cilindros, torque
// //  -> Trasnportarme , arranca , avanza, avazan en reversa, 
// // Reloj: > Marca, maquinaria, Digital , analogico, o de arena, o de sol, lunar,.... ( Propiedades)
// // Marcar la hora, indicar un cronometro, alarma, despertarme ... 


// // Cuentahabiente  = > Nombre, apellidos, No,. cuenta ,saldo, Tarjeta ligada, historial de movimientos .... 
// // Retirar, depositar , consultar estados de cuenta, pagar servicios, cerrar su cuenta..... 

// //  ["joel", "lozano", 35165, 2155 , 5156415645645, "Beneficios"] -> // Arreglos
// // JSON -> Java Script Notation 
// let cliente1 = {
//     nombre: "Joel",
//     apellido: "Lozano",
//     noCuenta: 464654,
//     saldo: 5466,
//     beneficios: "Descueto en Cine",
//     correo: "joel@gmail.com",
//     password: 12345
// }

// let cliente2 = {
//     nombre: "Miguel",
//     apellido: "Monterroso",
//     noCuenta: 6548646,
//     saldo: 955466,
//     beneficios: "Descueto en Cine y en bloqueador solar",
//     correo: "migue@gmail.com",
// }

// let clientes = [cliente1, cliente2];

// let correoInput = document.getElementById("correo");
// let passwordInput = document.getElementById("password");

// for( let i = 0; i <= clientes.length; i++) {
//     if (clientes[i].correo == correoInput && clientes[i].password == passwordInput) {
//         // Investigar - Como salir de un ciclo for, while -> 
//         // continue, break, 
//     } else {
//         console.log("Error")
//     }
// }

// //Investigar  como funciona el metodo find() dentro de un arreglo. 

// console.log(cliente2.password)

function cliente1 (usuario, contraseña, saldo) {
    this.usuario = usuario
    this.contraseña = contraseña
    this.saldo = saldo
}

function cliente2 (usuario, contraseña, saldo) {
    this.usuario = usuario
    this.contraseña = contraseña
    this.saldo = saldo
}

 const cuentas = [
        {
            'usuario':'mau',
            'contraseña': 'fili',
            'saldo' : 900 ,
        },
        {
            'usuario' : 'myrmir',
            'contraseña' : '123',
            'saldo' : 10,
        }
    ]

    console.log(cuentas[1].usuario)


    const array1 = [5, 12, 8, 130, 44];

const cliente1 = cuentas.find(user => user.usuario === 'mau' );


console.log(found);
// expected output: 12



const inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];

const resultado = inventario.find( fruta => fruta.nombre === 'cerezas' );

console.log(resultado); // { nombre: 'cerezas', cantidad: 5 }




console.log(cuentas)

    cliente1.displayCuenta()
    cliente2.displayCuenta()

    const validar = (user,password) => {

        const cliente1 = cuentas.find(login => login.usuario === 'mau')
        const cliente2 = cuentas.find(login => login.usuario === 'myrmir')

        console.log(cliente1)
        console.log(cliente2)
    
        my_cuentas.usuario = 'mau';
        console.log(Object.values(my_cuentas))

