const db = require('../database/connection')

class CityController {

  async create(req, res){
    try{

      const {
        description,
        uf,
        cod_ibge,
        ddd
      } = req.body
      
      const id = await db('citys').insert({description, uf, cod_ibge, ddd})
      
      return res.status(201).json({
        id: id.length > 0 ? id[0] : id,
        description,
        uf,
        cod_ibge,
        ddd
      })
      
    }catch(error){
      res.status(500).json({error})
    }
  }

  getAll(req, res){
    db.select('*').table('citys').then(citys => {
      res.json(citys)
    }).catch(error => {
      console.log(error)
    })
  }

  get(req, res){
    const { id } = req.params
    db.select('*').table('citys').where({id}).then(city => {
      res.json(city)
    }).catch(error => {
      console.log(error)
    })
  }

  update(req, res){
    const { id } = req.params
    const { 
      description,
      uf,
      cod_ibge,
      ddd
    } = req.body

    db.where({id}).update({description, uf, cod_ibge, ddd}).table('citys').then(data => {
      res.json({
        msg: 'Updated'
      })
    }).catch(error => {
      console.log(error)
    })
  }

  delete(req, res){
    const { id } = req.params

    db.where({id}).del().table('citys').then(data => {
      res.json({
        msg: 'Deleted'
      })
    }).catch(error => {
      console.log(error)
    })
    
  }
}

module.exports = new CityController()