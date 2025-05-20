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
  IframeContainer
} from "./style";

function ProjectsContainerComponent() {

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
          {item.text}
          {item.link && (
            <>
              <br />
              <a href={item.link} target="_blank" rel="noopener noreferrer">Acesse o projeto</a>
            </>
          )}
        </Paragraph>
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
