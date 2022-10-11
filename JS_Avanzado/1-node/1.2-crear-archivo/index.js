const fs = require('fs') //

const path = './' //
const fileName = 'my-file.txt' //
const contentFile = 'ya queremos ir a receso'
const destination = `${path}${fileName}`

fs.writeFile(destination, contentFile, (error) =>{
    if(error){
        throw error
    } else{
        console.log('El archivo se creó con éxito.')
    }
} )


//callback: Pasar una función como parámetro a otro.