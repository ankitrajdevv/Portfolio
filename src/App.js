import './App.css';
import NavBar from './components/Navbar';
import ParticlesComponent from './components/particles';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <NavBar />
      <div id='allsection'>
        {/* Home Section */}
        <div id="home" className="section home">
          <h1>Work in Progress !!</h1>
        </div>
        
        <div id="about" className="section about">
          <h1>About Section</h1>
        </div>
        
        <div id="skills" className="section skills">
          <h1>Skills Section</h1>
        </div>
        
        <div id="projects" className="section projects">
          <h1>Projects Section</h1>
        </div>
        
        <div id="resume" className="section resume">
          <h1>Resume Section</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
