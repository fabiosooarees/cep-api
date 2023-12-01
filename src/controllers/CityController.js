const db = require('../database/connection')

class CityController {

  create(req, res){

    const {
      description,
      uf,
      cod_ibge,
      ddd
    } = req.body

    db.insert({description, uf, cod_ibge, ddd}).table('citys').then(data => {
      console.log(data)
      res.json({
        msg: 'Created'
      })
    }).catch(error => {
      console.log(error)
    })

  }

  getAll(req, res){
    db.select('*').table('citys').then(citys => {
      response.json(citys)
    }).catch(error => {
      console.log(error)
    })
  }
}

module.exports = new CityController()