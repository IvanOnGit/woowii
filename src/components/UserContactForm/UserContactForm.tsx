import { useState } from "react";
import {
  Container,
  FormWrapper,
  Form,
  Input,
  TextArea,
  Button,
  ModalOverlay,
  ModalContent
} from "./styles";

export default function UserContactForm() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://api.woowiihr.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setModal({ message: data.message || "Mensaje enviado correctamente 📩", type: "success" });
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setModal({ message: data.error || "Error al enviar el mensaje ❌", type: "error" });
      }
    } catch (err) {
        if (err instanceof Error) {
          setModal({ message: `Error del servidor: ${err.message}`, type: "error" });
        } else {
          // handle other types of errors
        }
      }
       finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <FormWrapper>
          <h1>Contacto</h1>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <Input
              type="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <TextArea
              name="mensaje"
              rows={5}
              placeholder="Escribe tu mensaje..."
              value={formData.mensaje}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </Form>
        </FormWrapper>
      </Container>

      {modal && (
        <ModalOverlay onClick={() => setModal(null)}>
          <ModalContent type={modal.type}>
            <p>{modal.message}</p>
            <button onClick={() => setModal(null)}>Cerrar</button>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}