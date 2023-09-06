 import Navbar from "./component/Nav/Navbar";
 import bootstarp from "bootstrap/dist/css/bootstrap.min.css";
 import "bootstrap/js/dist/collapse"
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Experience from "./component/Experience/Experience";
import Project from "./component/project/Project";

function App() {
  return (
    <>
       <Home />
       <About />
       <Experience />
       <Project />
    </>
  );
}

export default App;
