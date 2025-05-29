import GlobalStyle from "../createGlobalStyle";
import Hero from "./containers/Hero/index";
import Header from "./containers/Header/Index";
import Project from "./containers/Projects/Index";
import About from "./containers/About/Index";
import Contact from "./containers/Contact/Index";



function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Project />
      <Contact />



    </>
  );
}

export default App;
