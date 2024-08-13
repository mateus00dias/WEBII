async function realizarLogin() {
    const nomeUsuario = document.getElementById('NomeUsuario').value;
    const senha = document.getElementById('Senha').value;

    try {
        const response = await fetch('http://localhost:3001/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ NomeUsuario: nomeUsuario, Senha: senha }),
        });

        if (response.ok) {
            const data = await response.json();
            alert('Login bem-sucedido: ' + data.message);
            window.location.href = '/Front/index.html';
        } else {
            const errorMessage = await response.text();
            throw new Error(`Erro ao realizar o login: ${errorMessage}`);
        }
    } catch (error) {
        console.error(error);
        alert('Erro ao realizar o login. Consulte o console para obter mais informações.');
    }
}