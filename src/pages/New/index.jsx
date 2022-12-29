
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { api } from '../../services/api';

import { Container, Form, InputWrapper } from './styles';

import { Header } from '../../components/Header';
import { ButtonBack } from '../../components/ButtonBack';
import { Input } from '../../components/Input';
import { IngredientItem } from '../../components/IngredientItem';
import { SelectIngredient } from '../../components/SelectIngredient';
import { TextArea } from '../../components/TextArea';
import { Footer } from '../../components/Footer';

import { FiUpload } from 'react-icons/fi';

export function New() {
  const [imageFile, setImageFile] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleAddIngredient() {
    if(newIngredient){
      setIngredients(prevState => [...prevState, newIngredient])
      setNewIngredient("");
    }
  };

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleNewProduct(e) {
    e.preventDefault();

    if (!imageFile) {
      return alert("Adicione uma imagem para o prato")
    }

    if (!title) {
      return alert("Adicione um titulo para o prato")
    }

    if (!description) {
      return alert("Adicione uma descrição para o prato")
    }

    if (!category) {
      return alert("Adicione um categoria para o prato")
    }

    if (!price) {
      return alert("Adicione um preço para o prato")
    }

    if (newIngredient) {
      return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar.")
    }

    if (ingredients.length < 1) {
      return alert("Adicione pelo menos um ingrediente")
    }
    setLoading(true);

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map(ingredient => (
      formData.append("ingredients", ingredient)
    ))

    await api.post("/products", formData, { headers: {'Content-Type': 'multipart/form-data'}})
    .then(() => {
      alert("Prato cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message); 
        navigate("/")

        setLoading(false);
      }
      else {
        alert("Não foi possível cadastrar!");
      }
    });
    setLoading(false);
  }

  return (
    <Container>
      <Header />
      <main>
        <ButtonBack/>
        <Form onSubmit={handleNewProduct}>
          <legend>Cadastrar prato</legend>
          <InputWrapper>
            <div className="files">
              <p>Imagem do Prato</p>
              <label id="file" htmlFor="image">
                <FiUpload size={24}/> 
                {!imageFile ? "Selecione imagem" : imageFile.name } 
              </label>
              <input 
                id="image"  
                filename={imageFile} 
                type="file"
                onChange={e => setImageFile(e.target.files[0])}
                accept="image/*"></input>
            </div>
            <Input
              type="text" 
              label="name" 
              title="Nome" 
              placeholder="Exemplo: Salada Ceasar"
              onChange={e => setTitle(e.target.value)}
              required
            />
            <div className='dropdown'>
              <label>Categoria</label>
              <select defaultValue={'DEFAULT'} name="category" onChange={e => setCategory(e.target.value)}>
               <option value="DEFAULT" disabled>Selecionar</option>
                <option value= "Pratos principais">Pratos principais</option>
                <option value= "Sobremesas">Sobremesas</option>
                <option value= "Bebidas">Bebidas</option>
              </select>
            </div>
          </InputWrapper>
          
          <InputWrapper>
            <div className="wrapper"> 
              <p>Ingredientes</p>
               <div className="tags">
                <SelectIngredient 
                  placeholder="Adicionar"
                  onChange={e => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredient}
                />
                 {
                    ingredients.map((ingredient, index) => (
                      <IngredientItem 
                        key={String(index)} 
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)} 
                      />
                    ))
                  }
              </div>
            </div>
           
            <div className="price"> 
              <Input
                type="text"
                label="price" 
                title="Preço" 
                placeholder="R$ 00,00"
                required
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </InputWrapper>
          
          <TextArea 
            label="Description" 
            title="Descrição" 
            defaultValue={description}
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={e => setDescription(e.target.value)}
          />
          <button
            type="submit"
          >
            {loading ? "Adicionando pedido" : "Adicionar pedido"}
          </button>
        </Form>
      </main>
      <Footer/>
    </Container>
  );
}
