export class Negociacao{

    //private _data: Date;
    //private _quantidade: number;
    //private _valor: number;

    //AScript 2006 tem que ter um constructor
    constructor(private _data: Date, private _quantidade: number, private _valor: number) {

        //ao usar o this._ indica por convencao do js que essas variavies nao podem ser alteradas fora do método da 
        //propria classe. 
        //this._data = data;
        //this._quantidade = quantidade;
        //this._valor = valor;
    }

    get data() {

        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }

}