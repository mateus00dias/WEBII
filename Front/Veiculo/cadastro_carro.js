
        const formulario = document.getElementById('carro-form');

        formulario.addEventListener('submit', (event) => {
            event.preventDefault();

            const marca = document.getElementById('marca').value;
            const modelo = document.getElementById('modelo').value;
            const ano = document.getElementById('ano').value;
            const preco = document.getElementById('preco').value;

            const carroData = {
                Marca: marca,
                Modelo: modelo,
                Ano: ano,
                Preco: preco,
            };

            const urlParams = new URLSearchParams(window.location.search);
            const carroId = urlParams.get('id');

            if (carroId) {
                // Editar cliente existente
                fetch(`http://localhost:3000/veiculos/${carroId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(carroData),
                }) // Substitua pela sua rota de API para edição
                    .then(() => {
                        alert('veiculo atualizado com sucesso');
                        window.location.href = '/lista_carros.html'; // Redireciona de volta para a lista
                    })
                    .catch(error => console.error('Erro ao atualizar veiculo:', error));
            } else {
                // Criar novo cliente
                fetch('http://localhost:3000/veiculos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(carroData),
                }) // Substitua pela sua rota de API para criação
                    .then(() => {
                        alert('Veiculo criado com sucesso');
                    })
                    .catch(error => console.error('Erro ao criar veiculo:', error));
            }
        });