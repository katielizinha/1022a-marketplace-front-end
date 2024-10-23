import { useEffect, useState } from 'react'
import './App.css'

// Definindo o tipo para produtos
type ProdutoType = {
    id: number,
    nome: string,
    preco: string,
    descricao: string,
    imagem: string
}

// Definindo o tipo para usuários
type UsuarioType = {
  id: number,
  nome: string,
  email: string,
  created_at: string,
  updated_at: string
}

function App() {
  // Estado para armazenar a lista de produtos
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  // Estado para armazenar a lista de usuários
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])

  // useEffect para buscar produtos do backend ao carregar o componente
  useEffect(() => {
    // Fazendo uma requisição para a API para obter os produtos
    fetch("https://one022a-marketplace-czsd.onrender.com/produtos")
      .then(resposta => resposta.json()) // Convertendo a resposta para JSON
      .then(dados => setProdutos(dados)) // Atualizando o estado com os dados recebidos
  }, []) // Array vazio significa que o efeito roda apenas uma vez, na montagem do componente

  // useEffect para buscar usuários do backend ao carregar o componente
  useEffect(() => {
    // Fazendo uma requisição para a API para obter os usuários
    fetch("https://one022a-marketplace-czsd.onrender.com/usuarios")
      .then(resposta => resposta.json()) // Convertendo a resposta para JSON
      .then(dados => setUsuarios(dados)) // Atualizando o estado com os dados recebidos
  }, []) // Array vazio significa que o efeito roda apenas uma vez, na montagem do componente

  return (
    <>
      {/* Container principal que agrupa todos os itens */}
      <div className="itens-container">
        
        {/* Seção de Produtos */}
        <div className="Produtos">
          <h1>Produtos</h1>
          <div className="produtos-container">
            {
              // Mapeando a lista de produtos para renderizar cada item
              produtos.map(produto => {
                return (
                  <div key={produto.id} className="produto-item">
                    <h1>{produto.nome}</h1>
                    <div className="container-imagem">
                      {/* Exibindo a imagem do produto */}
                      <img src={produto.imagem} alt="Imagem do celular" />
                    </div>
                    <p>{produto.preco}</p>
                    <p>{produto.descricao}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
  
        {/* Seção de Usuários */}
        <div className="Usuarios">
          <h1>Usuários</h1>
          <div className="usuarios-container">
            {
              // Mapeando a lista de usuários para renderizar cada item
              usuarios.map(usuario => {
                return (
                  <div key={usuario.id} className='usuario-item'>
                    <h1>{usuario.nome}</h1>
                    {/* Exibindo o email do usuário */}
                    <p><strong>Email:</strong> {usuario.email}</p>
                    {/* Formatando e exibindo a data de criação */}
                    <p><strong>Data de Criação:</strong> {new Date(usuario.created_at).toLocaleString()}</p>
                    {/* Formatando e exibindo a última atualização */}
                    <p><strong>Última Atualização:</strong> {new Date(usuario.updated_at).toLocaleString()}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}  

export default App