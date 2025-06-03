import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsContainer, Container, Input, LoginForm } from "./styles";

export default function CompanyLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://ec2-52-47-198-73.eu-west-3.compute.amazonaws.com:3000/api/auth/login-company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_first_email: email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.status === 200) {
        // Guarda el token y el id en localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.id);
        
        console.log('id guardado en localStorage:', data.id);
  
        // Verifica si company_username está presente
        if (data.company_username) {
          navigate("/CompanyHome");
        } else {
          navigate("/CompanyWelcome");
        }
      } else {
        setError(data.message); // Muestra el error en caso de credenciales inválidas
      }
    } catch (err) {
      setError("Error al realizar el login.");
      console.error(err);
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar mensaje de error */}
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </ButtonsContainer>
      </LoginForm>
    </Container>
  );
}