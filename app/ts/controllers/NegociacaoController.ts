
import { NegociacoesView } from './../views/NegociacoesView';
import { MensagemView } from './../views/MensagemView';
import { Negociacoes } from './../models/Negociacoes';
import { Negociacao } from './../models/Negociacao';


export class NegociacaoController{

    //private _inputData: HTMLInputElement;
    //private _inputQuantidade: HTMLInputElement;
    //private _inputValor: HTMLInputElement;
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();

    private _negociacoesView = new NegociacoesView('#negociacoesView');

    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){

        //this._inputData = <HTMLInputElement> document.querySelector('#data');
        this._inputData = $('#data');
        //this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
        this._inputQuantidade = $('#quantidade');
        //this._inputValor = <HTMLInputElement> document.querySelector('#valor');
        this._inputValor = $('#valor');

        //carregando a tabela de negociacoes 
        this._negociacoesView.update(this._negociacoes);
    }


    adiciona(event: Event){


        //para nao recarregar a pagina ao clicar no botao submit
        event.preventDefault();

        /*
        //trocando por jquery
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g,',')), //troca todas as posicoes (/-/g) de -, pois vem no formato 2011-12-01 e coloco como 2011,12,01 pois o new Date entende esse padrao.
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );*/
        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g,',')), //troca todas as posicoes (/-/g) de -, pois vem no formato 2011-12-01 e coloco como 2011,12,01 pois o new Date entende esse padrao.
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        //limpando o array encapsulado.
        this._negociacoes.paraArray().length = 0;

        //fazenod um for each
        this._negociacoes.paraArray().forEach(negociacao => {

            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);

        })
        console.log(negociacao);
        console.log(negociacao.quantidade + 20);

        this._negociacoesView.update(this._negociacoes);

        this._mensagemView.update("Negociação incluída com sucesso.");
        
        
    }
}