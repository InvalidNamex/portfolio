import './About.css';

function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <p className="about-text">
                        I'm Ahmed Hassan, a passionate mobile full stack developer from Port Said, Egypt.
                        I build end-to-end systems — mobile apps, backend APIs, databases, hosting, CI/CD
                        pipelines, and deployment workflows. I enjoy solving complex problems and turning
                        ideas into complete products that users can rely on.
                    </p>
                    <p className="about-text">
                        I've worked on systems for clinics, hotels, retail stores, water companies,
                        distribution companies, and multi-vendor e-commerce platforms. With every project,
                        I aim for clean architecture, high performance, and smooth user experience.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
