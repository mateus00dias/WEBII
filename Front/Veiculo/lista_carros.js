// Função para carregar a lista de carros
function carregarCarros() {
    fetch('http://localhost:3000/veiculos') // Substitua pela sua rota de API
        .then(response => response.json())
        .then(veiculos => {
            const tabela = document.querySelector('table tbody');
            tabela.innerHTML = '';

            veiculos.forEach(veiculo => {
                tabela.innerHTML += `
                    <tr>
                        <td>${veiculo.ID_Carro}</td>
                        <td>${veiculo.Marca}</td>
                        <td>${veiculo.Modelo}</td>
                        <td>${veiculo.Ano}</td>
                        <td>${veiculo.Preco}</td>
                        <td>
                            <button class="editar" onclick="editarCarro(${veiculo.ID_Carro})">Editar</button>
                            <button class="excluir" onclick="excluirCarro(${veiculo.ID_Carro})">Excluir</button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(error => console.error('Erro ao carregar carros:', error));
}

function editarCarro(id) {
    window.location.href = `cadastro_carro.html?id=${id}`;
}

// Função para excluir um cliente
async function excluirCarro(id) {
    try {
        const response = await fetch(`http://localhost:3000/veiculos/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Cliente excluído com sucesso');
            carregarCarros(); // Recarrega a lista após a exclusão
        } else {
            const errorMessage = await response.text();
            throw new Error(`Erro ao excluir cliente: ${errorMessage}`);
        }
    } catch (error) {
        console.error(error);
        alert('Erro ao excluir cliente. Consulte o console para obter mais informações.');
    }
}

// Chame a função para carregar clientes ao carregar a página
carregarCarros();