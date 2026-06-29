import { ScrollReveal, fadeUpVariant } from './ScrollReveal.jsx';

const education = [
  {
    title: 'Bachelor of Computer Applications',
    institution: 'Kanpur Institute of Technology',
    board: 'Chhatrapati Shahu Ji Maharaj University, Kanpur',
    score: 'CGPA 7.70',
    details: 'Completed a professional undergraduate program focused on computer applications, programming fundamentals, and software development best practices.',
  },
  {
    title: 'Intermediate',
    institution: 'M.M.M Intermediate College, Bhatpar Rani (Deoria)',
    board: 'UP Board',
    score: 'Aggregate 72.20%',
    details: 'Studied core science and mathematics subjects while developing discipline, analytical skills, and exam readiness.',
  },
  {
    title: 'Matriculation',
    institution: 'D.C High School Done, Siwan',
    board: 'Bihar Board',
    score: 'Aggregate 53.40%',
    details: 'Completed secondary education with a strong foundation in science and general studies.',
  },
];

function Education() {
  return (
    <section className="education-section section" id="education">
      <ScrollReveal className="section-title" variants={fadeUpVariant}>
        <h2>Education</h2>
        <span>Academic achievements and learning milestones</span>
      </ScrollReveal>

      <div className="education-grid">
        {education.map((item) => (
          <div key={item.title} className="education-card">
            <div className="education-card-header">
              <span className="education-level">{item.title}</span>
              <span className="education-score">{item.score}</span>
            </div>
            <h3>{item.institution}</h3>
            <p>{item.details}</p>
            <div className="education-meta">
              <span>{item.board}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
