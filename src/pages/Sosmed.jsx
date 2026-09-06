import "./Sosmed.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaDiscord, FaWhatsapp, FaArrowLeft } from "react-icons/fa";

function Sosmed() {
  return (
    <section className="sosmed-page">
      <Link to="/" className="back-link">
        <FaArrowLeft /> Kembali ke Beranda
      </Link>

      <div className="sosmed-profile">
        <span className="section-tag">CONNECT WITH ME</span>
        <h1>
          Algi<span>.</span>
        </h1>
        <p>Mahasiswa S1 Informatika | Web Developer | Penulis</p>
      </div>

      <div className="sosmed-links">
        <a
          className="sosmed-card instagram"
          href="https://www.instagram.com/zfalgiz_?igsh=MTJ0aGNkcWRicWR2MQ=="
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
          <div>
            <h3>Instagram</h3>
            <p>@zfalgiz_</p>
          </div>
        </a>

        <a
          className="sosmed-card discord"
          href="https://discord.gg/TWhrZHwpX"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord />
          <div>
            <h3>Discord</h3>
            <p>Join server saya</p>
          </div>
        </a>

        <a
          className="sosmed-card whatsapp"
          href="https://wa.me/6281252340475"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
          <div>
            <h3>WhatsApp</h3>
            <p>Chat langsung</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Sosmed;