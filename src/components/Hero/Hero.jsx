import "./Hero.css";

import {
  FaInstagram,
  FaDiscord,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

import profile from "../../assets/images/Foto gw.png";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
          <div className="status-badge">
            <span className="status-dot"></span>
            Available For Internship
          </div>

          <p className="hero-greeting">PERSONAL PORTFOLIO</p>

          <h1 className="hero-title">
            Algi
            <br />
            <span>Zaif</span>
          </h1>

          <h2 className="hero-role">Mahasiswa Jurusan Ilmu Komputer & Digital — Menempuh S1 Informatika</h2>

          <p className="hero-description">
            Mahasiswa Universitas Muhammadiyah Semarang yang memiliki
            ketertarikan pada teknologi, pengembangan website, Artificial
            Intelligence, dan pengembangan sistem digital.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">
              View Projects
              <FaArrowRight />
            </a>

            <a href="#hero-social" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-facts">
            <div className="fact-item">
              <h3>UNIMUS</h3>
              <p>Universitas</p>
            </div>

            <div className="fact-item">
              <h3>Semarang</h3>
              <p>Domisili</p>
            </div>

            <div className="fact-item">
              <h3>IMO 211</h3>
              <p>Achievement</p>
            </div>
          </div>

          <div className="hero-social" id="hero-social">
            <a
              href="https://www.instagram.com/zfalgiz_?igsh=MTJ0aGNkcWRicWR2MQ=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://discord.gg/TWhrZHwpX"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="social-discord"
            >
              <FaDiscord />
            </a>

            <a
              href="https://wa.me/6281252340475"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="social-whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="photo-wrapper">
            <div className="photo-glow"></div>
            <div className="photo-border"></div>

            <div className="profile-card">
              <div className="profile-image">
                <img src={profile} alt="Algi Zaif" />
              </div>

              <div className="profile-info">
                <h3>Algi Zaif</h3>
                <p>FIKOMDIGI STUDENT</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span></span>
        Scroll Down
      </div>
    </section>
  );
}

export default Hero;