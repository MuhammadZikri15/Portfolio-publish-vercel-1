import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Certificate",
      href: "#certificate",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <motion.nav
      className="navbar mz-navbar"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <style>
        {`
          .mz-navbar {
            width: 100%;
            height: 84px;
            padding: 0 8%;
            background: #040e1f;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
          }

          .mz-logo {
            display: flex;
            align-items: center;
            height: 100%;
            flex-shrink: 0;
            text-decoration: none;
            border: none;
            outline: none;
          }

          .mz-logo img {
            width: clamp(150px, 15vw, 230px);
            height: auto;
            max-height: 96px;
            object-fit: contain;
            margin-left: -35px;
            display: block;
          }

          .mz-nav-links {
            display: flex;
            align-items: center;
            gap: 28px;
          }

          .mz-nav-link {
            position: relative;
            display: inline-block;
            color: #a7b0c0;
            font-size: 14px;
            font-weight: 600;
            white-space: nowrap;
            padding-bottom: 6px;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .mz-nav-link:hover {
            color: #10b981;
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
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 11px 22px;
            background: transparent;
            border: 2px solid #059669;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 700;
            color: #10b981;
            text-decoration: none;
            white-space: nowrap;
            transition: all 0.3s ease;
          }

          .mz-hire-btn:hover {
            background: #059669;
            color: #ffffff;
            transform: translateY(-2px);
            box-shadow: 0 0 24px rgba(16, 185, 129, 0.18);
          }

          .mz-menu-btn {
            display: none;
            width: 44px;
            height: 44px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.04);
            color: #ffffff;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            z-index: 1002;
          }

          .mz-menu-btn:hover {
            border-color: rgba(16, 185, 129, 0.4);
            background: rgba(16, 185, 129, 0.12);
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
            transform-origin: center;
          }

          .mz-menu-btn.active .mz-hamburger span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
            background: #10b981;
          }

          .mz-menu-btn.active .mz-hamburger span:nth-child(2) {
            opacity: 0;
            transform: scaleX(0);
          }

          .mz-menu-btn.active .mz-hamburger span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
            background: #10b981;
          }

          .mz-mobile-backdrop {
            display: none;
          }

          @media (max-width: 1200px) {
            .mz-navbar {
              padding-left: 6%;
              padding-right: 6%;
            }

            .mz-logo img {
              width: 200px;
              margin-left: -30px;
            }

            .mz-nav-links {
              gap: 20px;
            }
          }

          @media (max-width: 992px) {
            .mz-navbar {
              height: 80px;
            }

            .mz-logo img {
              width: 170px;
              max-height: 75px;
              margin-left: -26px;
            }

            .mz-nav-links {
              gap: 16px;
            }

            .mz-nav-link {
              font-size: 13px;
            }

            .mz-hire-btn {
              padding: 10px 16px;
              font-size: 14px;
            }
          }

          @media (max-width: 768px) {
            .mz-navbar {
              height: 76px;
              padding-left: 6%;
              padding-right: 6%;
            }

            .mz-logo img {
              width: 145px;
              max-height: 65px;
              margin-left: -22px;
            }

            .mz-menu-btn {
              display: inline-flex;
            }

            .mz-desktop-links {
              display: none;
            }

            .mz-mobile-backdrop {
              display: block;
              position: fixed;
              inset: 76px 0 0;
              background: rgba(0, 0, 0, 0.45);
              backdrop-filter: blur(3px);
              z-index: 998;
            }

            .mz-mobile-menu {
              position: fixed;
              top: 76px;
              left: 0;
              width: 100%;
              background: #040e1f;
              border-bottom: 1px solid rgba(255, 255, 255, 0.08);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
              padding: 22px 6%;
              z-index: 999;
              display: flex;
              flex-direction: column;
              gap: 16px;
            }

            .mz-mobile-menu .mz-nav-link {
              width: 100%;
              padding: 12px 14px;
              border-radius: 12px;
              background: rgba(255, 255, 255, 0.035);
              border: 1px solid rgba(255, 255, 255, 0.06);
              font-size: 14px;
            }

            .mz-mobile-menu .mz-nav-link::after {
              display: none;
            }

            .mz-mobile-menu .mz-nav-link:hover {
              color: #10b981;
              background: rgba(16, 185, 129, 0.1);
              border-color: rgba(16, 185, 129, 0.28);
            }

            .mz-mobile-menu .mz-hire-btn {
              width: 100%;
              padding: 13px 18px;
              margin-top: 4px;
            }
          }

          @media (max-width: 480px) {
            .mz-navbar {
              height: 74px;
              padding-left: 5%;
              padding-right: 5%;
            }

            .mz-logo img {
              width: 132px;
              max-height: 58px;
              margin-left: -18px;
            }

            .mz-menu-btn {
              width: 42px;
              height: 42px;
              border-radius: 11px;
            }

            .mz-mobile-backdrop {
              inset: 74px 0 0;
            }

            .mz-mobile-menu {
              top: 74px;
              padding: 20px 5%;
              gap: 13px;
            }

            .mz-mobile-menu .mz-nav-link {
              padding: 11px 13px;
              font-size: 13.5px;
            }

            .mz-mobile-menu .mz-hire-btn {
              padding: 12px 16px;
              font-size: 14px;
            }
          }

          @media (max-width: 360px) {
            .mz-logo img {
              width: 120px;
              margin-left: -14px;
            }

            .mz-menu-btn {
              width: 40px;
              height: 40px;
            }

            .mz-hamburger {
              width: 20px;
              height: 15px;
            }
          }
        `}
      </style>

      <a href="#home" className="mz-logo" onClick={closeMenu}>
        <img src="/logomz.png" alt="Muhammad Zikri Logo" />
      </a>

      <div className="mz-nav-links mz-desktop-links">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="mz-nav-link"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}

        <a href="#contact" className="mz-hire-btn" onClick={closeMenu}>
          Hire Me
        </a>
      </div>

      <button
        type="button"
        className={`mz-menu-btn ${open ? "active" : ""}`}
        onClick={() => setOpen((current) => !current)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        <span className="mz-hamburger" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="mz-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              className="mz-mobile-menu"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="mz-nav-link"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}

              <a href="#contact" className="mz-hire-btn" onClick={closeMenu}>
                Hire Me
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
