import {content} from "./scripts";

import {
  ProjectsContainer,
  CardContainer,
  LayoutRow,
  ProjectItem,
  TitleMedium,
  Paragraph,
  Button
} from "./style";

const ProjectsContainerComponent = () => {

  return (
    <ProjectsContainer>
      <CardContainer>
        <LayoutRow>
    {content.map((item) => (
      <ProjectItem key={item.id}>
        {item.img && (
      <img src={item.img} alt={item.title} style={{ width: "100%" }} />
      )}
        <TitleMedium>{item.title}</TitleMedium>
        <Paragraph>
          <Button>
            {item.text}
          {item.link && (
            <>
              <a href={item.link} target="_blank" rel="noopener noreferrer">carsD</a>
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
