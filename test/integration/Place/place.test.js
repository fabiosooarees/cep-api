const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
chai.should()

describe('PlaceController', () => {
    describe('GET /place/:cep', () => {
        it('Should return success when search for cep', done => {
      
            chai.request('http://localhost:4000')
              .get('/place/cep=96206400')
              .end((err, res) => {
                  chai.assert.isNull(err)
                  chai.assert.isNotEmpty(res.body)
                  res.should.have.status(200)
                  res.body.should.have.property('place')
                  res.body.place[0].should.have.property('id').equal(1005153);
                  res.body.place[0].should.have.property('description').equal('Alameda Jandyr Garcia');
                  done()
              })
        })

        it('Should return error when search for invalid cep', done => {
      
            chai.request('http://localhost:4000')
              .get('/place/cep=fsdgfs')
              .end((err, res) => {
                chai.assert.isNotEmpty(res.body.error)
                res.should.have.status(500)
                res.body.should.have.property('error').equal('CEP informado é inválido');
                done()
              })
        })

        it('Should return error when search for empty cep', done => {
      
            chai.request('http://localhost:4000')
              .get('/place/cep=')
              .end((err, res) => {
                chai.assert.isNotEmpty(res.body.error)
                res.should.have.status(500)
                res.body.should.have.property('error').equal('CEP informado é inválido');
                done()
              })
        })
    })
})