export function domInject(seletor: string){


    return function(target: any, key: string){

        let elemento: JQuery;

        const getter = function(){
            //verifica se ja foi buscado no DOM o elemento, caso negativo busca no DOM o valor
            if (!elemento){
                console.log(`Buscando ${seletor} para injetar em ${key}`);
                elemento = $(seletor);
            }

            return elemento;
        }

        //recupera o valor da propriedade passando no get a funcao criada.
        Object.defineProperty(target, key, {
            get: getter
        });
    }

}