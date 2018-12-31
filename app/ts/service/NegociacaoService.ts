
import { Negociacao, NegociacaoParcial } from './../models/index';


export class NegociacaoService {

    obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]>{

         //acessando um endereco externo
        return fetch('http://localhost:8080/dados')
         .then(res => handler(res)) //verifica se o retorno foi ok, na funcao implementada
         .then(res => res.json()) //convertendo o retorno para json
         .then((dados: NegociacaoParcial[]) => 
             dados
                 .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
         )//acessando os dados convertidos para JSON e transformando em lista
         .catch(err => console.log(err.message)); //caso tenha acontecido algum erro, na funcao isOk estou lancando um throw

    }
}

//obrigando que a funcao handler de entrada recebe um response e retorne um response, pois hoje a funcao aceita qualquer funcao, fazendo 
//com que outros tipos de funcoes possam ser passados
export interface HandlerFunction {

    (res: Response) : Response;
}