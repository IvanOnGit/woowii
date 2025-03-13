import { Button, Container, Input, LoginForm } from "./styles";

export default function UserLogin() {
    return (
        <>
        <Container>
            <LoginForm>
                <h2>Login</h2>
                <Input type="email" placeholder="Email" required />
                <Input type="password" placeholder="Password" required />
                <Button type="submit">Sign In</Button>
            </LoginForm>
        </Container>
        </>
  );
}