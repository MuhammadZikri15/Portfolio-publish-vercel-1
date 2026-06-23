import { useEffect, useRef } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

function Footer() {
  const footerRef = useRef(null);
  const controls = useAnimation();

  const isInView = useInView(footerRef, {
    amount: 0.25,
    margin: "0px 0px -60px 0px",
  });

  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-zikri-348200221/",
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

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 70,
      transition: {
        duration: 0.45,
        ease: "easeIn",
      },
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
      transition: {
        duration: 0.35,
        ease: "easeIn",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
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
      transition: {
        duration: 0.35,
        ease: "easeIn",
      },
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
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      ref={footerRef}
      className="pp-footer"
      variants={footerVariants}
      initial="hidden"
      animate={controls}
    >
      <style>
        {`
          .pp-footer,
          .pp-footer * {
            box-sizing: border-box;
          }

          .pp-footer {
            width: 100%;
            padding: 54px var(--container-x, 8%);
            background: #ffffff !important;
            color: #000000 !important;
            overflow: hidden;
            position: relative;
          }

          .pp-footer-inner {
            width: 100%;
            background: #f3e4c8;
            border: 2px solid #000000;
            border-radius: 24px;
            box-shadow: 8px 8px 0 #000000;
            padding: 34px 38px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 28px;
          }

          .pp-footer-brand {
            min-width: 0;
          }

          .pp-footer-brand h3 {
            display: inline-block;
            color: #000000;
            font-size: 22px;
            line-height: 1.25;
            margin: 0 0 9px;
            font-weight: 750;
            letter-spacing: 0.4px;
            border-bottom: none;
            padding-bottom: 0;
            transition: transform 0.28s ease;
          }

          .pp-footer-brand:hover h3 {
            transform: translateX(4px);
          }

          .pp-footer-brand p {
            color: rgba(0, 0, 0, 0.72);
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
            font-weight: 500;
          }

          .pp-footer-socials {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 16px;
            flex-wrap: wrap;
            flex-shrink: 0;
          }

          .pp-footer-social-link {
            width: 86px;
            height: 76px;
            border-radius: 18px;
            border: 2px solid #000000;
            color: #000000;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 9px;
            transition: all 0.28s ease;
            overflow: hidden;
            box-shadow: 5px 5px 0 #000000;
          }

          .pp-footer-social-link.linkedin {
            background: #dfd0b7;
          }

          .pp-footer-social-link.github {
            background: #f3c4a8;
          }

          .pp-footer-social-link.instagram {
            background: #f59e0b;
            box-shadow: 5px 5px 0 #92400e;
          }

          .pp-footer-social-link svg {
            width: 25px;
            height: 25px;
            display: block;
            transition: all 0.28s ease;
          }

          .pp-footer-social-link.linkedin svg {
            color: #0a66c2;
          }

          .pp-footer-social-link.github svg {
            color: #181717;
          }

          .pp-footer-social-link.instagram svg {
            color: #e4405f;
            background: #ffffff;
            border-radius: 8px;
            padding: 3px;
          }

          .pp-footer-social-link span {
            color: #000000;
            font-size: 12.5px;
            font-weight: 700;
            line-height: 1;
          }

          .pp-footer-social-link:hover {
            transform: translate(-3px, -5px);
            box-shadow: 8px 8px 0 #000000;
          }

          .pp-footer-social-link.instagram:hover {
            background: #fb923c;
            box-shadow: 8px 8px 0 #7c2d12;
          }

          .pp-footer-social-link.linkedin:hover {
            background: #d3c3a8;
          }

          .pp-footer-social-link.github:hover {
            background: #efb18d;
          }

          .pp-footer-social-link:hover svg {
            transform: rotate(-8deg) scale(1.12);
          }

          @media (max-width: 1200px) {
            .pp-footer {
              padding-left: var(--container-x, 6%);
              padding-right: var(--container-x, 6%);
            }

            .pp-footer-inner {
              padding: 32px;
            }
          }

          @media (max-width: 768px) {
            .pp-footer {
              padding: 46px var(--container-x, 5%);
            }

            .pp-footer-inner {
              padding: 30px 22px;
              border-radius: 22px;
              flex-direction: column;
              text-align: center;
              justify-content: center;
              gap: 24px;
              box-shadow: 6px 6px 0 #000000;
            }

            .pp-footer-brand h3 {
              font-size: 19px;
            }

            .pp-footer-brand p {
              font-size: 13px;
            }

            .pp-footer-brand:hover h3 {
              transform: translateY(-2px);
            }

            .pp-footer-socials {
              justify-content: center;
              gap: 12px;
              width: 100%;
            }

            .pp-footer-social-link {
              width: 76px;
              height: 66px;
              border-radius: 16px;
              gap: 7px;
              box-shadow: 4px 4px 0 #000000;
            }

            .pp-footer-social-link.instagram {
              box-shadow: 4px 4px 0 #92400e;
            }

            .pp-footer-social-link:hover {
              transform: translate(-2px, -4px);
              box-shadow: 6px 6px 0 #000000;
            }

            .pp-footer-social-link.instagram:hover {
              box-shadow: 6px 6px 0 #7c2d12;
            }

            .pp-footer-social-link svg {
              width: 22px;
              height: 22px;
            }

            .pp-footer-social-link span {
              font-size: 12px;
            }
          }

          @media (max-width: 480px) {
            .pp-footer {
              padding-top: 40px;
              padding-bottom: 42px;
            }

            .pp-footer-inner {
              padding: 28px 18px;
              border-radius: 20px;
              gap: 22px;
              box-shadow: 5px 5px 0 #000000;
            }

            .pp-footer-brand h3 {
              font-size: 18px;
            }

            .pp-footer-brand p {
              font-size: 12.5px;
            }

            .pp-footer-socials {
              gap: 10px;
            }

            .pp-footer-social-link {
              width: 70px;
              height: 62px;
              border-radius: 15px;
            }

            .pp-footer-social-link svg {
              width: 21px;
              height: 21px;
            }

            .pp-footer-social-link span {
              font-size: 11.5px;
            }
          }

          @media (max-width: 360px) {
            .pp-footer-inner {
              padding: 24px 14px;
            }

            .pp-footer-socials {
              gap: 8px;
            }

            .pp-footer-social-link {
              width: 64px;
              height: 58px;
            }

            .pp-footer-social-link svg {
              width: 19px;
              height: 19px;
            }

            .pp-footer-social-link span {
              font-size: 11px;
            }
          }
        `}
      </style>

      <div className="pp-footer-inner">
        <motion.div className="pp-footer-brand" variants={brandVariants}>
          <h3>MUHAMMAD ZIKRI</h3>
          <p>© 2026 Muhammad Zikri. Built with React and Vite.</p>
        </motion.div>

        <motion.div className="pp-footer-socials" variants={socialsVariants}>
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`pp-footer-social-link ${social.className}`}
              variants={socialItemVariants}
              whileTap={{ scale: 0.94 }}
              aria-label={`Open ${social.name}`}
            >
              {social.icon}
              <span>{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
