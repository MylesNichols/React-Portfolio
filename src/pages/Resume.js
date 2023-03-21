import placeholder from '../img/pexels-markus-winkler-12199407.jpg'
import resume from '../img/Myles-Nichols.pdf'

// Resume Section
const Resume = () => {
    return (
        <div className = "resume">
            <h2>Resume</h2>
            <p>Take a look at my full resume!</p>
            <br />
            <br />
            <a href={resume} src={placeholder} alt="Myles Nichols Resume">CLICK ME!</a>
        </div>
    );
}

export default Resume;