import "./Tulisan.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaDiscord, FaWhatsapp, FaArrowLeft } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "BIBIT YANG HARUS DI JAGA",
    date: "6 Agustus 2026",
    content: [
      "Kemajuan sebuah bangsa ditentukan oleh kualitas SDM-nya. Cara berpikir adalah faktor besar dalam pembentukan nasib di masa mendatang. Ketika hari ini seseorang memiliki pola pikir bahwa Albert Einstein adalah seseorang yang keren karena mampu menjelaskan hukum alam semesta dengan teori relativitasnya dan merumuskan ikatan energi dan massa melalui rumusnya E=mc², maka di masa yang akan datang ia akan menemukan sebuah teori baru untuk menjelaskan hukum alam semesta.",
      "Sebaliknya, jika seseorang menganggap Firaun adalah seseorang yang keren karena mampu menciptakan kekuasaan yang besar walaupun harus berdusta, membunuh, dan menyebar kerusakan moral, maka di masa yang akan datang ia akan melakukan hal-hal yang merusak, kekerasan, dan berdusta.",
      "Di sinilah masalah terbesar negeri tercinta kita, Indonesia, di mana tidak sedikit remajanya menganggap kakak kelas yang melakukan bullying, kekerasan, bahkan tawuran dianggap keren. Maka pada saat itu, cara berpikir dan motivasinya akan berubah dari hal yang seharusnya menjadi pola pikir yang keliru dan ini lah awal kehancuran negeri ini. Ia akan menganggap atau berpikir bahwa hal-hal irasional seperti kekerasan, tawuran, dan membolos adalah suatu hal yang biasa di lakukan oleh pelajar seusianya.",
      "Coba bayangkan situasinya seperti ini: seorang siswa kelas 1 melihat kakak-kakak kelasnya mendapat penghargaan karena mampu membuat sebuah drone pemadam kebakaran, dengan sistem sensor panas yang akan mendeteksi panas, lalu otomatis air di lambung drone disemprotkan ke arah api. Drone ini mampu menjangkau titik-titik yang tidak terjangkau oleh truk pemadam kebakaran, makanya ini adalah suatu solusi yang ditemukan oleh siswa kelas 3. Siswa kelas 1 itu termotivasi karena kakak kelasnya tersebut adalah objek terjangkau di lingkungannya yang mampu ia jadikan contoh pada kategori hal keren.",
      "Ada lagi situasinya seperti ini: seorang anak berusia 10 tahun sedang berkendara berdua bersama ayahnya. Di suatu persimpangan ada lampu merah, dan ayahnya berhenti untuk mematuhi aturan lalu lintas. Namun, ada pengendara lain yang hendak menerobos lampu merah, dan ayahnya pun langsung menegur dan menghentikan tindakan tersebut. Tidak disangka, masyarakat lain ikut memuji tindakan yang dilakukan ayahnya. Dampaknya, sang anak pun bisa menilai bahwa tindakan ayahnya tadi adalah suatu hal yang keren dan harus dicontoh.",
      "Semua ini terlihat simpel dan mudah dipraktikkan, tapi mengapa masih banyak masyarakat Indonesia yang terus mempertontonkan dan mendidik bibit-bibit bangsa dengan cara yang keliru, baik disengaja maupun tidak disengaja. Saya kira ini merupakan tanggung jawab bersama dalam menjaga lingkungan dan cara mendidik generasi bangsa agar tetap pada proporsinya.",
      "Objek-Motivasi-Cara Berpikir-Nasib. Tentunya tidak heran bahwa angka pengangguran di Indonesia setiap tahun terus bertambah, bahkan angka kriminalitas terus melonjak. Ini disebabkan kurangnya motivasi yang benar di lingkungan akademis maupun di rumah. Peran guru serta orang tua sangat diperlukan di masa pertumbuhan anak. Orang dewasa harus memberi motivasi atau menanamkan pola pikir pada anak kepada hal-hal yang benar, dan mengajarkan bahwa sesuatu yang keren bagi manusia adalah mengasihi, berprestasi, bermoral, dan bernalar.",
      "Melalui tindakan-tindakan kecil yang mencerminkan rasionalisme manusia kepada anak, akan tertanam pola pikir bahwa beginilah hakikat sebenarnya manusia hidup.",
    ],
  },
  {
    id: 2,
    title: "DEMOKRASI HANYA SEBUAH MIMPI",
    date: "17 Agustus 2026",
    content: [
      "Sebuah sistem yang berbasis pada suara mayoritas atau suara masyarakat, di mana suara terbanyak yang menentukan hasil. Sistem ini indah, namun memiliki satu syarat besar, yaitu kesiapan dari para penggunanya.",
      "Demokrasi hanya menjadi sebuah sistem impian. Di dunia yang serba kacau ini, tidak mungkin demokrasi dapat berjalan seratus persen sesuai keinginan. Menurut Plato, kebebasan yang berlebihan dalam demokrasi pada akhirnya akan membawa kekacauan. Di tengah kekacauan tersebut, rakyat akan mencari sosok 'penyelamat' yang kuat dan tegas. Sosok ini biasanya memanfaatkan kepopulerannya untuk merebut kekuasaan mutlak, yang pada akhirnya mengubah sistem demokrasi menjadi tirani.",
      "Menurut pandangan saya, demokrasi akan berjalan lancar apabila suatu wilayah telah memenuhi dua syarat ini: intelektualitas mayoritas dan finansial mayoritas. Sebab, mayoritas adalah kekuatan terbesar bagi sistem ini. Lalu, bagaimana jika kedua syarat tersebut belum terpenuhi? Menurut saya, demokrasi hanya akan menjadi alat bagi para demagog untuk mencapai kursi kekuasaan. Mudah bagi mereka untuk memanipulasi kepercayaan mayoritas yang intelektualitasnya di bawah rata-rata, dan mudah pula bagi mereka untuk membeli suara mayoritas yang kemampuan finansialnya lemah.",
      "Demokrasi berubah menjadi tirani ketika para demagog berhasil menduduki kursi kekuasaan melalui suara mayoritas. Di sinilah sistem yang indah itu berubah menjadi sebuah kapal yang arah pelayarannya tidak lagi ditentukan oleh keputusan para penumpang, melainkan oleh keputusan seorang nahkoda. Kendali penuh berada di tangan sang nahkoda, hukum pun bisa berubah mengikuti kehendaknya. Padahal, nahkoda ini dahulu dipilih dan dipercaya oleh para penumpang untuk mengemudikan kapal atas dasar keputusan mayoritas. Kini, semua itu hanya menjadi mimpi indah yang telah berlalu.",
      "Hanya sebuah cerita fiktif yang dapat dirasakan.",
    ],
  },
];

function Tulisan() {
  return (
    <section className="tulisan-page">
      <div className="tulisan-header">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Kembali ke Beranda
        </Link>

        <span className="section-tag">TULISAN</span>
        <h1>Forum Menulis Saya</h1>
        <p>Tempat saya menuangkan pemikiran, cerita, dan pengalaman.</p>
      </div>

      <div className="tulisan-list">
        {posts.map((post) => (
          <article className="tulisan-card" key={post.id}>
            <span className="tulisan-date">{post.date}</span>
            <h2>{post.title}</h2>

            <div className="tulisan-body" lang="id" translate="no">
              {post.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <p className="tulisan-author">- Algi Zaif -</p>

            <div className="tulisan-discuss">
              <span>Punya pendapat tentang tulisan ini? Yuk diskusi:</span>
              <div className="discuss-links">
                <a
                  href="https://www.instagram.com/zfalgiz_?igsh=MTJ0aGNkcWRicWR2MQ=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram /> Instagram
                </a>
                <a href="https://discord.gg/TWhrZHwpX" target="_blank" rel="noreferrer">
                  <FaDiscord /> Discord
                </a>
                <a href="https://wa.me/6281252340475" target="_blank" rel="noreferrer">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Tulisan;