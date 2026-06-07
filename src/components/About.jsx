import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={aboutImage} alt="Muhammad Zikri" />
      </motion.div>

      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      >
        <h2>Tentang Saya</h2>

        <p>
          Saya adalah mahasiswa semester 6 Program Studi Sistem Informasi yang
          memiliki ketertarikan pada pengembangan web, desain antarmuka, dan
          konten digital. Saya terbiasa mengerjakan proyek perancangan website,
          pengembangan aplikasi sederhana, serta desain tampilan yang berfokus
          pada kenyamanan pengguna. Saya ingin terus belajar dan memperoleh
          pengalaman di bidang teknologi informasi, khususnya dalam merancang
          serta mengembangkan aplikasi dan website sebagai solusi digital yang
          bermanfaat, efektif, dan bernilai bagi pengguna.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;
