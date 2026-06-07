import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Certificate() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "Digital Marketing",
      issuer: "Dibimbing",
      image: "/Dibimbing.png",
    },
    {
      title: "BSI Incubator",
      issuer: "Dibimbing",
      image: "/Seminar.png",
    },
    {
      title: "IT Bootcamp",
      issuer: "Bina Sarana Informatika",
      image: "/Bsi.png",
    },
  ];

  return (
    <section id="certificate" className="certificate mz-certificate-section">
      <style>
        {`
          .mz-certificate-section {
            width: 100%;
            overflow: hidden;
          }

          .mz-certificate-section .section-title {
            text-align: left;
            margin-bottom: 40px;
          }

          .mz-certificate-section .section-title h2 {
            display: inline-block;
            color: #ffffff;
            border-bottom: 4px solid #10b981;
            padding-bottom: 10px;
            margin: 0;
            font-size: 28px;
            line-height: 1.2;
          }

          .mz-certificate-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 28px;
            align-items: stretch;
          }

          .mz-certificate-card {
            width: 100%;
            min-width: 0;
            background: #111c2d;
            border-radius: 24px;
            padding: 24px;
            border: 1px solid rgba(255, 255, 255, 0.06);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: all 0.3s ease;
          }

          .mz-certificate-card:hover {
            border-color: rgba(16, 185, 129, 0.35);
            box-shadow: 0 0 35px rgba(16, 185, 129, 0.12);
          }

          .mz-certificate-preview {
            position: relative;
            width: 100%;
            height: 285px;
            overflow: hidden;
            border-radius: 18px;
            margin-bottom: 24px;
            background:
              linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(0, 0, 0, 0.35)),
              rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.06);
          }

          .mz-certificate-preview img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            opacity: 0.92;
            transition: transform 0.4s ease, opacity 0.4s ease;
          }

          .mz-certificate-card:hover .mz-certificate-preview img {
            transform: scale(1.06);
            opacity: 1;
          }

          .mz-certificate-body {
            display: flex;
            flex-direction: column;
            flex: 1;
          }

          .mz-certificate-body h3 {
            color: #ffffff;
            font-size: 21px;
            line-height: 1.35;
            margin: 0 0 8px;
            font-weight: 700;
          }

          .mz-certificate-body h4 {
            color: #10b981;
            font-size: 15px;
            line-height: 1.4;
            margin: 0 0 22px;
            font-weight: 600;
          }

          .mz-certificate-button {
            margin-top: auto;
            align-self: flex-start;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 18px;
            border-radius: 12px;
            border: 1px solid rgba(16, 185, 129, 0.45);
            background: rgba(16, 185, 129, 0.12);
            color: #10b981;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .mz-certificate-button:hover {
            background: #10b981;
            color: #06111f;
            transform: translateY(-3px);
          }

          .mz-certificate-modal {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(8px);
          }

          .mz-certificate-modal-box {
            position: relative;
            width: min(1050px, 100%);
            max-height: 92vh;
            background: #0b0f14;
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: 0 25px 80px rgba(0, 0, 0, 0.55);
          }

          .mz-certificate-close {
            position: absolute;
            top: 14px;
            right: 14px;
            z-index: 3;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            background: rgba(0, 0, 0, 0.75);
            color: #ffffff;
            font-size: 24px;
            line-height: 40px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .mz-certificate-close:hover {
            background: #10b981;
            color: #06111f;
          }

          .mz-certificate-modal-header {
            padding: 18px 22px;
            padding-right: 70px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            background: #0b0f14;
          }

          .mz-certificate-modal-header h3 {
            margin: 0;
            color: #ffffff;
            font-size: 20px;
            line-height: 1.35;
          }

          .mz-certificate-modal-header p {
            margin: 6px 0 0;
            color: rgba(255, 255, 255, 0.7);
            font-size: 14px;
          }

          .mz-certificate-modal-content {
            max-height: 78vh;
            overflow: auto;
            padding: 20px;
            background: #05080c;
          }

          .mz-certificate-modal-content img {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 14px;
          }

          @media (max-width: 1200px) {
            .mz-certificate-grid {
              gap: 24px;
            }

            .mz-certificate-preview {
              height: 255px;
            }
          }

          @media (max-width: 992px) {
            .mz-certificate-section .section-title {
              text-align: center;
            }

            .mz-certificate-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 24px;
            }

            .mz-certificate-preview {
              height: 260px;
            }
          }

          @media (max-width: 768px) {
            .mz-certificate-grid {
              grid-template-columns: 1fr;
              gap: 22px;
            }

            .mz-certificate-card {
              padding: 22px;
              border-radius: 22px;
            }

            .mz-certificate-preview {
              height: 260px;
              margin-bottom: 20px;
              border-radius: 16px;
            }

            .mz-certificate-body h3 {
              font-size: 19px;
            }

            .mz-certificate-body h4 {
              font-size: 14px;
              margin-bottom: 18px;
            }

            .mz-certificate-button {
              width: 100%;
              align-self: stretch;
              font-size: 13.5px;
            }

            .mz-certificate-modal {
              padding: 14px;
              align-items: center;
            }

            .mz-certificate-modal-box {
              border-radius: 16px;
              max-height: 92vh;
            }

            .mz-certificate-modal-header {
              padding: 16px 18px;
              padding-right: 62px;
            }

            .mz-certificate-modal-header h3 {
              font-size: 18px;
            }

            .mz-certificate-modal-content {
              padding: 14px;
              max-height: 76vh;
            }
          }

          @media (max-width: 480px) {
            .mz-certificate-card {
              padding: 18px;
              border-radius: 20px;
            }

            .mz-certificate-preview {
              height: 220px;
              border-radius: 14px;
            }

            .mz-certificate-body h3 {
              font-size: 18px;
            }

            .mz-certificate-body h4 {
              font-size: 13.5px;
            }

            .mz-certificate-button {
              padding: 11px 16px;
              border-radius: 11px;
              font-size: 13px;
            }

            .mz-certificate-close {
              top: 10px;
              right: 10px;
              width: 34px;
              height: 34px;
              font-size: 22px;
              line-height: 34px;
            }

            .mz-certificate-modal-header {
              padding: 14px 16px;
              padding-right: 54px;
            }

            .mz-certificate-modal-header h3 {
              font-size: 16px;
            }

            .mz-certificate-modal-header p {
              font-size: 12.5px;
            }

            .mz-certificate-modal-content {
              padding: 12px;
            }

            .mz-certificate-modal-content img {
              border-radius: 10px;
            }
          }

          @media (max-width: 360px) {
            .mz-certificate-preview {
              height: 190px;
            }

            .mz-certificate-card {
              padding: 16px;
            }

            .mz-certificate-body h3 {
              font-size: 17px;
            }
          }
        `}
      </style>

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Certificate</h2>
      </motion.div>

      <div className="mz-certificate-grid">
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.title}
            className="mz-certificate-card"
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <div className="mz-certificate-preview">
              <img src={certificate.image} alt={certificate.title} />
            </div>

            <div className="mz-certificate-body">
              <h3>{certificate.title}</h3>
              <h4>{certificate.issuer}</h4>

              <motion.button
                type="button"
                className="mz-certificate-button"
                onClick={() => setSelectedCertificate(certificate)}
                whileTap={{
                  scale: 0.95,
                }}
              >
                View Certificate
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="mz-certificate-modal"
            onClick={() => setSelectedCertificate(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mz-certificate-modal-box"
              onClick={(event) => event.stopPropagation()}
              initial={{
                scale: 0.88,
                opacity: 0,
                y: 30,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.88,
                opacity: 0,
                y: 30,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <motion.button
                type="button"
                className="mz-certificate-close"
                onClick={() => setSelectedCertificate(null)}
                whileHover={{
                  rotate: 90,
                  scale: 1.1,
                }}
                aria-label="Close certificate preview"
              >
                ×
              </motion.button>

              <div className="mz-certificate-modal-header">
                <h3>{selectedCertificate.title}</h3>
                <p>{selectedCertificate.issuer}</p>
              </div>

              <div className="mz-certificate-modal-content">
                <motion.img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificate;
