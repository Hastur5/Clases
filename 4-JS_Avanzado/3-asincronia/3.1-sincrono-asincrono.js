/**
 * Bloque 1 - Código Síncrono
 * Una línea que se ejecuta inmediantamente después de la otra.
 * No hay un código dependiente o bloqueante.
 */

//  console.log('============== BLOQUE 1 ==============')
//  console.log('Primero')
//  console.log('Segundo')
//  console.log('Tercero')

/**
 * BLOQUE 2 - Problema típico de asincronía.
 */
console.log('============== BLOQUE 2 ==============')
 const validatePayment = () =>{
    setTimeout(() => { //El setTimeout es lo que genera la asincronía. Si no se correría en orden.
        console.log('2. Validando la tarjeta')
    },0)
 }

 console.log('1 Presiona el botón de comprar')
 validatePayment()
 console.log('3 Ver el mensaje de "gracias joven"')