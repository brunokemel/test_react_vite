import { Container, Image, Sobre } from "./style";
import { useEffect, useState } from "react";

const About = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>("https://via.placeholder.com/200");

  useEffect(() => {
      fetch("https://api.github.com/users/brunokemel")
        .then((res) => res.json())
        .then((data) => {
          setAvatarUrl(data.avatar_url);
        });
    }, []);

  return (
    <Container>
        <>
      <Image
        src={avatarUrl}
        alt="Avatar do usuário"
        onError={(e) => {
          e.currentTarget.src = "https://via.placeholder.com/200";
        }}
      />
    </>
      <Sobre>
        <>
      <h1>Sobre mim</h1>
      <p>
        Olá, meu nome é <strong>Bruno</strong>, sou um desenvolvedor web
        front-end apaixonado por criar experiências digitais incríveis. Tenho
        experiência em HTML, CSS e JavaScript, e estou sempre em busca de
        aprender novas tecnologias e aprimorar minhas habilidades.
      </p>
      <p>
        Além disso, tenho interesse em design de interfaces e usabilidade,
        buscando sempre criar layouts intuitivos e agradáveis para os usuários.
      </p>
      <p>
        Estou animado para contribuir com projetos desafiadores e colaborar com
        equipes talentosas. Vamos construir algo incrível juntos!
      </p>
    </>
      </Sobre>
    </Container>
  );
}
export default About;
