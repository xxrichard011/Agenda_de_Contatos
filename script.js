const form = document.getElementById('form-contato');
const tabela = document.getElementById('tabela-contatos').querySelector('tbody');
const mensagemErro = document.getElementById('mensagem-erro');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    const nomeValido = /^[A-Za-zÀ-ÿ\s]{2,50}$/.test(nome);
    const telefoneValido = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(telefone);

    mensagemErro.textContent = '';

    if (!nomeValido) {
     mensagemErro.textContent = 'O nome deve conter apenas letras e ter entre 2 e 50 caracteres.';
     return;
    }

    if (!telefoneValido) {
     mensagemErro.textContent = 'O telefone deve estar no formato válido, como (11) 91234-5678.';
     return;
    }

    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;
    tabela.appendChild(novaLinha);

    form.reset();
    mensagemErro.textContent = '';
});