//para importar os types do jquery usar: npm install @types/jquery@2.0.42 --save-dev
//essa classe nao faz sentido ser criada diretamente pois o metodo template é necessario para a utilizacao
//e somente quem herda pode implementar, por essa razao essa classe é abstract
class View {
    constructor(seletor) {
        //trocando por jquery, pois existem browser do android que não trabalha com as mesmas info do DOM
        //this._elemento = document.querySelector(seletor);
        this._elemento = $(seletor);
    }
    update(model) {
        //this._elemento.innerHTML = this.template(model);
        this._elemento.html(this.template(model));
    }
}
