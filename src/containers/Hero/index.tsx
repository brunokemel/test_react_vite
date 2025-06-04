import { HeroContainer, ButtonHero } from "./style";

 import Icon from  "../variaveis/icons"
import { Download, Email } from "@mui/icons-material";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero__content">
          <ButtonHero as="a" href="/cv.pdf" download aria-label="Download CV">
          <Icon icon={Download} />
          Baixar CV
        </ButtonHero>
        <ButtonHero as="a" href="br.kemel@gamail.com" aria-label="Enviar Email">
          <Icon icon={Email} />
          Email
        </ButtonHero>
      </div>
    </HeroContainer>
  );
}

export default Hero;



// {IconLinks.map(({ id, icon, link, ariaLabel }) => (
//                     <a
//                       key={id}
//                       href={link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={ariaLabel}
//                     >
//                       <Icon icon={icon} />
//                     </a>

//               ))}
