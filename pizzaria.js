var clientes = {
    elementos:
    [
        {
            id: 1,
            nome: "José Oliveira",
            email: "jose.oliveira@gmail.com",
            senha: "novaSenha123",
            telefone: "11111-1111",
            foto: ""
        },
        {
            id: 2,
            nome: "Natália Pereira",
            email: "natalia.pereira@gmail.com",
            senha: "outraSenha567",
            telefone: "22222-2222",
            foto: ""
        },
        {
            id: 3,
            nome: "Luana Souza",
            email: "luana.souza@gmail.com",
            senha: "senha789",
            telefone: "33333-3333",
            foto: ""
        },
        {
            id: 4,
            nome: "Paulo Santos",
            email: "paulo.santos@gmail.com",
            senha: "senhaPaulo987",
            telefone: "44444-4444",
            foto: ""
        },
        {
            id: 5,
            nome: "Pedro Pereira",
            email: "pedro.pereira@gmail.com",
            senha: "senhaPedro456",
            telefone: "55555-5555",
            foto: ""
        },
    ]
}

var categorias = [

    {id: 1, Salgados: 'Pizza Salgada', image_categoria: './img/icone-pizzaSalagada'},
    {id: 2, Doces: 'Pizza Doce', image_categoria: './img/icone-pizzaDoce'},
    {id: 3, Sobremesas: 'Doces', image_categoria: './img/icone-doce'},
    {id: 4, Bebidas: 'Bebidas', image_categoria: './img/icone-Bebida'}
]

var produtos = {
    elementos: [ 
      {
        id: '1',
        titulo: 'Pizza Toscana',
        descricao: 'Pizza com molho de tomate, calabresa toscana e queijo',
        preco: 'R$ 25,00',
        imagem: './img/P_toscana',
        categoria: categorias[1],
        Avaliacao: 5,
      },
      {
        id: '2', titulo: 'Pizza de 4 queijos',
        descricao: 'Pizza com 4 diferentes tipos de queijo',
        preco: 'R$ 25,00',
        imagem: './img/P_4queijo',
        categoria: categorias[1],
        Avaliacao: 3,
      },
      {
        id: '3',
        titulo: 'Suco Natural de Morango',
        descricao: 'Suco de Fruta batido, Natural',
        preco: 'R$ 12,00',
        imagem: './img/S_morango',
        categoria: categorias[4],
        Avaliacao: 5,
      },
      {
        id: '4',
        titulo: 'Pizza Romeu e Julieta',
        descricao: 'Exelente combinação de quiejo com goiabada',
        preco: 'R$ 35,00',
        imagem: './img/P_romeuJ',
        categoria: categorias[2],
        avaliacao: 2,
      },
      {
        id: '5',
        titulo: 'Creme de Papaia com Assis',
        imagem: './img/Doces',
        preco: 'R$ 20,00',
        descricao: 'Mamão papaya batido com sorvete de creme e licor de assis',
        categoria: categorias[3],
        avaliacao: 1,
      },
      {
        id: '6',
        titulo: 'Energético Monster',
        imagem: './img/B_monster',
        preco: 'R$ 13,00',
        descricao: 'Energético.',
        categoria: categorias[4],
        avaliacao: 5,
      },
      {
        id: '7',
        titulo: 'Pizza de doce de leite ',
        descricao: 'Pizza com massa doce e doce de leite chileno',
        preco: 'R$ 32,00',
        imagem: './img/',
        categoria: categorias[2],
        avaliacao: 5,
      },
      
    ]
}
var comentarioUsu = {
    elementos: 
    [
        {
            id: '524',
            img_client: './img/',
            nome_client: 'Natália Pereira',
            data_comemt: '31/07/2019',
            titulo_coment: 'Pizza boa e valor justo',
            avaliacao: 5,
        },
        {
            id: '897',
            img_client: './img/',
            nome_client: 'Luana breves',
            data_comemt: '19/07/20212',
            titulo_coment: 'Poderia ter um tempo menor de entrega',
            avaliacao: 2.5,
        },
        {
            id: '423',
            img_client: './img/',
            nome_client: 'Pedro Pereira',
            data_comemt: '27/01/2024',
            titulo_coment: 'Pizza tava fria, mas estava boa até',
            avaliacao: 3.5,
        },
        {
            id: '785',
            img_client: './img/',
            nome_client: 'José Oliveira',
            data_comemt: '09/09/2016',
            titulo_coment: 'Pizza demais!',
            avaliacao: 4
        },
        {
            id: '989',
            img_client: './img/',
            nome_client: 'Paulo Santos',
            data_comemt: '02/09/2022',
            titulo_coment: 'Pizza saborosa e bem recheada!',
            avaliacao: 5
        },
    ]
}

module.exports = {
  clientes,
  categorias,
  produtos,
  comentarioUsu,
}
