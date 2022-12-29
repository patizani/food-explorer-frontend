import { api } from "../../services/api";
import  { Container } from './styles';

export function Ingredient({name, image, ...rest}){
  const imageURL = `${api.defaults.baseURL}/files/${image}`;

  return (
    <Container {...rest}>
      
      <img src={imageURL} alt=""/>
      <span>{name}</span>

    </Container>
  );
}