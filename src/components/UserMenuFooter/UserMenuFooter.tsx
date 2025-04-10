import { Home, BriefcaseBusiness,Rocket, Mail,  Bell } from "lucide-react";
import { NavContainer, NavButton} from "./styles";

export default function UserMenuFooter() {

return (

    <NavContainer>
            <NavButton >
                <Home size={36}></Home>
            </NavButton>
            <NavButton >
                <BriefcaseBusiness size={36}  ></BriefcaseBusiness>

            </NavButton> 
            <NavButton>
                <Rocket size={36}></Rocket>

            </NavButton>

            <NavButton >
                <Mail size={36}></Mail>

            </NavButton>
            <NavButton >
                <Bell size={36}></Bell>

            </NavButton>
 
  </NavContainer>
);
}