class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        //para nao recarregar a pagina ao clicar no botao submit
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), //troca todas as posicoes (/-/g) de -, pois vem no formato 2011-12-01 e coloco como 2011,12,01 pois o new Date entende esse padrao.
        parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        console.log(negociacao);
        console.log(negociacao.quantidade + 20);
    }
}
