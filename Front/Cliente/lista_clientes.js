 // Função para carregar a lista de clientes
 function carregarClientes() {
    fetch('http://localhost:3000/clientes') // Substitua pela sua rota de API
        .then(response => response.json())
        .then(clientes => {
            const tabela = document.querySelector('table tbody');
            tabela.innerHTML = '';

            clientes.forEach(cliente => {
                tabela.innerHTML += `
            <tr>
                <td>${cliente.ID_Cliente}</td>
                <td>${cliente.Nome}</td>
                <td>${cliente.CPF_CNPJ}</td>
                <td>${cliente.Endereco}</td>
                <td>${cliente.Telefone}</td>
                <td>${cliente.Email}</td>
                <td>
                    <button class="editar" onclick="editarCliente(${cliente.ID_Cliente})">Editar</button>
                    <button class="excluir" onclick="excluirCliente(${cliente.ID_Cliente})">Excluir</button>
                </td>
            </tr>
        `;
            });
        })
        .catch(error => console.error('Erro ao carregar clientes:', error));
}

function editarCliente(id) {
    window.location.href = `cadastro_cliente.html?id=${id}`;
}

// Função para excluir um cliente
async function excluirCliente(id) {
    try {
        const response = await fetch(`http://localhost:3000/clientes/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Cliente excluído com sucesso');
            carregarClientes(); // Recarrega a lista após a exclusão
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
carregarClientes();