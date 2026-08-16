import "./ProjectDetail.css";
import { useParams, Link, Navigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { projects } from "../data/projects";
import Navbar from "../components/Navbar/Navbar";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const hasGallery = project.gallery && project.gallery.length > 0;

  return (
    <>
      <Navbar />

      <section className="project-detail">
        <div className="project-detail-container">
          <Link to="/#portfolio" className="back-link">
            <FaArrowLeft />
            Kembali ke Portofolio
          </Link>

          <div className="project-detail-card">
            <div className="project-detail-media">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="project-detail-media-placeholder">
                  <span className="project-detail-media-icon">
                    {project.icon}
                  </span>
                </div>
              )}
            </div>

            <div className="project-detail-body">
              <h1 className="project-detail-title">{project.title}</h1>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag.label}>
                    {tag.icon}
                    {tag.label}
                  </span>
                ))}
              </div>

              <p className="project-detail-description">
                {project.fullDescription || project.description}
              </p>
            </div>
          </div>

          {/* ===== GALERI BUKTI FITUR ===== */}
          {hasGallery && (
            <div className="project-gallery">
              <h2 className="project-gallery-title">Bukti Fitur</h2>

              <div className="project-gallery-grid">
                {project.gallery.map((item, index) => (
                  <figure className="gallery-item" key={index}>
                    <div className="gallery-item-media">
                      <img src={item.image} alt={item.caption || project.title} />
                    </div>
                    {item.caption && (
                      <figcaption className="gallery-item-caption">
                        {item.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;