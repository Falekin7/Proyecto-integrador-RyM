const { getCharById } = require('../controllers/getCharById');
const { login } = require('../controllers/login');
const { postFav, deleteFav} = require('../controllers/handleFavorites');


const router = require('express').Router() // Route me permite crear rutas en un archivo separado.Rutas:

router.get('/character/:id', (req, res) => {
     getCharById(req, res) // ejecuto el controlador pasandole req y res.
});

router.get('/login', (req, res) => {
    login(req, res)
});

router.post('/fav', (req, res) => {
    postFav(req, res)
});

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res)
});

module.exports = router;


