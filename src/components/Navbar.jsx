import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificate", href: "#certificate" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setOpen(false);

  const navbarVariants = {
    hidden: {
      opacity: 0,
      y: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    hidden: {
      opacity: 0,
      x: -35,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  const desktopLinksVariants = {
    hidden: {
      opacity: 0,
      x: 35,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const linkItemVariants = {
    hidden: {
      opacity: 0,
      y: -16,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -18,
      scale: 0.96,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.28,
        ease: "easeOut",
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      y: -18,
      scale: 0.96,
      filter: "blur(8px)",
      transition: {
        duration: 0.22,
        ease: "easeIn",
      },
    },
  };

  const mobileItemVariants = {
    hidden: {
      opacity: 0,
      x: -18,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.28,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <style>
        {`
          .mz-navbar,
          .mz-navbar * {
            box-sizing: border-box;
          }

          .mz-navbar {
            width: 100%;
            height: 84px;
            padding: 0 6%;
            background: #040e1f;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            overflow: hidden;
          }

          .mz-navbar::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: -40%;
            width: 40%;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(16, 185, 129, 0.9),
              transparent
            );
            animation: mz-navbar-line 4s ease-in-out infinite;
            pointer-events: none;
          }

          .mz-navbar-glow {
            position: absolute;
            width: 180px;
            height: 180px;
            border-radius: 999px;
            background: rgba(16, 185, 129, 0.1);
            filter: blur(70px);
            pointer-events: none;
            animation: mz-navbar-glow 5s ease-in-out infinite;
          }

          .mz-navbar-glow-left {
            left: -80px;
            top: -95px;
          }

          .mz-navbar-glow-right {
            right: -90px;
            bottom: -115px;
            animation-delay: 1.2s;
          }

          .mz-logo {
            display: flex;
            align-items: center;
            text-decoration: none;
            flex-shrink: 0;
            position: relative;
            z-index: 2;
          }

          .mz-logo img {
            width: clamp(130px, 14vw, 210px);
            max-height: 70px;
            object-fit: contain;
            display: block;
            transition: transform 0.3s ease, filter 0.3s ease;
          }

          .mz-logo:hover img {
            transform: translateY(-2px) scale(1.03);
            filter: drop-shadow(0 0 14px rgba(16, 185, 129, 0.2));
          }

          .mz-nav-links {
            display: flex;
            align-items: center;
            gap: 28px;
            position: relative;
            z-index: 2;
          }

          .mz-nav-link {
            color: #a7b0c0;
            font-size: 14px;
            font-weight: 500;
            text-decoration: none;
            padding-bottom: 6px;
            position: relative;
            transition: color 0.3s ease, transform 0.3s ease;
          }

          .mz-nav-link:hover {
            color: #10b981;
            transform: translateY(-2px);
          }

          .mz-nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: #10b981;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease;
          }

          .mz-nav-link:hover::after {
            transform: scaleX(1);
          }

          .mz-hire-btn {
            color: #10b981;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            border: 2px solid rgba(16, 185, 129, 0.75);
            border-radius: 10px;
            padding: 11px 22px;
            background: rgba(16, 185, 129, 0.08);
            transition: all 0.3s ease;
            white-space: nowrap;
          }

          .mz-hire-btn:hover {
            background: #10b981;
            color: #06111f;
            border-color: #10b981;
            transform: translateY(-3px);
            box-shadow: 0 0 24px rgba(16, 185, 129, 0.22);
          }

          .mz-menu-btn {
            display: none;
            width: 44px;
            height: 44px;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.1);
            background: rgba(255,255,255,0.04);
            align-items: center;
            justify-content: center;
            cursor: pointer;
            flex-shrink: 0;
            z-index: 1002;
            transition: all 0.3s ease;
          }

          .mz-menu-btn:hover {
            border-color: rgba(16, 185, 129, 0.55);
            background: rgba(16, 185, 129, 0.12);
            box-shadow: 0 0 22px rgba(16, 185, 129, 0.14);
          }

          .mz-hamburger {
            width: 22px;
            height: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .mz-hamburger span {
            width: 100%;
            height: 2px;
            background: #ffffff;
            border-radius: 999px;
            transition: all 0.3s ease;
          }

          .mz-hamburger.active span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
            background: #10b981;
          }

          .mz-hamburger.active span:nth-child(2) {
            opacity: 0;
          }

          .mz-hamburger.active span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
            background: #10b981;
          }

          .mz-mobile-backdrop {
            position: fixed;
            top: 84px;
            left: 0;
            width: 100%;
            height: calc(100vh - 84px);
            background: rgba(0, 0, 0, 0.45);
            backdrop-filter: blur(5px);
            z-index: 998;
          }

          .mz-mobile-menu {
            position: fixed;
            top: 96px;
            left: 16px;
            right: 16px;
            background: #071426;
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 18px;
            padding: 22px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 18px;
            z-index: 1001;
            box-shadow: 0 24px 60px rgba(0,0,0,0.35);
            overflow: hidden;
          }

          .mz-mobile-menu::before {
            content: "";
            position: absolute;
            top: 0;
            left: -45%;
            width: 45%;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(16, 185, 129, 0.9),
              transparent
            );
            animation: mz-navbar-line 3.2s ease-in-out infinite;
            pointer-events: none;
          }

          .mz-mobile-menu .mz-nav-link {
            width: 100%;
            font-size: 16px;
            padding: 10px 0;
          }

          .mz-mobile-menu .mz-hire-btn {
            width: 100%;
            text-align: center;
            margin-top: 6px;
          }

          @keyframes mz-navbar-line {
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

          @keyframes mz-navbar-glow {
            0%,
            100% {
              opacity: 0.55;
              transform: scale(1);
            }

            50% {
              opacity: 0.9;
              transform: scale(1.16);
            }
          }

          @media (max-width: 992px) {
            .mz-navbar {
              padding: 0 4%;
            }

            .mz-nav-links {
              gap: 20px;
            }

            .mz-logo img {
              width: 155px;
              max-height: 64px;
            }
          }

          @media (max-width: 768px) {
            .mz-navbar {
              height: 76px;
              padding: 0 18px;
            }

            .mz-logo img {
              width: 135px;
              max-height: 56px;
            }

            .mz-desktop-links {
              display: none;
            }

            .mz-menu-btn {
              display: inline-flex;
            }

            .mz-mobile-backdrop {
              top: 76px;
              height: calc(100vh - 76px);
            }

            .mz-mobile-menu {
              top: 88px;
            }
          }

          @media (max-width: 480px) {
            .mz-navbar {
              padding: 0 14px;
            }

            .mz-logo img {
              width: 125px;
              max-height: 52px;
            }

            .mz-mobile-menu {
              left: 12px;
              right: 12px;
              padding: 20px;
            }
          }
        `}
      </style>

      <motion.nav
        className="mz-navbar"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="mz-navbar-glow mz-navbar-glow-left"></span>
        <span className="mz-navbar-glow mz-navbar-glow-right"></span>

        <motion.a
          href="#home"
          className="mz-logo"
          onClick={closeMenu}
          variants={logoVariants}
          whileTap={{ scale: 0.96 }}
        >
          <img src="/logomz.png" alt="Muhammad Zikri Logo" />
        </motion.a>

        <motion.div
          className="mz-nav-links mz-desktop-links"
          variants={desktopLinksVariants}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="mz-nav-link"
              onClick={closeMenu}
              variants={linkItemVariants}
              whileHover={{
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.94 }}
            >
              {item.label}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            className="mz-hire-btn"
            onClick={closeMenu}
            variants={linkItemVariants}
            whileHover={{
              y: -3,
              scale: 1.04,
              transition: { duration: 0.22, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.94 }}
          >
            Hire Me
          </motion.a>
        </motion.div>

        <motion.button
          type="button"
          className="mz-menu-btn"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          variants={linkItemVariants}
          whileHover={{
            y: -2,
            scale: 1.05,
            transition: { duration: 0.22, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.92 }}
        >
          <span className={open ? "mz-hamburger active" : "mz-hamburger"}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="mz-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={closeMenu}
            />

            <motion.div
              className="mz-mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="mz-nav-link"
                  onClick={closeMenu}
                  variants={mobileItemVariants}
                  whileHover={{
                    x: 4,
                    color: "#10b981",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                className="mz-hire-btn"
                onClick={closeMenu}
                variants={mobileItemVariants}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  transition: { duration: 0.22, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Kontak Saya
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
