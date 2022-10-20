var unirest = require('unirest')

var url = 'https://rickandmortyapi.com/api/character/1'

var response = unirest('GET', url)
    .end(function(response){
        if (response.error) throw new Error(response.error)
        console.log(response.body)
    })