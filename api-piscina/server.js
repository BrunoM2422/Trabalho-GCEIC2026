const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


const BASE_ROUTE = '/PISCINA';

app.post(`${BASE_ROUTE}/calcular`, (req, res) => {
    const { largura, comprimento, profundidade, precoAgua, precoEletrico, precoHidraulico, precoManutencao } = req.body;

    const volume = largura * comprimento * profundidade;

    const custoAgua = volume * precoAgua;

    const custoMateriais = parseFloat(precoEletrico) + parseFloat(precoHidraulico);

    const custoTotalManutencao = volume * precoManutencao;

    res.json({
        volume: volume.toFixed(2),
        custoAgua: custoAgua.toFixed(2),
        custoMateriais: custoMateriais.toFixed(2),
        custoManutencao: custoTotalManutencao.toFixed(2),
        totalObra: (custoAgua + custoMateriais).toFixed(2)
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor da API rodando em http://localhost:${PORT}`);
});