//Criando o decorator

export function logarTempoDeExecucao(emSegundos:boolean = false) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){

        //value é o método no qual o decorator está sendo declarado @logarTempoDeExecucao
        const metodoOriginal = descriptor.value;

        //sobrescrever o metodo original com essa funcao
        //...args, permite receber 0 a infinito parametros 
        descriptor.value = function(...args: any[]){
            let unidade = 'ms';
            let divisor = 1;
            if(emSegundos){
                unidade = 's';
                divisor = 1000;
            }

            console.log('----------------------------');
            console.log(`Parametros passados para o metodo ${propertyKey}: ${JSON.stringify(args)}`);
            //calcular o tempo de execucao
            const t1 = performance.now();
            
            //metodo original faz um apply(chamar o metodo original no contexto de this ) recebendo o retorno do metodo.
            const retorno = metodoOriginal.apply(this, args);
            console.log(`O retorno do metodo ${propertyKey} é ${JSON.stringify(retorno)}`);
            
            const t2 = performance.now();
            console.log(`O metodo ${propertyKey} demorou ${t2-t1/divisor} ${unidade}`);
            return retorno;
        }
        return descriptor;

    }
}