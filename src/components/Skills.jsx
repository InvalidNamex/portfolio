import './Skills.css';

function Skills() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: ['Dart', 'Python']
        },
        {
            title: 'Frameworks & Technologies',
            skills: ['Flutter', 'Django REST Framework', 'FastAPI']
        },
        {
            title: 'State Management',
            skills: ['GetX', 'Bloc']
        },
        {
            title: 'Cloud / Backend Services',
            skills: ['Firebase Services', 'Supabase']
        },
        {
            title: 'Databases',
            skills: ['SQLite', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase Database', 'Supabase Database']
        },
        {
            title: 'DevOps & CI/CD',
            skills: ['Git', 'GitHub', 'Docker', 'Codemagic', 'Shorebird', 'CI/CD Pipelines', 'Hosting & Deployments']
        },
        {
            title: 'Tools',
            skills: ['VS Code', 'Android Studio', 'Postman', 'Figma', 'Photoshop']
        },
        {
            title: 'Other Strengths',
            skills: ['Testing & Optimization', 'App Architecture', 'API Security', 'Full App Lifecycle Management']
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
