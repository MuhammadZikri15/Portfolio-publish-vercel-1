import heroImage from "../assets/zikri.png";
import glowingIcon from "../assets/glowing.png";
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
      <motion.div
        className="hero-content"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="hero-blur"></span>
        <span className="hero-blur"></span>

        <motion.h4
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          PORTFOLIO
        </motion.h4>

        <div className="hero-heading">
          <TypeAnimation
            sequence={[500, "Hi, I'm"]}
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
          Mahasiswa semester 6 Universitas Bina Sarana Informatika yang memiliki
          ketertarikan pada pengembangan web, desain antarmuka, dan teknologi
          digital. Portfolio ini berisi beberapa karya, skill, dan pengalaman
          saya dalam membangun project berbasis teknologi.
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
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="btn-secondary"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
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
