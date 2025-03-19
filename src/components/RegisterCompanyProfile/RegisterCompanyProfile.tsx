import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerWrapper,
  DivContainerLogoTerPage,
  LogoTerceraPageStyled,
  AvatarWrapper,
  AvatarImage,
  Button,
  ThumbnailsContainer,
  Thumbnail,
  UsernameInput,
  ButtonNextTerceraPage,
  ContainerInputs,
  ContainerColumns,
  TitleAndSetData,
  TitleForm,
  ParagraphBelowTitle,
  FormRegisterCompany
} from "./styles";
import { ChevronLeft, ChevronRight, Key } from "lucide-react";

const avatars = [
  { id: 1, src: "/images/avatarCompany1.svg" },
  { id: 2, src: "/images/avatarCompany2.svg" },
  { id: 3, src: "/images/avatarCompany3.svg" },
  { id: 4, src: "/images/avatarCompany4.svg" },
  { id: 5, src: "/images/avatarCompany5.svg" },
  { id: 6, src: "/images/avatarCompany6.svg" },
  { id: 7, src: "/images/avatarCompany7.svg" },
];

export default function RegisterCompanyProfile() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  
  // Estado para todos los campos del formulario
  const [formData, setFormData] = useState({
    id: "",
    company_username: "",
    company_name: "",
    admin_role: "",
    company_second_email: "",
    subscription: "yes",
    employees_quantity: "1 to 10 employees",
    company_address: "",
    industry: "Computing",
    website: ""
  });



  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % avatars.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
  };

  // Función genérica para manejar cambios en cualquier tipo de input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubscriptionChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subscription: value
    }));
  };

  const validateForm = () => {
    
    if (!formData.company_username || formData.company_username.length < 8 || formData.company_username.length > 20) {
      setError("El usuario debe tener entre 8 y 20 caracteres.");
      console.error("Error de validación: Nombre de usuario inválido");
      return false;
    }
    
    const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!usernameRegex.test(formData.company_username)) {
      setError("El usuario debe contener letras minúsculas, mayúsculas y números.");
      console.error("Error de validación: Formato de usuario inválido");
      return false;
    }
    
    if (!formData.company_name.trim()) {
      setError("El nombre de la empresa es requerido.");
      console.error("Error de validación: Nombre de empresa vacío");
      return false;
    }
    
    if (!formData.admin_role.trim()) {
      setError("El rol del administrador es requerido.");
      console.error("Error de validación: Rol de administrador vacío");
      return false;
    }
    
    if (!formData.company_second_email.trim()) {
      setError("El correo electrónico es requerido.");
      console.error("Error de validación: Email vacío");
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.company_second_email)) {
      setError("Por favor, introduce un correo electrónico válido.");
      console.error("Error de validación: Formato de email inválido");
      return false;
    }
    
    if (!formData.company_address.trim()) {
      setError("La dirección de la empresa es requerida.");
      console.error("Error de validación: Dirección vacía");
      return false;
    }
    
    return true;
  };

  const saveCompanyProfile = async () => {
    if (!validateForm()) {
      return;
    }
  
    setSaving(true);
    setError("");
  
    try {
      const storedId = localStorage.getItem("id");
      formData.id = storedId ? storedId.toString() : ""; // Convertimos siempre a string
  
      console.log("ID recuperado de localStorage:", storedId);
      console.log("ID asignado a formData.id:", formData.id);
  
      // Limpiar el valor de employees_quantity para que no contenga el texto adicional " employees"
      let employeesQuantityValue = formData.employees_quantity;
      employeesQuantityValue = employeesQuantityValue.replace(" employees", ""); // Eliminar " employees"
  
      console.log("Datos enviados al backend:", JSON.stringify({
        id: formData.id,
        company_avatar: avatars[selectedIndex]?.src,
        company_username: formData.company_username,
        company_name: formData.company_name,
        admin_role: formData.admin_role,
        company_second_email: formData.company_second_email,
        subscription: formData.subscription,
        employees_quantity: employeesQuantityValue, // Ahora está limpio
        company_address: formData.company_address,
        industry: formData.industry,
        website: formData.website
      }, null, 2));
  
      const response = await fetch("http://localhost:3000/api/auth/update-avatar-company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: formData.id,
          company_avatar: avatars[selectedIndex]?.src,
          company_username: formData.company_username,
          company_name: formData.company_name,
          admin_role: formData.admin_role,
          company_second_email: formData.company_second_email,
          subscription: formData.subscription,
          employees_quantity: employeesQuantityValue, // Aquí también lo enviamos limpio
          company_address: formData.company_address,
          industry: formData.industry,
          website: formData.website
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("Error en la respuesta:", data);
        throw new Error(data.message || "Error al guardar la información de la empresa.");
      }

      console.log("Perfil de empresa guardado exitosamente:", data);
      setSaving(false);
      navigate("/CompanyHome");
    } catch (err) {
      console.error("Error al guardar el perfil:", err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error desconocido");
      }
      setSaving(false);
    }
  };

  return (
    <>
    <DivContainerLogoTerPage>
        <LogoTerceraPageStyled src="/images/LogoBlue.svg" />
    </DivContainerLogoTerPage>
    <ContainerColumns>
        
    <ContainerWrapper>
      
      <h2>Elige tu Avatar:</h2>

      <AvatarWrapper>
        <Button onClick={handlePrev}><ChevronLeft /></Button>
        <AvatarImage src={avatars[selectedIndex].src} alt="Selected Avatar" />
        <Button onClick={handleNext}><ChevronRight /></Button>
      </AvatarWrapper>

      <ThumbnailsContainer>
        {avatars.map((avatar, index) => (
          <Thumbnail
          key={avatar.id}
          src={avatar.src}
          alt={`Avatar ${index + 1}`}
          $isSelected={index === selectedIndex} // ✅ Usar el prefijo `$`
          onClick={() => setSelectedIndex(index)}
        />
        ))}
      </ThumbnailsContainer>
        <UsernameInput>
          <h3>Elige tu usuario:</h3>
          <input 
            type="text" 
            placeholder="Prueba tu @" 
            name="company_username"
            value={formData.company_username}
            onChange={handleChange}
          />
          <p><Key />Entre 8 y 20 caracteres.</p>
          <p><Key />Debe contener letras minúsculas, mayúsculas y números.</p>
          <p><Key />Recuerda mantener el anonimato.</p>
          <p><Key />Sugerimos elegir un alias profesional.</p>
      </UsernameInput>
      
    </ContainerWrapper>
    <ContainerInputs>
        <TitleAndSetData>
            <TitleForm>REGISTRO</TitleForm>
            <ParagraphBelowTitle>Establece los datos principales para tu empresa.</ParagraphBelowTitle>
        </TitleAndSetData>
        <FormRegisterCompany>
            <div className="inputsForm">
                <label htmlFor="company_name">Nombre de Empresa:</label>
                <input 
                  type="text" 
                  name="company_name" 
                  id="company_name" 
                  placeholder="Nombre de Empresa"
                  value={formData.company_name}
                  onChange={handleChange}
                />
            </div>
            <div className="inputsForm">
                <label htmlFor="admin_role">Rol del Admistrador/a:</label>
                <input 
                  type="text" 
                  name="admin_role" 
                  id="admin_role" 
                  placeholder="Tu rol dentro de la empresa"
                  value={formData.admin_role}
                  onChange={handleChange}
                />
            </div>
            <div className="inputsForm">
                <label htmlFor="company_second_email">Correo electrónico:</label>
                <input 
                  type="email" 
                  name="company_second_email" 
                  id="company_second_email" 
                  placeholder="Email de empresa"
                  value={formData.company_second_email}
                  onChange={handleChange}
                />
            </div>
            <div className="inputsForm">
                <label htmlFor="subscription">Subscripción al boletín:</label>
                <div className="btnChoose" id="subscription">
                    <button 
                      type="button"
                      onClick={() => handleSubscriptionChange("SI")}
                      style={{ backgroundColor: formData.subscription === "yes" ? "#2563eb" : "#f5f5f5" }}
                    >
                      SI
                    </button>
                    <button 
                      type="button"
                      onClick={() => handleSubscriptionChange("NO")}
                      style={{ backgroundColor: formData.subscription === "no" ? "#2563eb" : "#f5f5f5" }}
                    >
                      NO
                    </button>
                </div>
            </div>
            <div className="inputsForm">
                <label htmlFor="employees_quantity">Cantidad de empleados:</label>
                <select 
                  name="employees_quantity" 
                  id="employees_quantity"
                  value={formData.employees_quantity}
                  onChange={handleChange}
                >
                    <option value="1 to 10 employees">1 to 10 employees</option>
                    <option value="10 to 50 employees">10 to 50 employees</option>
                    <option value="50 to 500 employees">50 to 500 employees</option>
                    <option value="500 to 1000 employees">500 to 1000 employees</option>
                    <option value="1000 to 5000 employees">1000 to 5000 employees</option>
                    <option value="5000 to 10000 employees">5000 to 10000 employees</option>
                    <option value="more than 10000 employees">more than 10000 employees</option>
                </select>
            </div>
            <div className="inputsForm">
                <label htmlFor="company_address">Dirección de las oficinas:</label>
                <input 
                  type="text" 
                  name="company_address" 
                  id="company_address" 
                  placeholder="Escribe la dirección de la empresa"
                  value={formData.company_address}
                  onChange={handleChange}
                />
            </div>
            <div className="inputsForm">
                <label htmlFor="industry">Industria:</label>
                <select 
                  name="industry" 
                  id="industry"
                  value={formData.industry}
                  onChange={handleChange}
                >
                    <option value="Computing">Computing</option>
                    <option value="Health">Health</option>
                    <option value="Investments">Investments</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Pharmaceutical">Pharmaceutical</option>
                    <option value="Human resources">Human resources</option>
                    <option value="Real State">Real State</option>
                </select>
            </div>
            <div className="inputsForm">
                <label htmlFor="website">Sitio web:</label>
                <input 
                  type="text" 
                  name="website" 
                  id="website" 
                  placeholder="Copia tu link aquí"
                  value={formData.website}
                  onChange={handleChange}
                />
            </div>
            
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
            
            <div className="inputsForm">
                <label htmlFor=""></label>
                <ButtonNextTerceraPage type="button" onClick={saveCompanyProfile} disabled={saving}>
                    {saving ? "Guardando..." : "Continuar"}
                </ButtonNextTerceraPage>
            </div>
        </FormRegisterCompany>
    </ContainerInputs>
    </ContainerColumns>
    </>
  );
}