import AxiosInstance from "../shared/utils/AxiosInstance";

const getProdutos = async ()=>{
    const response = await AxiosInstance.get("/produtos")
    return response.data
}

const postaProduto = async (produto) => {

      const response = await AxiosInstance.post("/produtos",produto);
      return response.data;
}

const getProduto = async (id)=>{
    const response = await AxiosInstance.get("/produtos",+id)
    return response.data.id
}

const atualizaProduto = async (produto,id)=>{
    const response = await AxiosInstance.put("/produtos"+id,produto)
    return response.data.id
}

export default {
    getProdutos, postaProduto, getProduto, atualizaProduto
}

