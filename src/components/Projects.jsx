import './Projects.css';

function Projects() {
    const projects = [
        {
            title: 'EHR System',
            description: 'A full Electronic Health Records system designed for a clinic to handle patient data, appointments, lab requests, and medical workflows.',
            tech: 'MERN stack, Flutter (mobile), Node.js/Express, MongoDB'
        },
        {
            title: 'EzyManage App',
            description: 'A cross-platform mobile app to manage hotel housekeeping. Managers assign tasks while housekeeping staff accept, start, pause, and complete them.',
            tech: 'Flutter, Django REST Framework, PostgreSQL'
        },
        {
            title: 'EzyPOS',
            description: 'A point-of-sale web app with a retro cashier UI. Supports barcode readers, touch screens, multiple points of sale, and receipt printing.',
            tech: 'Django REST Framework, Flutter Web, PostgreSQL'
        },
        {
            title: 'Water Meter Readers App',
            description: 'Built for a water company. Allows area plan creation, new meter readings, comparison with previous readings, difference calculation, and generating reports.',
            tech: 'Flutter, GetX, Django REST Framework, SQLite/PostgreSQL'
        },
        {
            title: 'Friends Express',
            description: 'A multi-vendor e-commerce system with different management teams per city. Includes delivery tracking, vendor app, and order workflows.',
            tech: 'Flutter, GetX/Bloc, Django REST Framework, PostgreSQL'
        },
        {
            title: 'Distribution Agents App & Admin Dashboard',
            description: 'Admin sets stock and visit plans for field agents. Agents make sales, returns, cash transactions, and record negative visits. Includes full dashboard.',
            tech: 'Flutter, Django REST Framework, Flutter Web dashboard, PostgreSQL'
        },
        {
            title: 'Student Management Web App',
            description: 'Manages student attendance, subscriptions, instructor payments, and reporting.',
            tech: 'Django REST Framework, Flutter Web / JavaScript, SQLite/MySQL'
        },
        {
            title: 'SleepMix',
            description: 'A mobile app to help users with insomnia through customizable white noise combinations (Rain, Fire, etc.).',
            tech: 'Flutter, GetX/Bloc'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                <span className="tech-label">Tech Stack:</span>
                                <span className="tech-value">{project.tech}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
