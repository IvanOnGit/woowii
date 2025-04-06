import { Link } from "react-router-dom";
import { ButtonNextPageForMobile, 
    ContainerFormRegisterCompanyProfileMobile, 
    DivContainerLogoProfilePageForMobile, 
    FormRegisterCompanyProfileMobile, 
    LogoProfilePageForMobile, 
    ParagraphBelowTitleForMobile, 
    TitleAndSetDataForMobile, 
    TitleFormForMobile } from "./styles";

export default function RegisterCompanyProfileFormMobile() {
  return (
    <ContainerFormRegisterCompanyProfileMobile>
        <DivContainerLogoProfilePageForMobile>
            <LogoProfilePageForMobile src="/images/LogoBlue.svg" />
        </DivContainerLogoProfilePageForMobile>
    <TitleAndSetDataForMobile>
        <TitleFormForMobile>Registra tus Datos:</TitleFormForMobile>
        <ParagraphBelowTitleForMobile>Establece los datos principales para tu empresa.</ParagraphBelowTitleForMobile>
    </TitleAndSetDataForMobile>
    <FormRegisterCompanyProfileMobile>
        <div className="inputsForm">
            <label htmlFor="name">Nombre de Empresa:</label>
            <input type="text" name="name" id="name" placeholder="Nombre de Empresa " />
        </div>
        <div className="inputsForm">
            <label htmlFor="rol">Rol del Admistrador/a:</label>
            <input type="text" name="rol" id="rol" placeholder="Tu rol dentro de la empresa" />
        </div>
        <div className="inputsForm">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" name="email" id="email" placeholder="Email de empresa" />
        </div>
        <div className="inputsForm">
            <label htmlFor="subs">Subscripción al boletín:</label>
            <div className="btnChoose" id="subs">
                <button>SI</button>
                <button>NO</button>
            </div>
        </div>
        <div className="inputsForm">
            <label htmlFor="employ">Cantidad de empleados:</label>
            <select name="employ" id="employ">
                <option value="value1" selected>0 to 10 employees</option>
                <option value="value2">10 to 50 employees</option>
                <option value="value3">50 to 500 employees</option>
                <option value="value4">500 to 1000 employees</option>
                <option value="value5">1000 to 5000 employees</option>
                <option value="value6">5000 to 10000 employees</option>
                <option value="value6">more than 10000 employees</option>
            </select>
        </div>
        <div className="inputsForm">
            <label htmlFor="address">Dirección de las oficinas:</label>
            <input type="text" name="address" id="address" placeholder="Escribe la dirección de la empresa" />
        </div>
        <div className="inputsForm">
            <label htmlFor="industry">Dirección de las oficinas:</label>
            <select name="industry" id="industry">
                <option value="value1" selected>Computing</option>
                <option value="value2">Health</option>
                <option value="value3">Investments</option>
                <option value="value4">Automotive</option>
                <option value="value5">Pharmaceutical</option>
                <option value="value6">Human resources</option>
                <option value="value6">Real State</option>
            </select>
        </div>
        <div className="inputsForm">
            <label htmlFor="web">Sitio web:</label>
            <input type="text" name="web" id="web" placeholder="Copia tu link aquí" />
        </div>
    </FormRegisterCompanyProfileMobile>
    <Link to={"/CompanyHome"}>
            <div className="inputsForm">
                <label htmlFor=""></label>
                <ButtonNextPageForMobile>
                    Continuar
                </ButtonNextPageForMobile>
            </div>
     </Link>
   </ContainerFormRegisterCompanyProfileMobile>
  )
}



