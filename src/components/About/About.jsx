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
import buku from "../../assets/images/about/ME.png";
import football from "../../assets/images/about/BUKU.png";
import mabar from "../../assets/images/about/FOOTBALL.png";
import me from "../../assets/images/about/MENULIS.png";

/*
  CARA GANTI CAPTION FOTO:
  Tinggal ubah teks "caption" di array aboutGallery di bawah ini
  sesuai konteks masing-masing foto.
*/
const aboutGallery = [
  { image: buku, caption: "Hai saya Muhammad Hudzaif alghifari atau biasa di panggil Algi, saya memiliki minat dalam belajar tekhnologi dan ilmu-ilmu lain seperti Sains fisika, Filsafat dan Psikologi namun Informatika tetap menjadi prioritas utama saya." },
  { image: football, caption: "Membaca buku adalah salah satu hobi yang senang saya lakoni saat sedang bersantai, beberapa buku yang menarik minat saya dan sudah saya baca seperti MADILOG Tan malaka, RETORIKA Aristoteles, Why Rokok Dr.Ronald hutapea, Psikologi umum Drs. Alex Sobur dan sebagainya." },
  { image: mabar, caption: "Sepak bola juga salah satu hobi saya, salah satu olahraga yang saya pilih untuk tujuan menjaga kesehatan fisik, selain itu saya memang menggemari sepal bola sejak dari kecil karena saya tumbuh di lingkungan yang cukup menggemari sepakbola mungkin ini faktor saya menyukai sepakbola sejak dari kecil." },
  { image: me, caption: "Menulis adalah media bagi isi fikiran untuk eksis, alasan mengapa saya menampilkan forum menulis di web.site ini karna tujuan saya agar tulisan saya dapat bermanfaat sedikit atau banyaknya bagi pembaca, saya juga membuka ruang bagi audiens jika ingin berdiskusi tentang tulisan yang saya sajikan." },
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
            Halo! Saya <strong>Muhammad Hudzaif AL Ghifari</strong> atau anda bisa memanggil saya <strong>Algi</strong>, mahasiswa S1 Informatika 
            yang memiliki minat besar dalam pengembangan Website,
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

                  <h4>Ilmu Komputer & Digital Student</h4>

                  <p>
                    Sedang menempuh pendidikan S1
                    Informatika.
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