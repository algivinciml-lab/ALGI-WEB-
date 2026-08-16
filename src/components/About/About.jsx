import "./About.css";

import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaRocket,
  FaGraduationCap,
  FaMedal,
} from "react-icons/fa";

// Foto galeri personal (hobi/minat)
import buku from "../../assets/images/about/BUKU.png";
import football from "../../assets/images/about/FOOTBALL.png";
import mabar from "../../assets/images/about/MABAR.png";
import me from "../../assets/images/about/ME.png";

/*
  CARA GANTI CAPTION FOTO:
  Tinggal ubah teks "caption" di array aboutGallery di bawah ini
  sesuai konteks masing-masing foto.
*/
const aboutGallery = [
  { image: me, caption: "Ini saya, saya senang mengambil gambar dengan gaya-gaya seperti yang ada di foto, jika anda ingin melihat beberapa foto saya anda bisa mengunjungi sosial media saya yang sudah saya cantumkan di website ini" },
  { image: buku, caption: "Ketika sehabis kegiatan di luar, atau jika sedang butuh ketengan saya suka membaca buku, menurut saya membaca bisa membantu meningkatkan fokus dan menciptakan ketenangan, dan nilai plus nya saya mendapat ilmu" },
  { image: football, caption: "Salah satu hobi saya adalah sepak bola, saya dulu ketika masih duduk di sekolah dasar atau SD sampai SMP sempat bergabung ke sebuah akademi sepak bola, namun sekarang saya hanya mengikuti kegiatan rutin bermain fun football" },
  { image: mabar, caption: "Ketika ada waktu luang saya suka bermain game bersama teman-teman saya, saya cukup mahir bermain Mobile Legends, saya sempat bermain selayaknya profesional player, mengikuti tournament onlline dan menjuarai beberapa kejuaraan/liga nya" },
];

function About() {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* ================= LEFT ================= */}

        <div className="about-left">

          <span className="section-tag">
            ABOUT ME
          </span>

          <h2>
            Passionate About
            <span> Technology</span>
          </h2>

          <p className="about-desc">
            Halo! Saya <strong>Muhammad Hudzaif AL Ghifari</strong> atau anda bisa memanggil saya <strong>Algi</strong>, mahasiswa S1 Teknologi
            Informasi yang memiliki minat besar dalam pengembangan Website,
            Artificial Intelligence, serta UI/UX Design.
          </p>

          <p className="about-desc">
            Saya percaya bahwa teknologi bukan hanya tentang menulis kode,
            tetapi juga menciptakan solusi yang cepat, modern,
            dan memberikan pengalaman terbaik bagi pengguna.
          </p>

          <div className="about-highlights">

            <div className="highlight-card">

              <FaLaptopCode />

              <h4>Web Development</h4>

              <p>
                React, JavaScript,
                HTML, CSS
              </p>

            </div>

            <div className="highlight-card">

              <FaBrain />

              <h4>Artificial Intelligence</h4>

              <p>
                Discord AI Bot,
                Prompt Engineering
              </p>

            </div>

            <div className="highlight-card">

              <FaCode />

              <h4>Backend</h4>

              <p>
                Python,
                SQLite,
                API Integration
              </p>

            </div>

            <div className="highlight-card">

              <FaRocket />

              <h4>Learning</h4>

              <p>
                Selalu belajar teknologi terbaru
              </p>

            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="about-right">

          <div className="about-card">

            <h3>
              My Journey
            </h3>

            <div className="timeline">

              <div className="timeline-item">

                <div className="timeline-icon">
                  <FaGraduationCap />
                </div>

                <div>

                  <h4>Information Technology Student</h4>

                  <p>
                    Sedang menempuh pendidikan S1
                    Teknologi Informasi.
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <div className="timeline-icon">
                  <FaCode />
                </div>

                <div>

                  <h4>Web Development</h4>

                  <p>
                    Membangun website modern menggunakan
                    React dan JavaScript.
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <div className="timeline-icon">
                  <FaBrain />
                </div>

                <div>

                  <h4>Artificial Intelligence</h4>

                  <p>
                    Mengembangkan Discord Bot berbasis AI
                    menggunakan Python.
                  </p>

                </div>

              </div>

            </div>

            <div className="about-stats">

              <div>

                <h2>10+</h2>

                <p>Projects</p>

              </div>

              <div>

                <h2>3+</h2>

                <p>Website</p>

              </div>

              <div>

                <h2>100%</h2>

                <p>Learning Spirit</p>

              </div>

            </div>

            <div className="about-achievement">

              <FaMedal />

              <span>
                Focused on becoming a Professional Full Stack Developer.
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ================= GALERI FOTO PERSONAL ================= */}

      <div className="about-gallery-container">

        <span className="section-tag">
          MOMENTS
        </span>

        <h3 className="about-gallery-title">
          Sekilas Tentang Saya
        </h3>

        <div className="about-gallery-grid">

          {aboutGallery.map((item, index) => (
            <figure className="about-gallery-item" key={index}>

              <div className="about-gallery-media">
                <img src={item.image} alt={item.caption} />
              </div>

              <figcaption className="about-gallery-caption">
                {item.caption}
              </figcaption>

            </figure>
          ))}

        </div>

      </div>

    </section>
  );
}

export default About;