import { Container, TextareaInput } from './styles.js';

export function TextArea({ label, title, value, ...rest }) {
  return (
    <Container>
      <label htmlFor={label}>
        {title}
      </label>
      <TextareaInput id={label} {...rest}>
        {value}
      </TextareaInput>
    </Container>
  )
}