import { Container, FormWrapper, Form, Input, TextArea, Button } from "./styles";

export default function UserContactForm() {
  return (
    <Container>
      <FormWrapper>
        <h1>Contacto</h1>
        <Form>
          <Input type="text" placeholder="Tu nombre" />
          <Input type="email" placeholder="Tu email" />
          <TextArea rows={5} placeholder="En qué podemos mejorar?" />
          <Button type="submit">Enviar</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
}