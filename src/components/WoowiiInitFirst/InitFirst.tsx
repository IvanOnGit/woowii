import { Link } from "react-router-dom"
import { WrapperImageInit, ButtonNext, BackInitialScreen } from "./styles"

export default function InitFirst() {
  return (
    <>
        <BackInitialScreen>
            <WrapperImageInit />
            <Link to={'/InitSecond'}>
                <ButtonNext />
            </Link>
        </BackInitialScreen>
        
    </>
  )
}
