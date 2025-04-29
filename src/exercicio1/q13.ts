//q13
function filtrarProdutosDisponiveis(produto:Array<{nome: string, emEstoque: boolean}>){
    if(produto.filter((i) => i.emEstoque == true)){
        console.log("Produtos disponíveis: ");
        produto.filter((i) => i.emEstoque == true).forEach((i) => {
            console.log(i.nome);
        });
    }
}

const produtos = [
    {nome: "p1", emEstoque: true},
    {nome: "p2", emEstoque: false},
    {nome: "p3", emEstoque: true},
    {nome: "p4", emEstoque: false},
]

filtrarProdutosDisponiveis(produtos);