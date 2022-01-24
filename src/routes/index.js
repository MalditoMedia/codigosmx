const {Router} = require('express')
const router = Router();
//Routes
router.get('/test', (req, res)=>{
    res.send({'Colonia':'Cuadrante de san Francisco'});

});

module.exports = router;