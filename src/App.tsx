import GlobalStyle from "../createGlobalStyle";
import Hero from "./containers/Hero/index";
import Header from "./containers/Header/Index";
import Project from "./containers/Projects/Index";
import About from "./containers/About/Index";


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Project />


    </>
  );
}

export default App;
