import { ButtonImageMatch, FondoMatch, MatchImage } from "./styles";


export default function MatchPage() {
  return (
    <FondoMatch>
        <MatchImage src="/images/imageMatch.svg" alt="Image Match" />
        <ButtonImageMatch src="/images/buttonMatch.svg" alt="Button Match" />
    </FondoMatch>
  )
}
