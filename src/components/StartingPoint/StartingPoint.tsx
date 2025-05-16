import { Link } from "react-router-dom"
import {  Button, Container } from "./styles"
import { ChevronRight } from "lucide-react"

export default function StartingPoint() {
  return (
    <>
        <Container>
            <img src="/images/PerfectCandidate.svg" alt="" />
            <Link to={'/TransformationWelcome'}>
                <Button><ChevronRight /></Button>
            </Link>
        </Container>

    </>
  )
}