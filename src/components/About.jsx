import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import aboutImage from "../assets/about.jpg";

function About() {
  return (
    <motion.section
      id="about"
      className="pp-about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <style>
        {`
          .pp-about,
          .pp-about * {
            box-sizing: border-box;
          }

          .pp-about {
            width: 100%;
            padding: 80px var(--container-x, 8%) 60px;
            background: #ffffff !important;
            color: #000000 !important;
            display: grid;
            grid-template-columns: minmax(300px, 460px) minmax(0, 1fr);
            gap: 48px;
            align-items: start;
            overflow: hidden;
          }

          .pp-about-image {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
          }

          .pp-about-image img {
            width: 460px;
            aspect-ratio: 1 / 1;
            height: auto;
            object-fit: cover;
            object-position: center top;
            border-radius: 18px;
            border: 2px solid #000000;
            display: block;
            box-shadow: 8px 8px 0 #f3e4c8;
          }

          .pp-about-text {
            max-width: 680px;
            justify-self: start;
          }

          .pp-about-title {
            display: inline-block;
            color: #000000 !important;
            border-bottom: 4px solid #f59e0b;
            padding-bottom: 10px;
            margin: 0 0 34px;
            text-align: left;
            font-size: clamp(26px, 3vw, 32px);
            line-height: 1.2;
            font-weight: 800;
          }

          .pp-about-paragraph {
            color: #000000 !important;
            line-height: 1.8;
            font-size: clamp(15px, 1.4vw, 18px);
            font-weight: 500;
            margin: 0;
          }

         .pp-about-actions {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: nowrap;
  margin-top: 32px;
}

.pp-about-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  min-width: 280px;
  width: auto;
  height: 54px;

  padding: 15px 26px;

  border-radius: 14px;
  border: 2px solid #2f2f2f;

  color: #000000 !important;
  font-size: 15px;
  font-weight: 800;

  line-height: 1.2;
  text-decoration: none;

  white-space: nowrap;

  position: relative;
  cursor: pointer;

  transition: all 0.28s ease;
}
          .pp-about-button-location {
            background: #f3e4c8;
            box-shadow: 6px 6px 0 #2f2f2f;
          }

          .pp-about-button-location:hover {
            background: #ead6b0;
            color: #000000 !important;
            border-color: #000000;
            box-shadow: 3px 3px 0 #000000;
            transform: translate(3px, 3px);
          }

          .pp-about-button-email {
            background: #f59e0b;
            box-shadow: 6px 6px 0 #92400e;
          }

          .pp-about-button-email:hover {
            background: #fb923c;
            color: #000000 !important;
            border-color: #000000;
            box-shadow: 3px 3px 0 #7c2d12;
            transform: translate(3px, 3px);
          }

          .pp-about-icon {
            font-size: 20px;
            flex-shrink: 0;
            transition: all 0.28s ease;
          }

          .pp-about-location-icon {
            color: #f97316;
          }

          .pp-about-gmail-icon {
            color: #000000;
          }

          .pp-about-button:hover .pp-about-location-icon {
            color: #ea580c;
            transform: scale(1.08);
          }

          .pp-about-button:hover .pp-about-gmail-icon {
            color: #000000;
            transform: scale(1.08);
          }

          @media (max-width: 992px) {
            .pp-about {
              grid-template-columns: 1fr;
              gap: 34px;
              padding: 62px var(--container-x, 6%) 45px;
            }

            .pp-about-image {
              justify-content: center;
            }

            .pp-about-image img {
              width: min(400px, 100%);
            }

            .pp-about-text {
              max-width: 760px;
              justify-self: stretch;
              text-align: left;
            }

            .pp-about-title {
              text-align: left;
            }
          }

          @media (max-width: 768px) {
            .pp-about {
              padding: 44px var(--container-x, 5%) 32px;
              gap: 26px;
            }

            .pp-about-image img {
              width: min(320px, 100%);
              box-shadow: 6px 6px 0 #f3e4c8;
            }

            .pp-about-title {
              font-size: 28px;
              margin-bottom: 24px;
            }

            .pp-about-paragraph {
              font-size: 15.5px;
              line-height: 1.68;
            }

            .pp-about-actions {
  flex-direction: column;
  gap: 16px;
}

            .pp-about-button {
  width: 100%;
  height: 52px;
  min-width: 100%;
  justify-content: flex-start;
  padding: 14px 18px;
  font-size: 14px;
}

          @media (max-width: 480px) {
            .pp-about {
              padding-top: 40px;
              padding-bottom: 24px;
            }

            .pp-about-image img {
              width: min(280px, 100%);
              border-radius: 16px;
            }

            .pp-about-title {
              font-size: 26px;
            }

            .pp-about-paragraph {
              font-size: 14.5px;
              line-height: 1.62;
            }

            .pp-about-button {
              padding: 14px 16px;
              border-radius: 14px;
            }

            .pp-about-icon {
              font-size: 18px;
            }
          }
        `}
      </style>

      <motion.div
        className="pp-about-image"
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={aboutImage} alt="Muhammad Zikri" />
      </motion.div>

      <motion.div
        className="pp-about-text"
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      >
        <h2 className="pp-about-title">Tentang Saya</h2>

        <p className="pp-about-paragraph">
          Mahasiswa Semester 6 Program Studi Sistem Informasi, Universitas Bina
          Sarana Informatika. Memiliki minat dalam bidang UI/UX Design dan
          Frontend Development. Berhasil mengembangkan keterampilan dalam
          mengerjakan berbagai proyek akademik maupun pribadi. Memiliki
          kemampuan interpersonal yang baik, seperti komunikasi yang efektif dan
          kolaborasi antar tim. Saat ini berkomitmen untuk terus mengembangkan
          keterampilan dan menambah pengalaman. Saya yakin dapat memberikan
          kontribusi positif serta mencapai tujuan profesional di masa depan.
        </p>

        <div className="pp-about-actions">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Kebon+Jeruk,+Jakarta+Barat"
            target="_blank"
            rel="noreferrer"
            className="pp-about-button pp-about-button-location"
          >
            <FaLocationDot className="pp-about-icon pp-about-location-icon" />
            Kebon Jeruk, Jakarta Barat
          </a>

          <a
            href="mailto:mz150904@gmail.com"
            className="pp-about-button pp-about-button-email"
          >
            <SiGmail className="pp-about-icon pp-about-gmail-icon" />
            muhammadzikri549@gmail.com
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
