export class Negociacao{

    //private _data: Date;
    //private _quantidade: number;
    //private _valor: number;

    //AScript 2006 tem que ter um constructor
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {

    }

    get volume(){
        return this.quantidade * this.valor;
    }

}