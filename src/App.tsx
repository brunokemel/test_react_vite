import GlobalStyle from "../createGlobalStyle";
import Hero from "./containers/Hero/index";
import Header from "./containers/Header/Index";
import Project from "./containers/Projects/Index";


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Project />


    </>
  );
}

export default App;
