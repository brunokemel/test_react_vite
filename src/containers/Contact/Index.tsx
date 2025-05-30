import {
  Container,
   Title,
    Description,
     AreaContact
 } from "./style";

 import { IconLinks } from "./scripts";

 import Icon from  "../variaveis/icons"


const Contact = () => {
  return (

    <Container>
      <AreaContact>
      <Title>Entre em Contato</Title>
      <Description>
        Link de contato
      </Description>
      {IconLinks.map(({ id, icon, link, ariaLabel }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
          >
            <Icon icon={icon} />
          </a>
    ))}
      </AreaContact>
    </Container>
    )
}

export default Contact;
