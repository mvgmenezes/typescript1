


import { NegociacoesView,MensagemView } from './../views/index';
import { Negociacoes,Negociacao, NegociacaoParcial } from './../models/index';

import { domInject, throttle } from './../helpers/decarators/index';
import { NegociacaoService } from './../service/index';


export class NegociacaoController{

    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();

    //paramentro true indica que deve ignorar codigo malicioso (script) dentro do template
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);

    private _mensagemView = new MensagemView('#mensagemView');

    private _service = new NegociacaoService();

    constructor(){

        // Utilizando o Lazy loading para recuperar os elementos do DOM, ao colocar no cosntrutor o resgate desses elementos do DOM, as vezes
        //com uma grande quantidade de elementos o esforço computacional pode ser desnecessario pois nem sempre todos os elementos buscados
        //serao utilizados pela a aplicacao para um determinado fim, para conseguir melhorar isso é utiliazdo o Lazy Loading, que somente busca no DOM
        //o elemento necessário para ser trabahado. Criei um Decorator @domInject para realizar essa busca.
        //this._inputData = $('#data');
        //this._inputQuantidade = $('#quantidade');
        //this._inputValor = $('#valor');

        //carregando a tabela de negociacoes 
        this._negociacoesView.update(this._negociacoes);
    }

   
    adiciona(event: Event){
        
        //para nao recarregar a pagina ao clicar no botao submit
        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g,',')); //troca todas as posicoes (/-/g) de -, pois vem no formato 2011-12-01 e coloco como 2011,12,01 pois o new Date entende esse padrao.


        //verifico se é sabado ou domigo
        if(this._isDiaUtil(data)){

            this._mensagemView.update('Somente negociações em dias uteis.');
            return;
        }

        const negociacao = new Negociacao(
            data, 
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

    private _isDiaUtil(data: Date){
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

    @throttle()
    importaDados(){

        function isOk(res: Response){
            if(res.ok) {
                return res;

            }else{
                throw new Error(res.statusText);
            }
        }

       this._service.obterNegociacoes(isOk)
        .then(negociacoes => {
            negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));
            this._negociacoesView.update(this._negociacoes); 
        });
            
    }
}

enum DiaDaSemana {

    Domingo = 0, 
    Segunda, 
    Terca, 
    Quarta,
    Quinta,
    Sexta,
    Sabado

}