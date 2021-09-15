const { Router } = require('express');
const uuid = require('uuid');

const router = Router();

const banco = [];

router.get('/', (req, res) => {
    res.render('../views/home')
})

router.get('/listarCliente', (req, res) => {
    try {

        res.status(200).json(banco)

    } catch (error) {
        res.status(500).send('ocorreu um erro')
    }
})


router.post('/salvarCliente', (req, res) => {

    try {
        const { nome } = req.body;
        const id = uuid.v4();
        banco.push({
            id: id,
            nome: nome,
        })
        return res.status(200).json({
            id: id,
            nome: nome,
        })
    } catch (error) {
        res.status(500).send('ocorreu um erro')
    }
})


module.exports = router;