import { NegociacaoController } from './../controllers/NegociacaoController';
//como estou usando o export da classe Negociacao preciso declarar aqui 
import {Negociacao} from './Negociacao';

export class Negociacoes {

    //private _negociacoes: Array<Negociacao> = []; 
    private _negociacoes: Negociacao[] = []; //outra forma de declarar o array de negociacao

    adiciona(negociacao:Negociacao): void { //retorna void
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[]{ //indico que o metodo retorna um array de Negociacao, essa tipagem permite os metodos que acessam a copia trabalhar com o objeto Negociacoa
        
        //desse jeito retorno o array original, permitndo que o programador delete o conteudo do array
        //com isso preciso criar uma copia do array original
        //return this._negociacoes;
        //apresenta erro na compilacao por causa do strict null para resolver basta informar o tipo de array as Negociacao[]
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}