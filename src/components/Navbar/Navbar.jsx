import "./Navbar.css";

import { useEffect, useState } from "react";

import {
  FaInstagram,
  FaDiscord,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  // Tutup menu mobile setiap kali salah satu link diklik
  const closeMenu = () => setMenuOpen(false);

  return (

    <header className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="navbar-container">

        {/* ================= LOGO ================= */}

        <a href="#home" className="logo" onClick={closeMenu}>

          <span>Algi</span>.

        </a>

        {/* ================= MENU ================= */}

        <nav className={menuOpen ? "nav-open" : ""}>

          <ul className="nav-links">

            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>

            <li>
              <a href="#portfolio" onClick={closeMenu}>
                Portfolio
              </a>
            </li>

            <li>
              <a href="#achievement" onClick={closeMenu}>
                Achievement
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>

          </ul>

          {/* Sosial media ikut muncul di dalam dropdown mobile */}
          <div className="navbar-social navbar-social-mobile">

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

        </nav>

        {/* ================= RIGHT (desktop) ================= */}

        <div className="navbar-right">

          <div className="navbar-social">

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

          <a
            href="https://wa.me/6281252340475"
            target="_blank"
            rel="noreferrer"
            className="hire-button"
          >
            Hire Me
          </a>

          {/* ================= HAMBURGER (mobile) ================= */}

          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

    </header>

  );

}

export default Navbar;