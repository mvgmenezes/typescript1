class Negociacoes {

    //private _negociacoes: Array<Negociacao> = []; 
    private _negociacoes: Negociacao[] = []; //outra forma de declarar o array de negociacao

    adiciona(negociacao:Negociacao){
        this._negociacoes.push(negociacao);
    }

    paraArray(){

        return this._negociacoes;
    }
}