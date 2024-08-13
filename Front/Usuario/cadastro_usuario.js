const formulario = document.getElementById('usuario-form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeUsuario = document.getElementById('nomeUsuario').value;
    const senha = document.getElementById('senha').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;

    const usuarioData = {
        NomeUsuario: nomeUsuario,
        Senha: senha,
        Email: email,
        Role: role,
    };

    const urlParams = new URLSearchParams(window.location.search);
    const usuarioId = urlParams.get('id');

    if (usuarioId) {
        // Editar usuário existente
        fetch(`http://localhost:3000/usuarios/${usuarioId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuarioData),
        }) // Substitua pela sua rota de API para edição
            .then(() => {
                alert('Usuário atualizado com sucesso');
            })
            .catch(error => console.error('Erro ao atualizar usuário:', error));
    } else {
        // Criar novo usuário
        fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuarioData),
        }) // Substitua pela sua rota de API para criação
            .then(() => {
                alert('Usuário criado com sucesso');
            })
            .catch(error => console.error('Erro ao criar usuário:', error));
    }
});
