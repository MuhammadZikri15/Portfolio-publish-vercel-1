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

  return (
    <motion.footer
      className="footer mz-footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
          }

          .mz-footer-brand {
            min-width: 0;
          }

          .mz-footer-brand h3 {
            color: #ffffff;
            font-size: 22px;
            line-height: 1.25;
            margin: 0 0 8px;
            font-weight: 800;
            letter-spacing: 0.5px;
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
          }

          .mz-footer-social-link svg {
            width: 24px;
            height: 24px;
            display: block;
            transition: all 0.3s ease;
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
          }

          .mz-footer-social-link:hover {
            transform: translateY(-5px);
            border-color: rgba(16, 185, 129, 0.35);
            box-shadow: 0 0 28px rgba(16, 185, 129, 0.12);
          }

          .mz-footer-social-link:hover span {
            color: #10b981;
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

      <motion.div
        className="mz-footer-brand"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <h3>MUHAMMAD ZIKRI</h3>
        <p>© 2026 Muhammad Zikri. Built with React and Vite.</p>
      </motion.div>

      <motion.div
        className="mz-footer-socials"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        {socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`mz-footer-social-link ${social.className}`}
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
