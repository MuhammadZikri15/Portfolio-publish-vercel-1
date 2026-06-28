import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const cvPdf = `${import.meta.env.BASE_URL}cvmzikri.pdf`;


  const logoSrc = `${import.meta.env.BASE_URL}logoz.png`;

  const navItems = [
    { label: "Tentang", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Proyek", href: "#projects" },
    { label: "Sertifikat", href: "#certificate" },
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
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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

/* ================= NAVBAR CSS ================= */

.pp-navbar,
.pp-navbar * {
  box-sizing: border-box;
}

.pp-navbar {
  width:100%;
  height:var(--nav-height,84px);
  padding-left:var(--container-x,8%) !important;
  padding-right:var(--container-x,8%) !important;
  background:#fff !important;
  color:#000 !important;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-bottom:1.8px solid #8f8f8f;
  position:fixed;
  top:0;
  left:0;
  z-index:1000;
}


/* logo */

.pp-navbar-logo{
  height:84px;
  display:flex;
  align-items:center;
  margin-left:-22px;
}

.pp-navbar-logo img{
  width:106px;
}


/* menu desktop */

.pp-navbar-links{
 display:flex;
 align-items:center;
 gap:18px;
}


.pp-navbar-link{
  position:relative;
  color:#000 !important;
  text-decoration:none;
  font-size:14px;
  font-weight:650;
  transition:.3s ease;
}

.pp-navbar-link::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-6px;
  width:0;
  height:3px;
  background:#f59e0b;
  border-radius:20px;
  transition:width .3s ease;
}

.pp-navbar-link:hover::after{
  width:100%;
}

.pp-navbar-mobile-menu .pp-navbar-link{
 width:100%;
 padding:14px 18px;
 border:2px solid #000;
 border-radius:16px;
 background:#fff;
 text-align:center;
 font-size:16px;
}


/* button */

.pp-navbar-hire-btn{
 color:#000;
 background:#f59e0b;
 border:2px solid #000;
 border-radius:40px;
 padding:12px 24px;
 font-weight:700;
 box-shadow:5px 5px 0 #92400e;
}



/* hamburger */

.pp-navbar-menu-btn{
 display:none;
 width:46px;
 height:46px;
 border:2px solid #000;
 background:#f3e4c8;
 border-radius:14px;
}


/* MOBILE MENU */

.pp-navbar-mobile-menu{
 position:fixed;
 top:98px;
 left:5%;
 right:5%;
 background:#f3e4c8;
 border:2px solid #000;
 border-radius:24px;
 padding:22px;
 z-index:1001;

 display:flex;
 flex-direction:column;
 gap:16px;

 box-shadow:6px 6px 0 #000;
}

.pp-navbar-mobile-menu .pp-navbar-hire-btn{
 width:100%;
 justify-content:center;
 display:flex;
}

/* HAMBURGER ICON */

.pp-navbar-hamburger{
 width:22px;
 height:18px;
 position:relative;
 display:flex;
 flex-direction:column;
 justify-content:space-between;
}

.pp-navbar-hamburger span{
 display:block;
 width:100%;
 height:2.5px;
 background:#000;
 border-radius:20px;
 transition:.3s ease;
}


/* animasi jadi X */

.pp-navbar-hamburger.active span:nth-child(1){
 transform:translateY(7.5px) rotate(45deg);
}

.pp-navbar-hamburger.active span:nth-child(2){
 opacity:0;
}

.pp-navbar-hamburger.active span:nth-child(3){
 transform:translateY(-7.5px) rotate(-45deg);
}


/* ================= RESPONSIVE ================= */


@media(max-width:768px){

.pp-navbar{
 padding-left:5%!important;
 padding-right:5%!important;
}


.pp-navbar-desktop-links{
 display:none;
}


.pp-navbar-menu-btn{
 display:flex;
 align-items:center;
 justify-content:center;
}


.pp-navbar-logo img{
 width:86px;
}


}



@media(max-width:480px){

.pp-navbar-logo img{
 width:78px;
}


.pp-navbar-mobile-menu{
 padding:18px;
}

}




@media(max-width:360px){

.pp-navbar-logo img{
 width:72px;
}


}



/* ================= CV MODAL TARUH DISINI ================= */


.pp-cv-overlay{

position:fixed;

inset:0;

background:rgba(0,0,0,.75);

display:flex;

align-items:center;

justify-content:center;

z-index:3000;

padding:20px;

}



.pp-cv-modal{
  width:min(850px,100%);
  max-height:90vh;
  background:white;
  border:3px solid #000;
  border-radius:20px;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  box-shadow:8px 8px 0 #000;
}




.pp-cv-header{

display:flex;

justify-content:space-between;

align-items:center;

padding:16px 20px;

border-bottom:2px solid #000;

}



.pp-cv-close{

width:42px;

height:42px;

border:2px solid #000;

border-radius:12px;

background:#f59e0b;

cursor:pointer;

font-weight:bold;

}



.pp-cv-content{
  flex:1;
  background:#fff;
  overflow:hidden;
}

.pp-cv-content iframe{
  width:100%;
  height:70vh;
  border:none;
}


.pp-cv-footer{

padding:16px;

text-align:center;

border-top:2px solid #000;

}



.pp-cv-download{

display:inline-block;

padding:12px 24px;

background:#f59e0b;

color:#000;

text-decoration:none;

font-weight:700;

border:2px solid #000;

border-radius:12px;

}



`}
      </style>

      <motion.nav
        className="pp-navbar"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="#home"
          className="pp-navbar-logo"
          onClick={closeMenu}
          variants={logoVariants}
          whileTap={{ scale: 0.96 }}
        >
          <img src={logoSrc} alt="Muhammad Zikri Logo" />
        </motion.a>

        <motion.div
          className="pp-navbar-links pp-navbar-desktop-links"
          variants={desktopLinksVariants}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="pp-navbar-link"
              onClick={closeMenu}
              variants={linkItemVariants}
              whileTap={{ scale: 0.94 }}
            >
              {item.label}
            </motion.a>
          ))}

          <motion.button
            type="button"
            className="pp-navbar-hire-btn"
            onClick={() => setShowCV(true)}
            variants={linkItemVariants}
            whileTap={{ scale: 0.94 }}
          >
            Resume
          </motion.button>
        </motion.div>

        <motion.button
          type="button"
          className="pp-navbar-menu-btn"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          variants={linkItemVariants}
          whileTap={{ scale: 0.92 }}
        >
          <span
            className={
              open ? "pp-navbar-hamburger active" : "pp-navbar-hamburger"
            }
          >
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
              className="pp-navbar-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={closeMenu}
            />

            <motion.div
              className="pp-navbar-mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="pp-navbar-link"
                  onClick={closeMenu}
                  variants={mobileItemVariants}
                  whileTap={{ scale: 0.96 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.button
                type="button"
                className="pp-navbar-hire-btn"
                onClick={() => {
                  closeMenu();
                  setShowCV(true);
                }}
              >
                Resume
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showCV && (
          <motion.div
            className="pp-cv-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCV(false)}
          >
            <motion.div
              className="pp-cv-modal"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pp-cv-header">
                <h3>Curriculum Vitae</h3>

                <button
                  className="pp-cv-close"
                  onClick={() => setShowCV(false)}
                >
                  ✕
                </button>
              </div>

              <div className="pp-cv-content">
                <iframe
                  src={cvPdf}
                  title="Curriculum Vitae"
                  width="100%"
                  height="700"
                  style={{
                    border: "none",
                    borderRadius: "10px",
                  }}
                />
              </div>

              <div className="pp-cv-footer">
                <a
                  href={cvPdf}
                  download="Muhammad_Zikri_CV.pdf"
                  className="pp-cv-download"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
