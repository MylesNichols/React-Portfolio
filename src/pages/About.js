import ProfPic from "../img/myles-and-moon.jpg"

// Adds about section
const About = () => {
    return (
        <div className = "about">
            <h2>About Me</h2>
            <img src={ProfPic} alt= "Myles and his dog Moon" />
            <p>
                    Myles Nichols is a full-stack web developer based in centeral Illinois. I am constantly trying to learn new skills and 
                improve my abilities in all aspects of my development journey. I am an excellent team player and really enjoy being part
                of a well-oiled machine. The main reason that I became a web developer is to be apart of something that can affect peoples
                lives in a positive way. A few of my projects can be fount in the Projects tab of my portfolio.
                If you have any questions or comments concerning myself or my work, you may reach out to me in the "Contact" section.
            </p>
        </div>
    );
}

export default About;