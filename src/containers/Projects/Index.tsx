import { ProjectsContainer, ProjectItem } from "./style";
import { Card } from "../Projects/Cards/Index";
import {
  CardContainer,
  Separator

} from "./style";
import Tilt from "react-parallax-tilt";

function Project() {
  return (
    <ProjectsContainer>
      <ProjectItem>
        <div>
      <h1>Card component</h1>
      <h2>props: title, date, and img</h2>
      <CardContainer>
        <Card title={"hello world"} date={1} imgUrl={"https://via.placeholder.com/300x200"} />
        <Separator />
        <Card title={"My Card"} date={2} imgUrl={"https://via.placeholder.com/300x200"} />
      </CardContainer>
    </div>
      </ProjectItem>
    </ProjectsContainer>
  );
}

export default Project;
