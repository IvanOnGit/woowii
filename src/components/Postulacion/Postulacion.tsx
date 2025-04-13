import { Bell, BriefcaseBusiness, House, Mail, Menu } from "lucide-react";
import { AvatarToMobile, 
    ContainerFooterToMobile, 
    ContainerFullPage, 
    ContainerImagenCompetencias, 
    ContainerImagenDatosCarrera, 
    ContainerImagenDatosCultura, 
    ContainerImagenDatosDescriptivos, 
    ContainerImagenDatosEmpresa, 
    ContainerImagenDatosEquipo, 
    ContainerImagenDatosEspecificos, 
    ContainerImagenDatosProducto, 
    ContainerImagenPostulacion,  
    ContainerImagenRelacionEquipo,  
    ContainerImagenRelacionTarea,  
    ContainerNumeroX, 
    ContainerTitlePostulation, 
    ContainerUpSearhAndItemsMobile, 
    HeaderItemsToMobile, 
    ImagenFondoPostulacion,  
    SearchUpToMobile } from "./styles";
import { Link } from "react-router-dom";


export default function Postulacion() {
  return (
    <ContainerFullPage>
        <ContainerUpSearhAndItemsMobile>
                <AvatarToMobile>
                    <img src="/images/avatarCompany1.svg" alt="Company Avatar" />
                </AvatarToMobile>
                <SearchUpToMobile>
                    <input type="text" placeholder="Búsqueda" />
                </SearchUpToMobile>
                <HeaderItemsToMobile>
                    <p><img src="/images/wiibucks.png" alt="wiibucks" />100</p>
                    <p><img src="/images/TrophyWiibucks.svg" alt="wiibucks" />00</p>
                    <Menu id="menu" fill="#000"width={20} height={20}/>
                </HeaderItemsToMobile> 
        </ContainerUpSearhAndItemsMobile>
        <ContainerTitlePostulation>
            <h2>Descripción de postulación</h2>
        </ContainerTitlePostulation>
        <ContainerImagenDatosDescriptivos>
            <a href="#numeroUno">
                <img src="/images/barra1Up.svg" alt="Barra Numero Uno" />
            </a>
        </ContainerImagenDatosDescriptivos>
        <ContainerImagenDatosEspecificos>
            <a href="#numeroDos">
                <img src="/images/barra2Up.svg" alt="Barra Numero Dos" />
            </a>
        </ContainerImagenDatosEspecificos>
        <ContainerImagenPostulacion>
            <ImagenFondoPostulacion src="/images/FondoPostulacionOk.svg" alt="Fondo postulación"/>
            <ContainerImagenDatosEmpresa>
                <a href="#numeroTres">
                    <img src="/images/barra3Up.svg" alt="Barra Numero Tres" />
                </a>
            </ContainerImagenDatosEmpresa>
            <ContainerImagenDatosProducto>
                <a href="#numeroCuatro">
                    <img src="/images/barra4Up.svg" alt="Barra Numero Cuatro" />
                </a>
            </ContainerImagenDatosProducto>
            <ContainerImagenDatosCultura>
                <a href="#numeroCinco">
                    <img src="/images/barra5Down.svg" alt="Barra Numero Cinco" />
                </a>
            </ContainerImagenDatosCultura>
            <ContainerImagenDatosEquipo>
                <a href="#numeroSeis">
                    <img src="/images/barra6Down.svg" alt="Barra Numero Seis" />
                </a>
            </ContainerImagenDatosEquipo>
            <ContainerImagenRelacionTarea>
                <a href="#numeroSiete">
                    <img src="/images/barra7Down.svg" alt="Barra Numero Siete" />
                </a>
            </ContainerImagenRelacionTarea>
            <ContainerImagenDatosCarrera>
                <a href="#numeroOcho">
                    <img src="/images/barra8Down.svg" alt="Barra Numero Ocho" />
                </a>
            </ContainerImagenDatosCarrera>
            <ContainerImagenRelacionEquipo>
                <a href="#numeroNueve">
                    <img src="/images/barra9Down.svg" alt="Barra Numero Nueve" />
                </a>
            </ContainerImagenRelacionEquipo>
            <ContainerImagenCompetencias>
                <a href="#numeroDiez">
                    <img src="/images/barra10Down.svg" alt="Barra Numero Diez" />
                </a>
            </ContainerImagenCompetencias>
        </ContainerImagenPostulacion>
        <ContainerNumeroX>
            <h2 id="numeroUno">1.- Datos descriptivos:</h2>
            <p>Específicos de la vacante. En ellos habrá la <b>información</b> de <b>quien gestiona la oferta</b>, sea por equipo própio de la empresa o externo (en este caso, por ejmplo, seremos nosotros). <b>Foto</b> en la que condense la actividad operativa de la empresa.</p>
        </ContainerNumeroX>
        <ContainerNumeroX>
            <h2 id="numeroDos">2.- Datos descriptivos especificos de la vacante:</h2>
            <p>Datos <b>OBLIGATORIOS</b> proporcionados por la empresa donde se condensrán el <b>título de la oferta, la banda salarial</b> si es <b>presencial o</b> en <b>remoto</b> y si hay alguna <b>variable(información más transaccional.)</b></p>
        </ContainerNumeroX>
        <ContainerNumeroX>
            <h2 id="numeroTres">3.- Datos descriptivos de la empresa:</h2>
            <p>Mini descripción de la empresa. Estos datos, una vez se hayan rellenadom servirán para todas las vacantes que se abran.</p>
        </ContainerNumeroX>
        <ContainerNumeroX>
            <h2 id="numeroCuatro">4.- Datos descriptivos de un producto:</h2>
            <p><b>(Opcional)</b>Se les puede dejar un espacio para que puedan explicar cual es el producto que les identifica. estos datos, una vez rellenados, servirán para todas las vacantes.</p>
        </ContainerNumeroX>
        <ContainerNumeroX>
            <h2 id="numeroCinco">5.- Datos descriptivos:</h2>
            <p>(Opcional)Se ahonda más en la empresa y se hila con la <b>cultura</b> que hay en la organización, la <b>dinámica del equipo</b> y la <b>comunicación intergrupal e intragrupal.</b> También se describirá por encima la <b>operativa del departamento</b></p>
        </ContainerNumeroX>
        <ContainerNumeroX>
            <h2 id="numeroSeis">6.- Datos del Equipo:</h2>
            <p>Se describirán tanto los compañeros con los que se va a trabajar, como los mandos a quien reportará directamente. Además dará una impresión más cercana. Con este apartado también se quiere representar la cultura del equipo y como se relacionan entre ellos. Con esto además podemos resolver las preguntas de Cultura empresarial añadiendo <b>keywords</b> asociadas a este apartado y focalizadas en el equipo con el que van a trabajar directamente los candidatos.</p>
        </ContainerNumeroX>
        <ContainerNumeroX>
            <h2 id="numeroSiete">7.- Relación con la tarea y el equipo:</h2>
            <p>Tareas generales que tendrá que hacer el candidato y <b>habilidades hard relacionadas con el toolset.</b> Aquí se realizará un emparejamiento con los <b>rasgos de personalidad</b> sacados en los test y los aspectos de personalidad que <b>busca la empresa.</b></p>
        </ContainerNumeroX>
        <ContainerNumeroX>
            <h2 id="numeroOcho">8.- Datos de carrera profesional:</h2>
            <p>Datos <b>OBLIGATORIOS</b> que deben rellenar las empresas. Esto mostrará tanto transparencia en el proceso de selección, como dará credibilidad como empleador a la empresa. Esto suple una de las partes más importantes de un candidato que se presenta a la vacante: el desarrollo profesional.</p>
        </ContainerNumeroX>
        <ContainerNumeroX>
            <h2 id="numeroNueve">9.- Relación con la tarea y el equipo:</h2>
            <p>Tareas generales que tendrá que hacer el candidato u <b>habilidades hard relacionadas con el toolset. </b> Aquí se realizará un emparejamiento con los <b>rasgos de personalidad</b> sacados en los test y los aspectos de personalidad que <b>busca la empresa.</b> </p>
        </ContainerNumeroX>
        <ContainerNumeroX>
            <h2 id="numeroDiez">10.- Competencias, habilidades y perfil del candidato:</h2>
            <p>Tendrán que poner el nivel que se requiere de la tecnología/toolset/habilidad(Si ponen alguna Softskill,se puede emparejar correctamente con las puntuaciones que extraigamos de los candidatos con el test de personalidad). Aquí entrarían el emparejamiento con medias ponderadas entre: Habilidades técnicas, experiencia y competencias blandas. Siendo las medias ponderadas para los candidatos en cuestión que queramos ofrecer nuestro servicio:</p>
            <ul><b>Perfil Junior:</b>
                <li>Habilidades técnicas: 45%</li>
                <li>Experiencia: Las historias de los candidatos</li>
                <li>Competencias Blandas: 20%</li>
                <li>Cultura y valores: 15%</li>
            </ul>
            <ul><b>Perfil Senior:</b>
                <li>Habilidades técnicas: 20%</li>
                <li>Experiencia: Las historias de los candidatos</li>
                <li>Competencias Blandas: 20%</li>
                <li>Cultura y valores: 15%</li>
            </ul>
        <ContainerFooterToMobile>
            <House className="items" fill="#FFF"  width={26} height={26}/>
            <BriefcaseBusiness className="items" fill="#FFF" width={26} height={26} />
            <Link to="/CompanyOffer">
              <img src="/images/rocketFooter.svg" alt="Rocket Footer Image" />
            </Link>
            <Mail className="items" fill="#FFF" width={26} height={26}/>
            <Bell className="items" fill="#FFF" width={26} height={26}/>
        </ContainerFooterToMobile>
        </ContainerNumeroX>
    </ContainerFullPage>
  )
}
