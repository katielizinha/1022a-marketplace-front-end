import { useEffect, useState } from 'react'
import './App.css'
type ProdutoType ={
  id:number,
  nome:string,
  preco:string,
  descricao:string,
  imagem:string
}

function App() {
  const [nome, setNome] = useState("")
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
//useEffects(o que fazer, quando fazer ) []=> hora do carregamento da pagina 
useEffect(()=>{
  setNome("Katiély Fernanda Góis Santos ")
  //buscar os dados do backEnd
  fetch("https://one022a-marketplace-czsd.onrender.com/produtos")
  .then(resposta=>resposta.json())
  .then(dados=>setProdutos(dados))
},[])
//Colocar em uma variavel 
  return (
    <>
    <h1>{nome}</h1>
    <div className="produtos-container">
      {
        produtos.map(produto =>{
          return(
            <div className="produto-item">
            <h1>{produto.nome}</h1>
            <p>{produto.imagem}</p>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
           </div>
          )
        })
      }
      
    </div>
    </>
  )
}

export default App
