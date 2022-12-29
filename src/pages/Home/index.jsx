import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { useFavorite } from '../../hooks/favorite';

import { Container, Content, Slogan } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Card } from '../../components/Card';

import { Footer } from '../../components/Footer';

import sloganPhoto from '../../assets/macarons.png';

export function Home() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([])

  const isFiltered = () => products.length !== visibleProducts.length;

  const { favorites } = useFavorite();

  function handleFavorites(favorites) {
    if (favorites.length === 0) {
      return
    }
    if (isFiltered()) {
      setVisibleProducts([...products]);
    } else {
      setVisibleProducts(favorites);
    }
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products?title=${search}&ingredients=${search}`);
      setProducts(response.data);
      setVisibleProducts(response.data);
    }

    fetchProducts();
  }, [search, favorites.length === 0])

  return(
    <Container>
      <Header
        search={setSearch}
        toggleFavorites={() => handleFavorites(favorites)}
        isFiltered={isFiltered()}
      />
      <main>
        <Content>
          <Slogan>
            <img src={sloganPhoto} alt="Slogan da página principal de macarons" />
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Slogan>
           
          <div className='section'>
            {
              visibleProducts.filter(product => product.category == "Pratos principais").length > 0 &&
              <Section title="Pratos principais">
              {
                visibleProducts.filter(product => product.category == "Pratos principais").map(product => (
                  <Card
                    key={String(product.id)}
                    data={product} 
                  />
                ))
              }
              </Section>
            }
            {
              visibleProducts.filter(product => product.category == "Sobremesas").length > 0 &&
              <Section title="Sobremesas">
              {
                visibleProducts.filter(product => product.category == "Sobremesas").map(product => (
                  <Card
                    key={String(product.id)}
                    data={product} 
                  />
                ))
              }
              </Section>
            }
            {
              visibleProducts.filter(product => product.category == "Bebidas").length > 0 &&
              <Section title="Bebidas">
              {
                visibleProducts.filter(product => product.category == "Bebidas").map(product => (
                  <Card
                    key={String(product.id)}
                    data={product} 
                  />
                ))
              }
              </Section>
            }
          </div>

        </Content>
        <Footer />
      </main>
    </Container>
    
  );
}