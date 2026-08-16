import "./Portfolio.css";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p className="section-eyebrow">PORTOFOLIO</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <Link
              to={`/portfolio/${project.id}`}
              className="project-card"
              key={project.id}
            >
              <div className="project-media">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-media-placeholder">
                    <span className="project-media-icon">{project.icon}</span>
                  </div>
                )}
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag.label}>
                      {tag.icon}
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;