const usuarios = {
    elementos: [
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
        }
    ]
};

const categoriasPizzaria = {
    elementos: [
        {
            id: 1,
            nome: "Pizza Salgadas",
            imagem: ""
        },
        {
            id: 2,
            nome: "Pizza Doce",
            imagem: ""
        },
        {
            id: 3,
            nome: "Pizzas Especiais",
            imagem: ""
        },
        {
            id: 4,
            nome: "Sobremesas",
            imagem: ""
        },
        {
            id: 5,
            nome: "Bebidas",
            imagem: ""
        }
    ]
};

const produtosPizzaria = {
    elementos: [
        {
            id: 1,
            nome: "Quatro Queijos",
            imagem: "",
            descricaoDoProduto: "mussarela, gorgonzola, parmesão e catupiry",
            valor: "R$42,00",
            categoria: [
                {
                    id: 1,
                    nome: "Pizzas Salgadas"
                },
                {
                    id: 3,
                    nome: "Pizzas Especiais"
                }
            ],
            comentarios: [
                {
                    id: 1,
                    titulo: "Sabor marcante!",
                    comentario: "A combinação de queijos é perfeita, um dos melhores sabores!",
                    usuario: [
                        {
                            nome: usuarios.elementos[3].nome,
                            foto: usuarios.elementos[3].foto
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            nome: "Vegetariana",
            imagem: "",
            descricaoDoProduto: "mussarela, tomate, pimentão, cebola e azeitonas",
            valor: "R$42,90",
            categoria: [
                {
                    id: 3,
                    nome: "Pizzas Salgadas"
                },
            ],
            comentarios: [
                {
                    id: 2,
                    titulo: "Adorei!",
                    comentario: "Primeira vez que havia experimentado, irei comprar mais vezes!",
                    usuario: [
                        {
                            nome: usuarios.elementos[2].nome,
                            foto: usuarios.elementos[2].foto
                        }
                    ]
                },
                {
                    id: 3,
                    titulo: "Bem equilibrada!",
                    comentario: "A quantidade de ingredientes é perfeita, destaque para os legumes frescos!",
                    usuario: [
                        {
                            nome: usuarios.elementos[1].nome,
                            foto: usuarios.elementos[1].foto
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            nome: "Margherita",
            imagem: "",
            descricaoDoProduto: "mussarela, rodelas de tomate e manjericão",
            valor: "R$29,90",
            categoria: [
                {
                    id: 1,
                    nome: "Pizzas Salgadas"
                }
            ],
            comentarios: [
                {
                    id: 4,
                    titulo: "Deliciosa!",
                    comentario: "Tradicional mas muito saborosa!",
                    usuario: [
                        {
                            nome: usuarios.elementos[4].nome,
                            foto: usuarios.elementos[4].foto
                        }
                    ]
                },
                {
                    id: 5,
                    titulo: "Amo essa pizza!",
                    comentario: "A simplicidade dos ingredientes destaca o sabor autêntico da Margherita.",
                    usuario: [
                        {
                            nome: usuarios.elementos[5].nome,
                            foto: usuarios.elementos[5].foto
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            nome: "Portuguesa",
            imagem: "",
            descricaoDoProduto: "mussarela, presunto, ovos, cebola e azeitonas",
            valor: "R$29,90",
            categoria: [
                {
                    id: 1,
                    nome: "Pizzas Salgadas"
                }
            ],
            comentarios: [
                {
                    id: 6,
                    titulo: "Portuguesa é a melhor!",
                    comentario: "Ingredientes frescos e bem distribuídos. Uma das minhas favoritas!",
                    usuario: [
                        {
                            nome: usuarios.elementos[4].nome,
                            foto: usuarios.elementos[4].foto
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            nome: "Pepperoni",
            imagem: "",
            descricaoDoProduto: "mussarela e pepperoni",
            valor: "R$29,90",
            categoria: [
                {
                    id: 1,
                    nome: "Pizzas Salgadas"
                }
            ],
            comentarios: [
                {
                    id: 7,
                    titulo: "Intenso e delicioso!",
                    comentario: "O sabor apimentado do pepperoni é incrível, uma explosão na boca!",
                    usuario: [
                        {
                            nome: usuarios.elementos[3].nome,
                            foto: usuarios.elementos[3].foto
                        }
                    ]
                }
            ]
        },
        {
            id: 7,
            nome: "Banana com Chocolate",
            imagem: "",
            descricaoDoProduto: "banana e chocolate",
            valor: "R$42,90",
            categoria: [
                {
                    id: 2,
                    nome: "Pizzas Doces"
                },
                {
                    id: 3,
                    nome: "Pizzas Especiais"
                }
            ],
            comentarios: [
               
                {
                    id: 8,
                    titulo: "Perfeita combinação!",
                    comentario: "Banana e chocolate se complementam perfeitamente, uma sobremesa divina!",
                    usuario: [
                        {
                            nome: usuarios.elementos[2].nome,
                            foto: usuarios.elementos[2].foto
                        }
                    ]
                }
            ]
        },
        {
            id: 8,
            nome: "Ricota com Frutas Vermelhas",
            imagem: "",
            descricaoDoProduto: "ricota e frutas vermelhas",
            valor: "R$42,90",
            categoria: [
                {
                    id: 2,
                    nome: "Pizzas Doces"
                },
                {
                    id: 3,
                    nome: "Pizzas Especiais"
                }
            ],
            comentarios: [
            
                {
                    id: 9,
                    titulo: "Rica em sabores!",
                    comentario: "A mistura de ricota e frutas vermelhas é uma experiência única e deliciosa.",
                    usuario: [
                        {
                        nome: usuarios.elementos[1].nome,
                        foto: usuarios.elementos[1].foto
                        }
                    ]
                }
            ]
        },
        {
            id: 9,
            nome: "Maracujá",
            imagem: "",
            descricaoDoProduto: "maracujá e leite condensado",
            valor: "R$42,90",
            categoria: [
                {
                    id: 2,
                    nome: "Pizzas Doces"
                },
                {
                    id: 3,
                    nome: "Pizzas Especiais"
                }
            ],
            comentarios: [
                {
                    id: 10,
                    titulo: "Refrescante!",
                    comentario: "A acidez do maracujá contrasta maravilhosamente com o doce do leite condensado.",
                    usuario: [
                        {
                            nome: usuarios.elementos[5].nome,
                            foto: usuarios.elementos[5].foto
                        }
                    ]
                }
            ]
        },
        {
            id: 10,
            nome: "Alpino",
            imagem: "",
            descricaoDoProduto: "chocolate ao leite e chocolate branco",
            valor: "R$24,90",
            categoria: [
                {
                    id: 2,
                    nome: "Pizzas Doces"
                }
            ],
            comentarios: [
                {
                    id: 11,
                    titulo: "Chocólatra aprovada!",
                    comentario: "Para os amantes de chocolate, essa pizza é um verdadeiro paraíso!",
                    usuario: [
                        {
                            nome: usuarios.elementos[4].nome,
                            foto: usuarios.elementos[4].foto
                        }
                    ]
                }
            ]
        },
        {
            id: 11,
            nome: "Creme de Avelã com Morango",
            imagem: "",
            descricaoDoProduto: "creme de avelã e morango",
            valor: "R$24,90",
            categoria: [
                {
                    id: 2,
                    nome: "Pizzas Doces"
                }
            ],
            comentarios: [
                {
                    id: 12,
                    titulo: "Me apaixonei!",
                    comentario: "Melhor pizza que eu já comi na minha vida!",
                    usuario: [
                        {
                            nome: usuarios.elementos[3].nome,
                            foto: usuarios.elementos[3].foto
                        }
                    ]
                },
                {
                    id: 13,
                    titulo: "Doce e irresistível!",
                    comentario: "A cremosidade do creme de avelã combinada com a acidez do morango é divina.",
                    usuario: [
                        {
                        nome: usuarios.elementos[2].nome,
                        foto: usuarios.elementos[2].foto
                        }
                    ],
                }
            ]
        },
                {
                    id: 12,
                    nome: "M&M's",
                    imagem: "",
                    descricaoDoProduto: "chocolate e M&M's",
                    valor: "R$24,90",
                    categoria: [
                        {
                           id: 2,
                           nome: "Pizzas Doces"
                        }
                            ]
                        },
                            comentarios= [
                                {
                                    id: 13,
                                    titulo: "Espereva mais",
                                    comentario: "Poderia ser melhor elaborada.",
                                    usuario: [
                                        {
                                            nome: usuariosPizzaria.elementos[1].nome,
                                            foto: usuariosPizzaria.elementos[1].foto 
                                        }
                                    ]
                                }
                            ],
                            
                           
                            [
                                {
                                  id: 13,
                                  nome: "Refresco Espumante Fantástico 2L",
                                  imagem: "",
                                  valor: "R$8,99",
                                  categoria: [
                                    {
                                      id: 5,
                                      nome: "Bebidas"
                                    }
                                  ]
                                },
                                {
                                  id: 14,
                                  nome: "Elixir Revigorante Thunder 2L",
                                  imagem: "",
                                  valor: "R$9,99",
                                  categoria: [
                                    {
                                      id: 5,
                                      nome: "Bebidas"
                                    }
                                  ]
                                },
                                {
                                  id: 15,
                                  nome: "Cerveja de Luxo Starlight 600ml",
                                  imagem: "",
                                  valor: "R$10,99 un",
                                  categoria: [
                                    {
                                      id: 5,
                                      nome: "Bebidas"
                                    }
                                  ]
                                },
                                {
                                  id: 16,
                                  nome: "Refresco Delicioso Sabor Morango Bliss 2L",
                                  imagem: "",
                                  valor: "R$11,99",
                                  categoria: [
                                    {
                                      id: 5,
                                      nome: "Bebidas"
                                    }
                                  ]
                                },
                                //sobremesas//
                                [
                                    {
                                      id: 17,
                                      nome: "Cheesecake de Frutas Vermelhas",
                                      imagem: "",
                                      valor: "R$12,00",
                                      categoria: [
                                        {
                                          id: 4,
                                          nome: "Sobremesas"
                                        }
                                      ],
                                      comentarios: [
                                        {
                                          id: 14,
                                          titulo: "Delicioso!",
                                          comentario: "O cheesecake estava incrível, a combinação de frutas vermelhas deu um toque especial. Com certeza pedirei novamente.",
                                          usuario: [
                                            {
                                              nome: usuariosPizzaria.elementos[2].nome,
                                              foto: usuariosPizzaria.elementos[2].foto
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      id: 18,
                                      nome: "Torta de Chocolate",
                                      imagem: "",
                                      valor: "R$12,00",
                                      categoria: [
                                        {
                                          id: 4,
                                          nome: "Sobremesas"
                                        }
                                      ],
                                      comentarios: [
                                        {
                                          id: 15,
                                          titulo: "Simplesmente divino!",
                                          comentario: "O pudim é uma explosão de sabor! Textura perfeita, doce na medida certa. Já virei fã!",
                                          usuario: [
                                            {
                                              nome: usuarios.elementos[3].nome,
                                              foto: usuarios.elementos[3].foto
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      id: 19,
                                      nome: "Bolo de Morango com Chantilly",
                                      imagem: "",
                                      valor: "R$15,90",
                                      categoria: [
                                        {
                                          id: 4,
                                          nome: "Sobremesas"
                                        },
                                      ],
                                      comentarios: [
                                        {
                                          id: 16,
                                          titulo: "Surpreendente!",
                                          comentario: "O Petit Gateau é uma explosão de sabores. A mistura de morango com chantilly é irresistível. Vale cada centavo!",
                                          usuario: [
                                            {
                                              nome: usuarios.elementos[4].nome,
                                              foto: usuarios.elementos[4].foto
                                            }
                                          ]
                                        }
                                      ]
                                    }
                                  ]
                              ]  
                            ]
                }
