import { useState } from "react";
import heroImage from "../assets/zikri.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  const [nameDone, setNameDone] = useState(false);
  const [buttonsDone, setButtonsDone] = useState(false);

  const handleNameDone = () => {
    setNameDone(true);

    setTimeout(() => {
      setButtonsDone(true);
    }, 900);
  };

  return (
    <section id="home" className="pp-hero">
      <style>
        {`
          .pp-hero,
          .pp-hero * {
            box-sizing: border-box;
          }

          .pp-hero {
            min-height: 100vh !important;
            padding: calc(var(--nav-height, 84px) + 56px) var(--container-x, 8%) 80px !important;
            background: #ffffff !important;
            color: #000000 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 70px !important;
            position: relative !important;
            overflow: hidden !important;
          }

          .pp-hero-content {
            flex: 1 1 520px !important;
            max-width: 680px !important;
            position: relative !important;
            z-index: 5 !important;
          }

          .pp-hero-subtitle {
            color: #000000 !important;
            font-size: 14px !important;
            font-weight: 900 !important;
            text-transform: uppercase !important;
            letter-spacing: 3px !important;
            margin: 0 0 22px 0 !important;
          }

          .pp-hero-heading {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px !important;
            margin-bottom: 26px !important;
          }

          .pp-hero-title-top {
            display: block !important;
            margin: 0 !important;
            padding: 0 !important;
            color: transparent !important;
            -webkit-text-fill-color: #ffffff !important;
            -webkit-text-stroke: 2.5px #f59e0b !important;
            text-stroke: 2.5px #f59e0b !important;
            font-size: clamp(52px, 5.6vw, 78px) !important;
            line-height: 1.05 !important;
            font-weight: 900 !important;
            letter-spacing: -2px !important;
            opacity: 1 !important;
            text-shadow: none !important;
          }

          .pp-hero-name-wrapper {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            overflow: visible !important;
          }

          .pp-hero-name,
.pp-hero-name span {
  display: block !important;
  color: #000000 !important;
  -webkit-text-fill-color: #000000 !important;
  font-size: clamp(42px, 4.2vw, 62px) !important;
  line-height: 1.05 !important;
  font-weight: 900 !important;
  letter-spacing: -2px !important;
  margin: 0 !important;
  padding: 0 !important;
  opacity: 1 !important;
  white-space: nowrap !important;
}

          .pp-hero-reveal {
            opacity: 0 !important;
            visibility: hidden !important;
            transform: translateY(30px) !important;
            transition:
              opacity 0.75s ease,
              transform 0.75s ease,
              visibility 0.75s ease !important;
          }

          .pp-hero-reveal.show {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) !important;
          }

          .pp-hero-description {
            max-width: 640px !important;
            color: #000000 !important;
            font-size: 18px !important;
            line-height: 1.8 !important;
            font-weight: 500 !important;
            margin: 0 0 34px !important;
          }

          .pp-hero-buttons {
            display: flex !important;
            align-items: center !important;
            gap: 18px !important;
            flex-wrap: wrap !important;
          }

          .pp-hero-buttons.pp-hero-reveal {
            transform: translateY(24px) !important;
          }

          .pp-hero-buttons.pp-hero-reveal.show {
            transform: translateY(0) !important;
          }

          .pp-hero-btn {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            min-width: 160px !important;
            padding: 17px 42px !important;
            border-radius: 40px !important;
            font-size: 15px !important;
            font-weight: 800 !important;
            line-height: 1 !important;
            text-decoration: none !important;
            cursor: pointer !important;
            position: relative !important;
            transition: all 0.28s ease !important;
          }

          .pp-hero-btn-primary {
            background: #f3e4c8 !important;
            color: #000000 !important;
            border: 2px solid #2f2f2f !important;
            box-shadow: 6px 6px 0 #2f2f2f !important;
          }

          .pp-hero-btn-primary:hover {
            background: #ead6b0 !important;
            color: #000000 !important;
            border-color: #000000 !important;
            box-shadow: 3px 3px 0 #000000 !important;
            transform: translate(3px, 3px) !important;
          }

          .pp-hero-btn-secondary {
            background: #f59e0b !important;
            color: #000000 !important;
            border: 2px solid #2f2f2f !important;
            box-shadow: 6px 6px 0 #92400e !important;
          }

          .pp-hero-btn-secondary:hover {
            background: #fb923c !important;
            color: #000000 !important;
            border-color: #000000 !important;
            box-shadow: 3px 3px 0 #7c2d12 !important;
            transform: translate(3px, 3px) !important;
          }

          .pp-hero-image {
            flex: 1 1 440px !important;
            display: flex !important;
            justify-content: flex-end !important;
            align-items: center !important;
            min-width: 0 !important;
            padding-right: 2% !important;
          }

          .pp-hero-float {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            width: max-content !important;
          }

          .pp-hero-image-wrapper {
  position: relative !important;
  width: clamp(300px, 36vw, 520px) !important;
  aspect-ratio: 4 / 5 !important;
  height: auto !important;

  display: flex !important;
  justify-content: center !important;
  align-items: flex-end !important;

  overflow: hidden !important;

  transform: translateX(45px) !important;
}

          .pp-hero-frame-back {
  position: absolute !important;

  inset: 18px -18px -18px 18px !important;

  background: #f3e4c8 !important;
  border: 5px solid #000000 !important;

  z-index: 1 !important;
}

          .pp-hero-frame-main {
  position: absolute !important;

  inset: 0 !important;

  background: #f3e4c8 !important;
  border: 5px solid #000000 !important;

  z-index: 2 !important;
}

          .pp-hero-frame-inner {
  position: absolute !important;

  inset: 18px !important;

  border: 3px solid #000000 !important;

  z-index: 3 !important;

  pointer-events: none !important;
}

  .pp-hero-image-wrapper img {
  position: absolute !important;

  bottom: 0 !important;
  left: 50% !important;

  z-index: 4 !important;

  width: 82% !important;
  height: auto !important;

  object-fit: contain !important;

  transform: translateX(-50%) translateY(-20px) !important;

  filter: drop-shadow(0 16px 28px rgba(0,0,0,0.16)) !important;
}

          @media (max-width: 992px) {
            .pp-hero {
              min-height: auto !important;
              padding: calc(var(--nav-height, 80px) + 36px) var(--container-x, 6%) 64px !important;
              flex-direction: column !important;
              text-align: center !important;
              gap: 0 !important;
              overflow-x: hidden !important;
              overflow-y: visible !important;
            }

            .pp-hero-image {
              order: 1 !important;
              flex: 0 1 auto !important;
              width: 100% !important;
              max-width: 100% !important;
              justify-content: center !important;
              padding-right: 0 !important;
              margin: 0 0 58px 0 !important;
            }

            .pp-hero-content {
              order: 2 !important;
              flex: 0 1 auto !important;
              width: 100% !important;
              max-width: 100% !important;
              margin-top: 20px !important;
            }

            .pp-hero-float {
  width: 100% !important;
}


/* TAMBAHKAN INI */
.pp-hero-image-wrapper {
  width: min(350px, 78vw) !important;
  aspect-ratio: 4 / 5 !important;
  transform: translateX(0) !important;
}

.pp-hero-image-wrapper img {
  width: 82% !important;
  transform: translateX(-50%) translateY(-20px) !important;
}

.pp-hero-frame-back {
  inset: 18px -18px -18px 18px !important;
}

.pp-hero-frame-main {
  border-width: 4px !important;
}

.pp-hero-frame-inner {
  inset: 18px !important;
  border-width: 2px !important;
}



          

          

            .pp-hero-heading {
              align-items: center !important;
            }

            .pp-hero-name,
            .pp-hero-name span {
              white-space: normal !important;
              text-align: center !important;
            }

            .pp-hero-description {
              margin-left: auto !important;
              margin-right: auto !important;
            }

            .pp-hero-buttons {
              justify-content: center !important;
            }
          }

          @media (max-width: 768px) {
            .pp-hero {
              padding-top: calc(var(--nav-height, 76px) + 32px) !important;
              padding-bottom: 54px !important;
            }

            .pp-hero-image {
              margin-bottom: 62px !important;
            }

            .pp-hero-content {
              margin-top: 18px !important;
            }

            .pp-hero-subtitle {
              font-size: 12px !important;
              letter-spacing: 2.5px !important;
              margin-bottom: 16px !important;
            }

            .pp-hero-title-top {
              font-size: clamp(38px, 10vw, 52px) !important;
              -webkit-text-stroke: 2px #f59e0b !important;
              text-stroke: 2px #f59e0b !important;
            }

            .pp-hero-name,
            .pp-hero-name span {
              font-size: clamp(32px, 8vw, 46px) !important;
            }

            .pp-hero-description {
              font-size: 15.5px !important;
              line-height: 1.7 !important;
              margin-bottom: 28px !important;
            }

            

           

            .pp-hero-frame-main {
              border-width: 4px !important;
            }

            .pp-hero-frame-inner {
              inset: 20px !important;
              border-width: 2px !important;
            }
          }

          @media (max-width: 480px) {
            .pp-hero {
              padding-left: 5% !important;
              padding-right: 5% !important;
              padding-top: calc(var(--nav-height, 76px) + 28px) !important;
              padding-bottom: 48px !important;
            }

            .pp-hero-image {
              margin-bottom: 58px !important;
            }

            .pp-hero-content {
              margin-top: 16px !important;
            }

            .pp-hero-title-top {
              font-size: clamp(36px, 11vw, 48px) !important;
              -webkit-text-stroke: 1.8px #f59e0b !important;
              text-stroke: 1.8px #f59e0b !important;
            }


            

            

            .pp-hero-frame-main {
              border-width: 3px !important;
            }

            .pp-hero-frame-inner {
              inset: 16px !important;
              border-width: 2px !important;
            }

            .pp-hero-buttons {
              width: 100% !important;
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 16px !important;
            }

            .pp-hero-btn {
              width: 100% !important;
              min-width: 100% !important;
              padding: 17px 32px !important;
              border-radius: 40px !important;
            }
          }

          @media (max-width: 360px) {
            .pp-hero {
              padding-top: calc(var(--nav-height, 76px) + 24px) !important;
            }

            .pp-hero-image {
              margin-bottom: 52px !important;
            }

           

            .pp-hero-title-top {
              font-size: 34px !important;
              -webkit-text-stroke: 1.6px #f59e0b !important;
              text-stroke: 1.6px #f59e0b !important;
            }

            .pp-hero-name,
            .pp-hero-name span {
              font-size: 34px !important;
            }

            .pp-hero-description {
              font-size: 14.5px !important;
            }
          }
        `}
      </style>

      <div className="pp-hero-content">
        <h4 className="pp-hero-subtitle">PORTFOLIO</h4>

        <div className="pp-hero-heading">
          <TypeAnimation
            sequence={[500, "Hallo, Saya"]}
            wrapper="h1"
            speed={200}
            cursor={false}
            repeat={0}
            className="pp-hero-title-top"
          />

          <div className="pp-hero-name-wrapper">
            <h2 className="pp-hero-name">
              <TypeAnimation
                sequence={[
                  1800,
                  "Muhammad Zikri",
                  () => {
                    handleNameDone();
                  },
                ]}
                speed={200}
                cursor={false}
                repeat={0}
              />
            </h2>
          </div>
        </div>

        <p
          className={
            nameDone
              ? "pp-hero-description pp-hero-reveal show"
              : "pp-hero-description pp-hero-reveal"
          }
        >
          Saya tertarik pada Front-End Development dan UI/UX Design, serta
          berfokus pada pengembangan produk digital yang intuitif dan
          berorientasi pada kebutuhan pengguna.
        </p>

        <div
          className={
            buttonsDone
              ? "pp-hero-buttons pp-hero-reveal show"
              : "pp-hero-buttons pp-hero-reveal"
          }
        >
          <motion.a
            href="#projects"
            className="pp-hero-btn pp-hero-btn-primary"
            whileTap={{ scale: 0.96 }}
          >
            Kunjungi
          </motion.a>

          <motion.a
            href="#contact"
            className="pp-hero-btn pp-hero-btn-secondary"
            whileTap={{ scale: 0.96 }}
          >
            Kontak
          </motion.a>
        </div>
      </div>

      <div className="pp-hero-image">
        <div className="pp-hero-float">
          <div className="pp-hero-image-wrapper">
            <span className="pp-hero-frame-back"></span>
            <span className="pp-hero-frame-main"></span>
            <span className="pp-hero-frame-inner"></span>

            <motion.img
              src={heroImage}
              alt="Muhammad Zikri"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
