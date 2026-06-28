import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";

function Certificate() {
  const [showMore, setShowMore] = useState(false);

  const certificates = [
    {
      title: "Digital Marketing For Beginner",
      issuer: "Dibimbing",
      image: "/Dibimbing.png",
    },
    {
      title: "Database Administrator",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      image: "/bnsp.png",
    },
    {
      title: "IT Bootcamp Software Development For Industry",
      issuer: "Universitas Bina Sarana Informatika",
      image: "/Bsi.png",
    },
  ];

  const moreCertificates = [
    

    // TAMBAH SERTIFIKAT LAINNYA DI SINI
    // {
    //   title: "Nama Sertifikat Baru",
    //   issuer: "Nama Penerbit",
    //   image: "/nama-file-sertifikat.png",
    // },
  ];

  const visibleCertificates = showMore
    ? [...certificates, ...moreCertificates]
    : certificates;

  const scrollToCertificate = () => {
    setTimeout(() => {
      document
        .getElementById("certificate")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const handleShowMore = () => {
    setShowMore(true);
    scrollToCertificate();
  };

  const handleBack = () => {
    setShowMore(false);
    scrollToCertificate();
  };

  return (
    <section id="certificate" className="pp-certificate">
      <style>
        {`
          .pp-certificate,
          .pp-certificate * {
            box-sizing: border-box;
          }

          .pp-certificate {
            width: 100%;
            padding: 70px var(--container-x, 8%);
            background: #ffffff !important;
            color: #000000 !important;
            overflow: hidden;
          }

          .pp-certificate-top {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 18px;
            margin-bottom: 40px;
          }

          .pp-certificate-title h2 {
            display: inline-block;
            color: #000000 !important;
            border-bottom: 4px solid #f59e0b;
            padding-bottom: 10px;
            margin: 0;
            font-size: 30px;
            font-weight: 750;
            line-height: 1.2;
          }

          .pp-certificate-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 28px;
            align-items: start;
          }

          .pp-certificate-card {
  width: 100%;
  min-width: 0;
  background: #f3e4c8;
  border-radius: 18px;
  border: 2px solid #000000;
  overflow: hidden;
  color: #000000;
  box-shadow: 7px 7px 0 #000000;
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;
  height: 100%;
}

          .pp-certificate-card:hover {
            transform: translate(-4px, -4px);
            box-shadow: 11px 11px 0 #000000;
          }

          .pp-certificate-card:nth-child(3n + 1) {
            background: #dfd0b7;
          }

          .pp-certificate-card:nth-child(3n + 2) {
            background: #f3c4a8;
          }

          .pp-certificate-card:nth-child(3n) {
            background: #f3e4c8;
          }

          .pp-certificate-image-wrap {
  width: 100%;
  height: 320px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.35);
  line-height: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

          .pp-certificate-image-wrap img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  object-position: center;
  border-radius: 12px;
}

          .pp-certificate-caption {
  padding: 14px 16px 16px;
  border-top: 2px solid #000000;
  margin-top: auto;
}

          .pp-certificate-caption h3 {
            margin: 0 0 4px;
            color: #000000;
            font-size: 18px;
            font-weight: 720;
            line-height: 1.25;
          }

          .pp-certificate-caption p {
            margin: 0;
            color: rgba(0, 0, 0, 0.68);
            font-size: 13px;
            font-weight: 600;
            line-height: 1.35;
          }

          .pp-certificate-more-wrapper {
            width: 100%;
            margin-top: 42px;
            display: flex;
            justify-content: center;
          }

          .pp-certificate-more-btn,
          .pp-certificate-back-btn {
            border: 2px solid #000000;
            color: #000000;
            font-weight: 700;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.28s ease;
          }

          .pp-certificate-more-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 180px;
            padding: 15px 28px;
            border-radius: 30px;
            background: #f59e0b;
            box-shadow: 6px 6px 0 #92400e;
            font-size: 15px;
          }

          .pp-certificate-more-btn:hover {
            background: #fb923c;
            transform: translate(3px, 3px);
            box-shadow: 3px 3px 0 #7c2d12;
          }

          .pp-certificate-back-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 13px 19px;
            border-radius: 30px;
            background: #f3e4c8;
            font-size: 15px;
            box-shadow: 5px 5px 0 #000000;
            white-space: nowrap;
          }

          .pp-certificate-back-btn:hover {
            background: #ead6b0;
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0 #000000;
          }

          @media (max-width: 1200px) {
            .pp-certificate-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 22px;
            }
          }

          @media (max-width: 992px) {
            .pp-certificate {
              padding: 64px var(--container-x, 6%);
            }

            .pp-certificate-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 768px) {
            .pp-certificate {
              padding: 56px var(--container-x, 5%);
            }

            .pp-certificate-title h2 {
              font-size: 28px;
            }

            .pp-certificate-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .pp-certificate-caption h3 {
              font-size: 17px;
            }

            .pp-certificate-caption p {
              font-size: 12.5px;
            }
          }

          @media (max-width: 480px) {
            .pp-certificate {
              padding-top: 46px;
              padding-bottom: 46px;
            }

            .pp-certificate-top {
              gap: 14px;
            }

            .pp-certificate-title h2 {
              font-size: 26px;
            }

            .pp-certificate-card {
              border-radius: 16px;
              box-shadow: 5px 5px 0 #000000;
            }

            .pp-certificate-card:hover {
              transform: translate(-2px, -2px);
              box-shadow: 7px 7px 0 #000000;
            }

            .pp-certificate-image-wrap {
              padding: 10px;
            }

            .pp-certificate-caption {
              padding: 13px 14px 14px;
            }

            .pp-certificate-caption h3 {
              font-size: 16px;
            }

            .pp-certificate-more-btn {
              width: 100%;
            }

            .pp-certificate-back-btn {
              width: auto;
              padding: 12px 16px;
              font-size: 14px;
            }
          }

          @media (max-width: 390px) {
            .pp-certificate-top {
              flex-direction: column;
            }

            .pp-certificate-back-btn {
              width: 100%;
            }
          }
        `}
      </style>

      <div className="pp-certificate-top">
        <motion.div
          className="pp-certificate-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Sertifikat</h2>
        </motion.div>

        {showMore && (
          <button
            type="button"
            className="pp-certificate-back-btn"
            onClick={handleBack}
          >
            <FaArrowLeft />
            Kembali
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={showMore ? "certificate-more" : "certificate-main"}
          className="pp-certificate-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {visibleCertificates.map((certificate, index) => (
            <motion.article
              key={`${certificate.title}-${index}`}
              className="pp-certificate-card"
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.94,
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
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <div className="pp-certificate-image-wrap">
                <img src={certificate.image} alt={certificate.title} />
              </div>

              <div className="pp-certificate-caption">
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {!showMore && <div className="pp-certificate-more-wrapper"></div>}
    </section>
  );
}

export default Certificate;
