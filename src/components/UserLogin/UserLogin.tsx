import { useNavigate } from "react-router-dom";
import { Button, ButtonsContainer, Container, Input, LoginForm } from "./styles";

export default function UserLogin() {
    const navigate = useNavigate();

    return (
        <>
        <Container>
            <LoginForm>
                <h2>Login</h2>
                <Input type="email" placeholder="Email" required />
                    <Input type="password" placeholder="Password" required />
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="submit" onClick={() => navigate(-1)}>Go Back</Button>
                </ButtonsContainer>
            </LoginForm>
        </Container>
        </>
  );
}