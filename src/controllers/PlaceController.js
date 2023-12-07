const db = require('../database/connection')

class PlaceController {

    async getByCEP(req, res){
        try{
            const { cep } = req.params
            if(!cep)
                throw new Error('CEP informado é inválido')

            const sanitizedCep = cep.replace(/[^0-9]/g,'')
            if(!sanitizedCep)
                throw new Error('CEP informado é inválido')

            const place = await db('places').select('*').where({cep: sanitizedCep})
            res.status(200).json({place})
        }catch(error){
            res.status(500).json({error: error.message})
        }
        
    }
}

module.exports = new PlaceController()