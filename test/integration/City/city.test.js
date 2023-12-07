const { validCity, unvalidCity } = require('./city.json')

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.should();

describe('CityController', () => {
  describe('POST /city/create', () => {

    it('Should return success when created new city', done => {
      
      chai.request('http://localhost:4000')
        .post('/city/create')
        .send(validCity)
        .end((err, res) => {
            chai.assert.isNull(err)
            chai.assert.isNotEmpty(res.body)
            res.should.have.status(201)
            res.body.should.have.property('id')
            res.body.should.have.property('description').equal(validCity.description);
            done()
        })
    })

    it('Should return error when try create new city', done => {
      
      chai.request('http://localhost:4000')
        .post('/city/create')
        .send(unvalidCity)
        .end((err, res) => {
          console.log(res)
            chai.assert.isNotEmpty(res.body.error)
            res.should.have.status(500)
            done()
        })
    })

  })
})