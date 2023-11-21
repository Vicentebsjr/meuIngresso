
function comprar() {
    let ingressoEscolhido = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let idQuantIngresso = `qtd-${ingressoEscolhido}`;
    let quantidadeTipoIngresso = parseInt(document.getElementById(idQuantIngresso).textContent);
    
    if (quantidade > quantidadeTipoIngresso) {
        alert(`Quantidade indisponível para tipo ${ingressoEscolhido}`);
    } else {
        quantidadeTipoIngresso -= quantidade ;
        document.getElementById(idQuantIngresso).textContent = quantidadeTipoIngresso.toString();
        alert('Compra realizada com sucesso!');
 quantidade = 0;
        }}

