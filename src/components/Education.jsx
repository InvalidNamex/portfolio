import './Education.css';

function Education() {
    return (
        <section id="education" className="section education">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-content">
                    <div className="education-card">
                        <div className="education-icon">🎓</div>
                        <h3 className="education-degree">Bachelor's Degree</h3>
                        <div className="education-institution">Port Said University</div>
                        <div className="education-details">College of Commerce, Port Said</div>
                        <div className="education-period">2012 – 2016</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
