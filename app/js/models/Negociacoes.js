class Negociacoes {
    constructor() {
        //private _negociacoes: Array<Negociacao> = []; 
        this._negociacoes = []; //outra forma de declarar o array de negociacao
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return this._negociacoes;
    }
}
