import heroImage from "../assets/zikri.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <style>
        {`
          .hero-buttons {
            display: flex;
            align-items: center;
            gap: 18px;
            flex-wrap: wrap;
          }

          .btn-primary,
          .btn-secondary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 155px;
            padding: 20px 28px;
            border-radius: 15px;
            font-size: 15px;
            font-weight: 700;
            line-height: 1;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .btn-primary {
            background: rgba(16, 185, 129, 0.16);
            color: #10b981;
            border: 2px solid rgba(16, 185, 129, 0.75);
            box-shadow: none;
          }

          .btn-primary:hover {
            background: #10b981;
            color: #06111f;
            border-color: #10b981;
            box-shadow: 0 0 28px rgba(16, 185, 129, 0.24);
          }

          .btn-secondary {
            background: rgba(16, 185, 129, 0.08);
            color: #10b981;
            border: 2px solid rgba(16, 185, 129, 0.55);
            box-shadow: none;
          }

          .btn-secondary:hover {
            background: #10b981;
            color: #06111f;
            border-color: #10b981;
            box-shadow: 0 0 28px rgba(16, 185, 129, 0.24);
          }

          @media (max-width: 768px) {
            .hero-buttons {
              gap: 14px;
            }

            .btn-primary,
            .btn-secondary {
              min-width: 145px;
              padding: 14px 22px;
              border-radius: 16px;
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            .hero-buttons {
              width: 100%;
              flex-direction: column;
              align-items: stretch;
            }

            .btn-primary,
            .btn-secondary {
              width: 100%;
              min-width: 100%;
              padding: 14px 20px;
              border-radius: 15px;
            }
          }
        `}
      </style>

      <motion.div
        className="hero-content"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="hero-blur blur-one"></span>
        <span className="hero-blur blur-two"></span>

        <motion.h4
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          PORTFOLIO
        </motion.h4>

        <div className="hero-heading">
          <TypeAnimation
            sequence={[500, "Hallo, Saya"]}
            wrapper="h1"
            speed={200}
            cursor={false}
            repeat={0}
            className="hero-title-top hi-unique"
          />

          <div className="hero-name-wrapper">
            <h2 className="hero-name">
              <TypeAnimation
                sequence={[1800, "Muhammad Zikri"]}
                speed={200}
                cursor={false}
                repeat={0}
              />
            </h2>
          </div>
        </div>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.8 }}
        >
          Mahasiswa semester 6 jurusan Sistem Informasi di Universitas Bina
          Sarana Informatika dengan minat pada pengembangan web, desain
          antarmuka, dan teknologi digital. Berpengalaman mengerjakan berbagai
          proyek kampus maupun individu, mulai dari perancangan UI website
          hingga pengembangan aplikasi. Memiliki ketertarikan dalam
          menggabungkan keterampilan teknis dan pemecahan masalah kreatif untuk
          menciptakan solusi digital yang efektif, fungsional, dan menarik.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="btn-primary"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Kunjungi
          </motion.a>

          <motion.a
            href="#contact"
            className="btn-secondary"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Kontak
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="hero-image-wrapper"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="hero-shape"></span>
          <span className="hero-shape-glow"></span>

          <motion.img
            src={heroImage}
            alt="Muhammad Zikri"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

          <span className="hero-image-shadow"></span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
