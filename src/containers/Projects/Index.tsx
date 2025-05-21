import {content} from "./scripts";

import {
  ProjectsContainer,
  CardContainer,
  LayoutRow,
  ProjectItem,
  Icon,
  TitleSmall,
  TitleMedium,
  Paragraph,
  IframeContainer,
  Button
} from "./style";

const ProjectsContainerComponent = () => {

  return (
    <ProjectsContainer>
      <CardContainer>
        <LayoutRow>
    {content.map((item) => (
      <ProjectItem key={item.id}>
        <IframeContainer>
          <Icon src={`images/${item.id}.png`} alt={`Ícone ${item.id}`} />
          {item.link ? (
            <iframe src={item.link}></iframe>
          ) : null}
        </IframeContainer>
        <TitleSmall>({item.id})</TitleSmall>
        <TitleMedium>{item.title}</TitleMedium>
        <Paragraph>
          <Button>
            {item.text}
          {item.link && (
            <>
              <br />
              <a href={item.link} target="_blank" rel="noopener noreferrer">Acesse o projeto</a>
            </>
          )}
          </Button>
        </Paragraph>
      </ProjectItem>
    ))}
  </LayoutRow>
      </CardContainer>
    </ProjectsContainer>
  );
}

export default ProjectsContainerComponent;
