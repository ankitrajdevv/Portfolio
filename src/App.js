import "./App.css";
import NavBar from "./components/Navbar";
import ParticlesComponent from "./components/particles";
import animationData from "./components/animation.json";
import Lottie from "lottie-react"; // Correct import for Lottie
import Type from "./components/Type"; // Make sure Type is exported properly

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles" />
      <NavBar />
      <div id="allsection">
        <div id="home" className="section home">
          {/* Container for subsections 1 and 2 */}
          <div className="subsection-container">
            {/* Section 1: Text Header */}
            <div id="subsection1" className="subsection home-header">
              <div className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </div>
              <div className="heading-name">
                I'M
                <strong className="main-name"> ANKIT RAJ</strong>
              </div>
              <div className="typewriter-container">
                <Type />
              </div>
            </div>

            {/* Section 2: Lottie Animation */}
            <div className="subsection home-image">
              <Lottie
                animationData={animationData}
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                loop={true}
              />
            </div>
          </div>

          {/* New subsection for the Download CV button */}
          <div id="subsection3" className="subsection download-section">
            {/* Download CV Button */}
            <a
              href="Ankit_raj_Resume.pdf" // Replace with the actual path to your resume
              download
              className="download-button"
            >
              Download CV
            </a>
          </div>
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
