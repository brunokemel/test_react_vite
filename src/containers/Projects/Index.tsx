import {content} from "./scripts";
import { Button } from "../../../createGlobalStyle";

import {
  ProjectsContainer,
  CardContainer,
  LayoutRow,
  ProjectItem,
  TitleMedium,
  Paragraph,
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
          <Button href={item.link} >
            {item.text}
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
