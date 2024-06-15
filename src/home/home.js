import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ProdutoService from '../services/ProdutoService'

function Home(props) {
  const [produtos,setprodutos] = React.useState([])
  const navigate = useNavigate(); 

  React.useEffect(() => { 
  
    ProdutoService.getProdutos().then(res=>setprodutos(res))
   
  }, [ ])
  
  return (
    <div>Home
      <Container>

        <Button onClick={()=>navigate("/adiciona")}>Criar produto</Button>

        <Row>
        {produtos && produtos.map((produto, i)=>
        <Card>
        <Card.Img variant="top" src={produto.imagem} />
        <Card.Body>
          <Card.Title>{produto.nome}</Card.Title>
          <Card.Text>
            {produto.preco}
          </Card.Text>
        </Card.Body>
        <Button>Editar</Button>
      <Button variant='danger'>Excluir</Button>
      </Card>
        )}
        </Row>
      </Container>
    </div>

  )
}

Home.propTypes = {}

export default Home
