const {Router} = require('express');
const { filter } = require('underscore');
const router = Router();
const _ = require('underscore')

const codigos = require('../sample.json');


router.get('/:code', (req, res) => {
    //res.json(req.params.code);
    const peticion = req.params.code;
    if(peticion.length === 5){
        //res.send('Bien');
        const busqueda = codigos.filter(ciudad => ciudad.d_codigo == peticion);
        console.log(busqueda);
        res.send(busqueda);
    }else{
        res.send('Mal!')
    }
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

module.exports = router;