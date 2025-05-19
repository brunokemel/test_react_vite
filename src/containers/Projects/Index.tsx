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
} from "./style";

function ProjectsContainerComponent() {

  return (
    <ProjectsContainer>
      <CardContainer>
        <LayoutRow>
    {content.map((item) => (
      <ProjectItem key={item.id}>
        <Icon src="images/1008958.png" alt={`Ícone ${item.id}`} />
        <TitleSmall>({item.id})</TitleSmall>
        <TitleMedium>{item.title}</TitleMedium>
        <Paragraph>{item.text}</Paragraph>
      </ProjectItem>
    ))}
  </LayoutRow>
      </CardContainer>
    </ProjectsContainer>
  );
}

export default ProjectsContainerComponent;












// import { CardContainer, ProjectItem,ProjectsContainer } from "./style";
// function Project() {
//   return (
//       <ProjectsContainer>
//         <CardContainer>
//           <ProjectItem>
//             <h2>Project 1</h2>
//             <p>This is a description of project 1. It is a great project that does many things.</p>
//           </ProjectItem>
//           <ProjectItem>
//             <h2>Project 2</h2>
//             <p>This is a description of project 2. It is another great project that does even more things.</p>
//           </ProjectItem>
//           <ProjectItem>
//             <h2>Project 3</h2>
//             <p>This is a description of project 3. It is the best project that does everything!</p>
//           </ProjectItem>
//         </CardContainer>
//       </ProjectsContainer>
//   );
// }

// export default Project;
