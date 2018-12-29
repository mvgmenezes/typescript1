class Negociacoes {
    constructor() {
        //private _negociacoes: Array<Negociacao> = []; 
        this._negociacoes = []; //outra forma de declarar o array de negociacao
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        //desse jeito retorno o array original, permitndo que o programador delete o conteudo do array
        //com isso preciso criar uma copia do array original
        //return this._negociacoes;
        return [].concat(this._negociacoes);
    }
}
