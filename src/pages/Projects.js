import grynd from '../img/grynd-app-sc.png'
import hubl from '../img/hubl-app-sc.png'
import note from '../img/notes.png'
import password from '../img/password.png'

// display projects page
const Projects = () => {
    return(
        <div className="projects">
            <h1>Projects</h1>
            <div>
                <div>
                    <img src={grynd} alt="HomePage of the grynd app" />
                    <h2>Grynd-Fitness App</h2>
                    <p>An app that was created to help track peoples workouts.</p>
                    <a href="https://github.com/jon-dev092/grynd-app">Github Repo</a>
                    <br />
                    <a href="https://jon-dev092.github.io/grynd-app/">Deployment</a>
                </div>
                <br />
                <br />
                <div>
                    <img src={hubl} alt="post page of the hubl app" />
                    <h2>HUBL</h2>
                    <p>An app to help users discover locations and landmarks in their area.</p>
                    <a href="https://github.com/MylesNichols/PROJECT-2">Github Repo</a>
                    <br />
                    <a href="https://pacific-brook-72214.herokuapp.com/">Deployment</a>
                </div>
                <br />
                <br />
                <div>
                    <img src={note} alt="page of the note taking app" />
                    <h2>Virtual Note Taking App</h2>
                    <p>This application was created to help users add and delete notes on the go</p>
                    <a href="https://github.com/MylesNichols/NoteTakerApp">Github Repo</a>
                    <br />
                    <a href="https://notes-r-us.herokuapp.com/notes">Deployment</a>
                </div>
                <br />
                <br />
                <div>
                    <img src={password} alt="screenshot of the password generator" />
                    <h2>Random Password Generator</h2>
                    <p>An application used to randomly generate a password</p>
                    <a href="https://github.com/MylesNichols/Module-3-Challenge">Github Repo</a>
                    <br />
                    <a href="https://mylesnichols.github.io/Module-3-Challenge/">Deployment</a>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
}

export default Projects;