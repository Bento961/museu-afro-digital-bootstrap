$(document).ready(function () {
    // Inicialização do carrossel com intervalo de 3.5 segundos
    $('.carousel').carousel({
        interval: 3500
    });

    // Validação interativa do formulário de contato
    $('#formContato').on('submit', function (e) {
        e.preventDefault();

        var nome = $('#nome').val().trim();
        var email = $('#email').val().trim();
        var assunto = $('#assunto').val();
        var mensagem = $('#mensagem').val().trim();

        if (!nome || !email || !assunto || !mensagem) {
            alert('Por favor, preencha todos os campos do formulário.');
            return;
        }

        alert('Obrigado, ' + nome + '! Sua colaboração foi enviada com sucesso para a curadoria do museu.');
        this.reset();
    });
});