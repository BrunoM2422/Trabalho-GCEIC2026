const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Rota base conforme o PDF [cite: 29, 30]
const BASE_ROUTE = '/PISCINA';

// Rota Unificada de Cálculos (Atende aos requisitos de cálculo do tema) [cite: 6, 22]
app.post(`${BASE_ROUTE}/calcular`, (req, res) => {
    const { largura, comprimento, profundidade, precoAgua, precoEletrico, precoHidraulico, precoManutencao } = req.body;

    // 1. Cálculo de Volume 
    const volume = largura * comprimento * profundidade;

    // 2. Custo da Água 
    const custoAgua = volume * precoAgua;

    // 3. Custo de Materiais (Elétrico + Hidráulico) 
    const custoMateriais = parseFloat(precoEletrico) + parseFloat(precoHidraulico);

    // 4. Gasto Mensal de Manutenção 
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