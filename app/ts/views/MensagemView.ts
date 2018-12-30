//como estou usando o export da classe View preciso declarar aqui 
import {View} from './View';

export class MensagemView extends View<string>{


    template(model:string) : string{

        return `<p class="alert alert-info">${model}</p>`;

    }

}


