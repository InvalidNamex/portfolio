import './Hero.css';
import profileImage from '../../assets/images/person.png';

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-image-wrapper">
                        <div className="hero-image-glow"></div>
                        <img src={profileImage} alt="Ahmed Hassan" className="hero-image" />
                    </div>
                    <div className="hero-text">
                        <h1 className="hero-title">
                            AHMED HASSAN
                        </h1>
                        <p className="hero-subtitle gradient-text">Mobile Full Stack Developer</p>
                        <p className="hero-description">
                            I'm a Mobile Full Stack Developer with strong expertise in building scalable,
                            high-performance mobile applications and backend systems. I specialize in Flutter,
                            Python, and Django REST Framework, and I'm experienced in architecting complete
                            solutions — from the database and APIs to the mobile interface and deployment.
                        </p>
                        <p className="hero-description">
                            A fast learner with an all-rounded skill set, I deliver optimized, maintainable,
                            and production-ready apps for real-world businesses.
                        </p>
                        <div className="hero-buttons">
                            <a href="#contact" className="btn btn-primary">Get In Touch</a>
                            <a href="#projects" className="btn btn-secondary">View Projects</a>
                            <a href="https://flowcv.com/resume/6l24lg369i55" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
