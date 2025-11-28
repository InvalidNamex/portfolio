import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">Contact</h2>
                <div className="contact-content">
                    <p className="contact-intro">
                        Let's work together! Feel free to reach out for collaborations or just a friendly chat.
                    </p>
                    <div className="contact-grid">
                        <a href="mailto:ahmed_91@zohomail.com" className="contact-card">
                            <div className="contact-icon">📧</div>
                            <div className="contact-label">Email</div>
                            <div className="contact-value">ahmed_91@zohomail.com</div>
                        </a>
                        <a href="tel:+201111058359" className="contact-card">
                            <div className="contact-icon">📱</div>
                            <div className="contact-label">Phone</div>
                            <div className="contact-value">+20 111 105 8359</div>
                        </a>
                        <div className="contact-card">
                            <div className="contact-icon">📍</div>
                            <div className="contact-label">Location</div>
                            <div className="contact-value">Port Said, Egypt</div>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="https://linkedin.com/in/invalidnamex" target="_blank" rel="noopener noreferrer" className="social-link">
                            LinkedIn
                        </a>
                        <span className="social-separator">•</span>
                        <a href="https://github.io/invalidnamex" target="_blank" rel="noopener noreferrer" className="social-link">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
