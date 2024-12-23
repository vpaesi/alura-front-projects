let totalGeral = 0;
limpar();

function adicionar() {
    // recuperar valores do nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split(' - ')[0];
    let valorUnitario = produto.split('R$')[1];
    if (valorUnitario) {
        valorUnitario = valorUnitario.replace(',', '').trim();
    } else {
        valorUnitario = 0;
    }
    let quantidade = document.getElementById('quantidade').value;
    // calcular o preço, nosso subtotal
    let preco = quantidade * parseFloat(valorUnitario);
    let carrinho = document.getElementById('lista-produtos'); 
    if (carrinho) { 
        let produtoCarrinho = document.createElement('section');
        produtoCarrinho.classList.add('carrinho__produtos__produto');
        produtoCarrinho.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)} </span>`;
        // adicionar o produto ao carrinho
        carrinho.appendChild(produtoCarrinho); 
    }
    // atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}
