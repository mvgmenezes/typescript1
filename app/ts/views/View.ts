import {logarTempoDeExecucao} from '../helpers/decarators/index';
export abstract class View<T> {
        
    //private _elemento:Element;
    private _elemento: JQuery;

    private _escapar:boolean;

    constructor (seletor: string, escapar: boolean = false){


        this._elemento = $(seletor);
        //indica se quero escapar, controlador usado para verificar se existe alguma tag script e deve ser subsitituida, escapar = true
        this._escapar = escapar;
        
        

    }

    @logarTempoDeExecucao(true)
    update(model: T){

        let template = this.template(model);
        //substituindo todas as tags script por vazio dentro da view, para evitar codigo malicioso
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        this._elemento.html(template);
    }

    //obriga a implementacao dos filhos
    abstract template(model:T): string;
}





