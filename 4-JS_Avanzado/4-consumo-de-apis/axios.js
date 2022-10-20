var axios = require('axios')

var config = {
    method: 'get',
    url: 'https://rickandmortyapi.com/api/character/1',
    headers:{} //es info como de usuarios y contraseñas
}

axios(config)
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(error){
        console.log(error)
    })


// var axios = require('axios');
// var config = require('./config')

// var options = {
//     method: config.method,
//     url: config.hostname+config.path,
//     headers:{}
// }

// axios(options)
//     .then(function(response) {
//         console.log(response.data);
//     })
//     .catch(function(error){
//         console.log(error)
//     })