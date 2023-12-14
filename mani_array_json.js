var pizzaria = require('./pizzaria');

const getClientes = () => {

    let clientes = pizzaria.clientes.elementos
    return clientes

}

const getComentarios = () => {

    let comentarios = pizzaria.comentarioUsu.data
    return comentarios

}

const mostrarProdutos = () => {
    let produtos = pizzaria.produtos.elementos 
    let produtosArray = []

    produtos.forEach((produtos) => {

        let produtosInformacoes = {
            titulo: produtos.titulo,
descricao: produtos.descricao,
preco: produtos.preco
        }

        produtosArray.push(produtosInformacoes)

    })

    let produtosJSON = { produtosArray }
    return produtosJSON
}

// console.log(mostrarProdutos())

// console.log(getComentarios())

// console.log(getClientes())




module.exports = {

    getClientes,
    getComentarios,
    mostrarProdutos,
    
  }

  