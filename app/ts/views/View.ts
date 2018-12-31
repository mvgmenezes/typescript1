
//essa classe nao faz sentido ser criada diretamente pois o metodo template é necessario para a utilizacao
//e somente quem herda pode implementar, por essa razao essa classe é abstract
export abstract class View<T> {
        
    //private _elemento:Element;
    private _elemento: JQuery;

    private _escapar:boolean;

    constructor (seletor: string, escapar: boolean = false){


        this._elemento = $(seletor);
        //indica se quero escapar, controlador usado para verificar se existe alguma tag script e deve ser subsitituida, escapar = true
        this._escapar = escapar;
        
        

    }

    update(model: T){
        
        const t1 = performance.now();

        let template = this.template(model);
        //substituindo todas as tags script por vazio dentro da view, para evitar codigo malicioso
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        this._elemento.html(template);

        const t2 = performance.now();
        console.log(`o tempo de execucao de update é de ${t2-t1} ms`);
    }

    //obriga a implementacao dos filhos
    abstract template(model:T): string;
}





