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
        <h2>About Me</h2>

        <p>
          I am a sixth-semester student at Universitas Bina Sarana Informatika
          with a strong interest in web development, user interface design, and
          digital technology. I enjoy creating websites that are clean,
          responsive, and easy to use across desktop, Android, iPhone, and other
          devices.
        </p>

        <p>
          My focus is not only on writing code, but also on building digital
          experiences that look professional and feel intuitive for users. I
          like turning ideas into functional interfaces with good layout, clear
          structure, and smooth interaction.
        </p>

        <p>
          Through this portfolio, I showcase several projects, skills, and
          learning experiences that reflect my growth in frontend development
          and modern web design.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;
