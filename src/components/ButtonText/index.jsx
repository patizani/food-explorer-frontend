import  { Container } from './styles';

export function ButtonText({ icon: Icon, title, isActive = false, image, label, ...rest }) {
  return (
    <Container
      type="button"
      isActive={isActive}
      {...rest}
    >
      {title}
      {Icon && <Icon size={20} />}
      {image ? <img src={image} alt={label}/> : ''}
    </Container>
    
  );
}