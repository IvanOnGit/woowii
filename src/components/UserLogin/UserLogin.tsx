import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, ButtonsContainer, Container, Input, LoginForm } from "./styles";

export default function UserLogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const userData = { email, password };

        try {
            const response = await fetch("https://mock-server-f7mg.onrender.com/api/auth/login", { // Reemplaza con la URL del backend real que es http://localhost:3000/api/auth/login
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                console.log("Login exitoso");

                navigate("/FirstGift");
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            console.error("Error al hacer la solicitud:", error);
            setErrorMessage("Hubo un problema con la conexión.");
        }
    };

    return (
        <Container>
            <LoginForm onSubmit={handleSubmit}>
                <h2>Login</h2>
                <Input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" onClick={() => navigate(-1)}>Go Back</Button>
                </ButtonsContainer>
            </LoginForm>
        </Container>
    );
}