class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        //carregando a tabela de negociacoes 
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        //para nao recarregar a pagina ao clicar no botao submit
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), //troca todas as posicoes (/-/g) de -, pois vem no formato 2011-12-01 e coloco como 2011,12,01 pois o new Date entende esse padrao.
        parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        //limpando o array encapsulado.
        this._negociacoes.paraArray().length = 0;
        //fazenod um for each
        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
        });
        console.log(negociacao);
        console.log(negociacao.quantidade + 20);
        this._negociacoesView.update(this._negociacoes);
    }
}
