function carregarVendas() {
    fetch('http://localhost:3000/vendas') // Substitua pela sua rota de API
        .then(response => response.json())
        .then(vendas => {
            const tabela = document.querySelector('table tbody');
            tabela.innerHTML = '';

            vendas.forEach(venda => {
                tabela.innerHTML += `
            <tr>
                <td>${venda.ID_Venda}</td>
                <td>${venda.ID_Cliente}</td>
                <td>${venda.ID_Carro}</td>
                <td>${venda.ID_Usuario}</td>
                <td>${venda.DataVenda}</td>
                <td>${venda.ValorVenda}</td>
                <td>
                    <button class="editar" onclick="editarVenda(${venda.ID_Venda})">Editar</button>
                    <button class="excluir" onclick="excluirVenda(${venda.ID_Venda})">Excluir</button>
                </td>
            </tr>
        `;
            });
        })
        .catch(error => console.error('Erro ao carregar vendas:', error));
}

function editarVenda(id) {
    window.location.href = `cadastro_venda.html?id=${id}`;
}

// Função para excluir um cliente
async function excluirVenda(id) {
    try {
        const response = await fetch(`http://localhost:3000/vendas/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Venda excluído com sucesso');
            carregarVendas(); // Recarrega a lista após a exclusão
        } else {
            const errorMessage = await response.text();
            throw new Error(`Erro ao excluir venda: ${errorMessage}`);
        }
    } catch (error) {
        console.error(error);
        alert('Erro ao excluir venda. Consulte o console para obter mais informações.');
    }
}

// Chame a função para carregar clientes ao carregar a página
carregarVendas();
