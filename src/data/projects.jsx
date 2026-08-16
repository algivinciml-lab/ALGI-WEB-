import {
  FaRobot,
  FaShoppingCart,
  FaDiscord,
  FaCogs,
  FaPlug,
  FaReact,
  FaCss3Alt,
} from "react-icons/fa";
import { SiVite, SiJavascript } from "react-icons/si";

// Gambar bukti fitur "Bot Discord Pintar"
import ss1 from "../assets/images/portofoliopng/SS 1.png";
import ss2 from "../assets/images/portofoliopng/SS 2.png";
import ss3 from "../assets/images/portofoliopng/SS 3.png";
import ss4 from "../assets/images/portofoliopng/SS 4.png";
import ss5 from "../assets/images/portofoliopng/SS 5.png";
import ss6 from "../assets/images/portofoliopng/SS 6.png";

// Gambar bukti fitur "Website Ecommerce"
import ec1 from "../assets/images/portofolio2png/P1.png";
import ec2 from "../assets/images/portofolio2png/P2.png";
import ec3 from "../assets/images/portofolio2png/P3.png";
import ec4 from "../assets/images/portofolio2png/P4.png";
import ec5 from "../assets/images/portofolio2png/P5.png";
import ec6 from "../assets/images/portofolio2png/P6.png";

/*
  CARA PASANG GAMBAR PNG PROJECT:
  1. Taruh file PNG kamu di src/assets/images/portofolio/
     contoh: src/assets/images/portfolio/discord-bot.png
  2. Import di atas file ini, misalnya:
     import discordBotImg from "../assets/images/portfolio/discord-bot.png";
  3. Isi field "image" dengan variable itu untuk foto utama.

  CARA GANTI CAPTION GALERI DI BAWAH:
  Tinggal ubah teks di "caption" masing-masing item sesuai fitur aslinya
  (misal ganti "Screenshot 1" jadi "Fitur Auto-Reply Chat").

  CARA TAMBAH GAMBAR BARU LAGI (misal SS 7):
  1. Taruh file PNG-nya di src/assets/images/portofoliopng/
  2. Tambahkan baris import baru di atas, contoh:
     import ss7 from "../assets/images/portofoliopng/SS 7.png";
  3. Tambahkan baris baru ke array "gallery" di bawah:
     { image: ss7, caption: "Screenshot 7" },
*/

export const projects = [
  {
    id: "discord-bot",
    title: "Bot Discord Pintar",
    description: "Bot Discord pintar yang dilengkapi fitur Chat AI.",
    fullDescription: "", // isi teks keterangan lengkap di sini
    image: null, // isi dengan import gambar PNG utama di sini
    icon: <FaDiscord />,
    tags: [
      { label: "Discord Bot", icon: <FaRobot /> },
      { label: "Artificial Intelligence", icon: <FaRobot /> },
      { label: "AI Chat", icon: <FaRobot /> },
      { label: "Automation", icon: <FaCogs /> },
      { label: "API Integration", icon: <FaPlug /> },
    ],
    gallery: [
      { image: ss1, caption: "PROFILE BOT" },
      { image: ss2, caption: "LYRICS FITUR" },
      { image: ss3, caption: "WELCOME DETECTED" },
      { image: ss4, caption: "AI CHAT FITUR" },
      { image: ss5, caption: "COMMAND PROMT" },
      { image: ss6, caption: "FITUR MUSIC PLAY" },
    ],
  },
  {
    id: "ecommerce",
    title: "Website Ecommerce",
    description: "Website Ecommerce dengan tampilan modern dan responsive.",
    fullDescription: "", // isi teks keterangan lengkap di sini
    image: null, // isi dengan import gambar PNG utama di sini
    icon: <FaShoppingCart />,
    tags: [
      { label: "React", icon: <FaReact /> },
      { label: "Vite", icon: <SiVite /> },
      { label: "JavaScript", icon: <SiJavascript /> },
      { label: "CSS", icon: <FaCss3Alt /> },
      { label: "Responsive Web Design", icon: <FaCogs /> },
    ],
    gallery: [
      { image: ec1, caption: "LAYOUT" },
      { image: ec2, caption: "PENAWARAN" },
      { image: ec3, caption: "ITEM" },
      { image: ec4, caption: "DATA ISI" },
      { image: ec5, caption: "QR CODE" },
      { image: ec6, caption: "TRANSAKSI RIWAYAT" },
    ],
  },
];