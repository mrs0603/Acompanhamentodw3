import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import AxiosInstance from '../shared/utils/AxiosInstance';
import ProdutoService from '../services/ProdutoService';

export default function Adicionaproduto() {
    const navigate = useNavigate();

    const submeter = async  (e) => {
    e.preventDefault()
    await ProdutoService.postaProduto(form)
    navigate("/home")
   }

   const [form, setform] = React.useState({
    id:"",nome:"",preco:"",imagem:""
   })

   const preencheForm = async (e) =>{
        const {name,value} = e.target
        setform({...form,[name]:value})
   }

    return (
    <div>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control onChange={preencheForm} name="id" value={form.id} type="text" placeholder="1234" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Nome</Form.Label>
        <Form.Control onChange={preencheForm}  name="nome" value={form.nome} type="text" placeholder="fruta" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Preço</Form.Label>
        <Form.Control onChange={preencheForm} name="preco" value={form.preco} type="number" placeholder="20" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Imagem</Form.Label>
        <Form.Control onChange={preencheForm} name="imagem" value={form.imagem} type="text" placeholder="20" />
      </Form.Group>

      <Button onClick={submeter} variant="primary" type="submit">
        Adicionar
      </Button>
    </Form>

    </div>
  )
}
