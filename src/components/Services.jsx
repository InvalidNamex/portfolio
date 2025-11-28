import './Services.css';

function Services() {
    const services = [
        {
            icon: '📱',
            title: 'Mobile App Development',
            description: 'Flutter apps for Android & iOS with clean architecture and production-level quality.'
        },
        {
            icon: '⚙️',
            title: 'Backend Development',
            description: 'API design and development using Django REST Framework and FastAPI.'
        },
        {
            icon: '🏗️',
            title: 'Full Stack App Architecture',
            description: 'End-to-end system design including data models, caching, business logic, and integration.'
        },
        {
            icon: '🗄️',
            title: 'Database Design & Optimization',
            description: 'PostgreSQL, MySQL, MongoDB, SQLite, Supabase — optimized for performance.'
        },
        {
            icon: '🚀',
            title: 'DevOps & CI/CD Setup',
            description: 'GitHub Actions, Docker, Codemagic, Shorebird, hosting pipelines, deployments.'
        },
        {
            icon: '☁️',
            title: 'Hosting & Deployment',
            description: 'Deploying apps, APIs, dashboards, load balancing, SSL, server setup.'
        },
        {
            icon: '⚡',
            title: 'App Optimization',
            description: 'Performance tuning, state management improvements, reducing load times, caching.'
        },
        {
            icon: '🧪',
            title: 'Testing',
            description: 'Manual and automated testing for backend and Flutter applications.'
        }
    ];

    return (
        <section id="services" className="section services">
            <div className="container">
                <h2 className="section-title">Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
