const formulario = document.getElementById('cliente-form');

        formulario.addEventListener('submit', (event) => {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const cpfCnpj = document.getElementById('cpf_cnpj').value;
            const endereco = document.getElementById('endereco').value;
            const telefone = document.getElementById('telefone').value;
            const email = document.getElementById('email').value;

            const clienteData = {
                Nome: nome,
                CPF_CNPJ: cpfCnpj,
                Endereco: endereco,
                Telefone: telefone,
                Email: email,
            };

            const urlParams = new URLSearchParams(window.location.search);
            const clienteId = urlParams.get('id');

            if (clienteId) {
                // Editar cliente existente
                fetch(`http://localhost:3000/clientes/${clienteId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(clienteData),
                }) // Substitua pela sua rota de API para edição
                    .then(() => {
                        alert('Cliente atualizado com sucesso');
                    })
                    .catch(error => console.error('Erro ao atualizar cliente:', error));
            } else {
                // Criar novo cliente
                fetch('http://localhost:3000/clientes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(clienteData),
                }) // Substitua pela sua rota de API para criação
                    .then(() => {
                        alert('Cliente criado com sucesso');
                    })
                    .catch(error => console.error('Erro ao criar cliente:', error));
            }
        });