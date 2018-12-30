const controller = new NegociacaoController();
//trocando para jquery
$('.form').submit(controller.adiciona.bind(controller));
/*
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
*/ 
