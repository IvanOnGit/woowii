import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsContainer, Container, Input, LoginForm } from "./styles";

export default function UserLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const response = await fetch("https://ec2-52-47-198-73.eu-west-3.compute.amazonaws.com:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                setError(data.message);
                return;
            }
    
            localStorage.setItem("token", data.token);
            localStorage.setItem("userId", data.userId);
    
            // Verifica si el username está presente y no está vacío
            if (data.username?.trim()) {
                navigate("/UserHome");
            } else {
                navigate("/FirstGift");
            }
        } catch (err) {
            console.error(err);
            setError("Error al conectar con el servidor");
        }
    };

    return (
        <Container>
            <LoginForm onSubmit={handleLogin}>
                <h2>Login</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={() => navigate(-1)}>Go Back</Button>
                </ButtonsContainer>
            </LoginForm>
        </Container>
    );
}