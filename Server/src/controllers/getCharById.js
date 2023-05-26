const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

// esta peticion busca a un character en evaluando el id que recibo por params y la propiedad name.
const getCharById = (req, res) => {
    const {id} = req.params;
    axios.get(`${URL}/${id}`)
    .then(response => response.data)
    .then(({status, name, species, origin, image, gender}) => {
        if(name) {
            const character = {
                id,
                name,
                species,
                origin,
                status,
                gender,
                image
            }
            return res.status(200).json(character)
        }
        return res.status(404).send('Not found')
    })
    .catch(error => res.status(500).send(error.message))
}

module.exports = {
    getCharById
};






























// const axios = require('axios');

// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`) // pending..pq no hay handlers.
//     .then(response => response.data) // una vez tengo la respuesta accedo a la propiedad data
//     .then(({name, gender, species, origin, image, status }) => { // destructuring de data
//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         }
//         return res
//                 .writeHead(200, {'Content-Type': 'application/json'})
//                 .end(JSON.stringify(character))

//     })
//     .catch(error => {
//         return res
//                 .writeHead(500, {'Content-Type': 'text/plain'})
//                 .end(error.message)
//     })
// }


// module.exports = {
//     getCharById
// };