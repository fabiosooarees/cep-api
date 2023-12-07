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
          console.log(res.body)
            chai.assert.isNull(err)
            chai.assert.isNotEmpty(res.body)
            // res.should.have.status(201);
            // res.body.should.have.property('error').equal(0);
            // res.body.payload.comments.should.have.property('_id');
            // res.body.payload.comments.should.have.property('nome').equal(USUARIO_VALIDO.nome);
            done()
        })
    })

  })
})