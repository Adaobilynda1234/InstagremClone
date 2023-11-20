import Nav from "./components/Nav";
import Bio from "./components/Bio";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Bio />
      </div>
      <Gallery />
    </div>
  );
}

export default App;
