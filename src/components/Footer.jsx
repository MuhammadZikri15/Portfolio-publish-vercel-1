import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/username",
      icon: <FaLinkedinIn />,
      className: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/MuhammadZikri15",
      icon: <FaGithub />,
      className: "github",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/emzikrri",
      icon: <FaInstagram />,
      className: "instagram",
    },
  ];

  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: "easeOut",
        staggerChildren: 0.14,
      },
    },
  };

  const brandVariants = {
    hidden: {
      opacity: 0,
      x: -45,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const socialsVariants = {
    hidden: {
      opacity: 0,
      x: 45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const socialItemVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      scale: 0.85,
      rotate: -4,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      className="footer mz-footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <style>
        {`
          .mz-footer {
            width: 100%;
            padding: 42px 8%;
            background: #040e1f;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 28px;
            overflow: hidden;
            position: relative;
          }

          .mz-footer::before {
            content: "";
            position: absolute;
            top: 0;
            left: -40%;
            width: 40%;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(16, 185, 129, 0.85),
              transparent
            );
            animation: mz-footer-line 4s ease-in-out infinite;
          }

          .mz-footer-glow {
            position: absolute;
            width: 220px;
            height: 220px;
            border-radius: 999px;
            background: rgba(16, 185, 129, 0.12);
            filter: blur(80px);
            pointer-events: none;
            animation: mz-footer-glow 5s ease-in-out infinite;
          }

          .mz-footer-glow-left {
            left: -80px;
            bottom: -120px;
          }

          .mz-footer-glow-right {
            right: -90px;
            top: -130px;
            animation-delay: 1.2s;
          }

          .mz-footer-brand {
            min-width: 0;
            position: relative;
            z-index: 2;
          }

          .mz-footer-brand h3 {
            color: #ffffff;
            font-size: 22px;
            line-height: 1.25;
            margin: 0 0 8px;
            font-weight: 800;
            letter-spacing: 0.5px;
            transition: color 0.3s ease, transform 0.3s ease;
          }

          .mz-footer-brand:hover h3 {
            color: #10b981;
            transform: translateX(4px);
          }

          .mz-footer-brand p {
            color: #7d8796;
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
          }

          .mz-footer-socials {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 18px;
            flex-wrap: wrap;
            flex-shrink: 0;
            position: relative;
            z-index: 2;
          }

          .mz-footer-social-link {
            width: 82px;
            height: 76px;
            border-radius: 18px;
            background: #111c2d;
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: #a7b0c0;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 9px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .mz-footer-social-link::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          .mz-footer-social-link svg {
            width: 24px;
            height: 24px;
            display: block;
            transition: all 0.3s ease;
            position: relative;
            z-index: 2;
          }

          .mz-footer-social-link.linkedin svg {
            color: #0a66c2;
          }

          .mz-footer-social-link.github svg {
            color: #ffffff;
          }

          .mz-footer-social-link.instagram svg {
            color: #e4405f;
          }

          .mz-footer-social-link span {
            color: #a7b0c0;
            font-size: 13px;
            font-weight: 600;
            line-height: 1;
            transition: color 0.3s ease;
            position: relative;
            z-index: 2;
          }

          .mz-footer-social-link:hover {
            transform: translateY(-6px);
            box-shadow: 0 0 28px rgba(16, 185, 129, 0.12);
          }

          .mz-footer-social-link:hover svg {
            transform: rotate(-8deg) scale(1.12);
          }

          .mz-footer-social-link.linkedin:hover {
            border-color: rgba(10, 102, 194, 0.65);
            background: rgba(10, 102, 194, 0.14);
            box-shadow: 0 0 28px rgba(10, 102, 194, 0.22);
          }

          .mz-footer-social-link.linkedin:hover span {
            color: #0a66c2;
          }

          .mz-footer-social-link.github:hover {
            border-color: #ffffff;
            background: #ffffff;
            box-shadow: 0 0 28px rgba(255, 255, 255, 0.18);
          }

          .mz-footer-social-link.github:hover svg,
          .mz-footer-social-link.github:hover span {
            color: #000000;
          }

          .mz-footer-social-link.instagram:hover {
            border-color: rgba(228, 64, 95, 0.7);
            background: rgba(228, 64, 95, 0.14);
            box-shadow: 0 0 28px rgba(228, 64, 95, 0.2);
          }

          .mz-footer-social-link.instagram:hover span {
            color: #e4405f;
          }

          @keyframes mz-footer-line {
            0% {
              left: -40%;
              opacity: 0;
            }

            20% {
              opacity: 1;
            }

            80% {
              opacity: 1;
            }

            100% {
              left: 100%;
              opacity: 0;
            }
          }

          @keyframes mz-footer-glow {
            0%,
            100% {
              opacity: 0.55;
              transform: scale(1);
            }

            50% {
              opacity: 0.9;
              transform: scale(1.18);
            }
          }

          @media (max-width: 1200px) {
            .mz-footer {
              padding-left: 6%;
              padding-right: 6%;
            }
          }

          @media (max-width: 768px) {
            .mz-footer {
              padding: 32px 6%;
              flex-direction: column;
              text-align: center;
              justify-content: center;
              gap: 24px;
            }

            .mz-footer-brand h3 {
              font-size: 19px;
            }

            .mz-footer-brand p {
              font-size: 13px;
            }

            .mz-footer-brand:hover h3 {
              transform: translateY(-2px);
            }

            .mz-footer-socials {
              justify-content: center;
              gap: 12px;
              width: 100%;
            }

            .mz-footer-social-link {
              width: 74px;
              height: 66px;
              border-radius: 16px;
              gap: 7px;
            }

            .mz-footer-social-link svg {
              width: 21px;
              height: 21px;
            }

            .mz-footer-social-link span {
              font-size: 12px;
            }
          }

          @media (max-width: 480px) {
            .mz-footer {
              padding: 30px 5%;
              gap: 22px;
            }

            .mz-footer-brand h3 {
              font-size: 18px;
            }

            .mz-footer-brand p {
              font-size: 12.5px;
            }

            .mz-footer-socials {
              gap: 10px;
            }

            .mz-footer-social-link {
              width: 68px;
              height: 62px;
              border-radius: 15px;
            }

            .mz-footer-social-link svg {
              width: 20px;
              height: 20px;
            }

            .mz-footer-social-link span {
              font-size: 11.5px;
            }
          }

          @media (max-width: 360px) {
            .mz-footer-socials {
              gap: 8px;
            }

            .mz-footer-social-link {
              width: 64px;
              height: 58px;
            }

            .mz-footer-social-link svg {
              width: 18px;
              height: 18px;
            }

            .mz-footer-social-link span {
              font-size: 11px;
            }
          }
        `}
      </style>

      <span className="mz-footer-glow mz-footer-glow-left"></span>
      <span className="mz-footer-glow mz-footer-glow-right"></span>

      <motion.div className="mz-footer-brand" variants={brandVariants}>
        <h3>MUHAMMAD ZIKRI</h3>
        <p>© 2026 Muhammad Zikri. Built with React and Vite.</p>
      </motion.div>

      <motion.div className="mz-footer-socials" variants={socialsVariants}>
        {socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`mz-footer-social-link ${social.className}`}
            variants={socialItemVariants}
            whileHover={{
              y: -6,
              scale: 1.06,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.94 }}
            aria-label={`Open ${social.name}`}
          >
            {social.icon}
            <span>{social.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
