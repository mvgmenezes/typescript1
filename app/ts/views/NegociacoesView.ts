//views agora é um namespace

//colocando essa classe dentro do namespace Views tambem conforme na classe pai
namespace Views {

    import ViewGeral = Views.View
    export class NegociacoesView extends ViewGeral<Negociacoes>{

        template(model:Negociacoes) :string{
    
            return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
    
                    <tbody>
    
                        ${model.paraArray().map(negociacao => 
                            `
                                <tr>
                                    <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                    <td>${negociacao.volume}</td>
                                </tr>    
                            `
                        ).join('')}
                        
                    </tbody>
    
                    <tfoot>
                    </tfoot>
                </table>              
            `;
        }
    
    }

}
