import './Experience.css';

function Experience() {
    const experiences = [
        {
            title: 'Mobile Full Stack Developer',
            company: 'EIT – Port Said',
            period: '01/2023 – Present',
            responsibilities: [
                'Developed an Agents App for companies in the distribution sector.',
                'Built an HR Requests App for handling employee loans, vacations, and internal requests.'
            ]
        },
        {
            title: 'Junior Python Developer',
            company: 'CEC – Port Said',
            period: '07/2019 – 06/2022',
            responsibilities: [
                'Developed ERP tools to simplify client workflows.',
                'Created a Tkinter-based Cashier System.'
            ]
        }
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-period">{exp.period}</div>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <div className="timeline-company">{exp.company}</div>
                                <ul className="timeline-responsibilities">
                                    {exp.responsibilities.map((resp, respIndex) => (
                                        <li key={respIndex}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
