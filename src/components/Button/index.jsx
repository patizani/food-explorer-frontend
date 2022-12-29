import { Container } from './styles';

export function Button({ image, label, title, loading, ...rest }) {
  return(
    <Container 
      type="button"
      disabled={loading}
      {...rest }
    > 
      {image ? <img src={image} alt={label}/> : ''}
      {title} 
    </Container>  
  );
}