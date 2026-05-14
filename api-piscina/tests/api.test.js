const request = require('supertest');
const express = require('express');
const volumeRoutes = require('../routes/volume');

const app = express();
app.use(express.json());
app.use('/PISCINA/volume', volumeRoutes);

describe('Testes Unitários - API Piscina', () => {
  it('Deve calcular o volume corretamente (3x5x1.4 = 21)', async () => {
    const res = await request(app)
      .post('/PISCINA/volume/calcular')
      .send({
        largura: 3,
        comprimento: 5,
        profundidade: 1.4
      });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body.volume).toBe("21.00");
  });
});