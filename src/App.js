import "./App.css";
import Greet from "./Components/Greet";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Greet />
        <Projects />
      </div>
    </>
  );
}

export default App;
