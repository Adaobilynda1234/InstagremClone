import Nav from "./components/Nav";
import Bio from "./components/Bio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Bio />
      </div>
    </div>
  );
}

export default App;
