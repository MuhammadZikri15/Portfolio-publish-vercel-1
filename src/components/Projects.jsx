import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import k1 from "../assets/k1.png";
import k2 from "../assets/k2.png";
import k3 from "../assets/k3.png";
import k4 from "../assets/k4.png";

function Projects() {
  const [selectedWork, setSelectedWork] = useState(null);

  const prototypeUrlFashion =
    "https://www.figma.com/proto/tfybYYg201x8QCElcme2HK/WEB-Fashion?node-id=1022-64&t=IXhPNGV3W0r8XAV7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1022%3A64&show-proto-sidebar=1";

  const figmaEmbedUrlFashion =
    "https://embed.figma.com/proto/tfybYYg201x8QCElcme2HK/WEB-Fashion?node-id=1022-64&t=IXhPNGV3W0r8XAV7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1022%3A64&show-proto-sidebar=1&embed-host=share";

  const prototypeUrlRPL =
    "https://www.figma.com/proto/9m74K9sWkt9w7WED05vNGP/Tugas-RPL?node-id=2201-356&t=rJmekAc5UwBHTmwL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2201%3A356&show-proto-sidebar=1";

  const figmaEmbedUrlRPL =
    "https://embed.figma.com/proto/9m74K9sWkt9w7WED05vNGP/Tugas-RPL?node-id=2201-356&t=rJmekAc5UwBHTmwL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2201%3A356&show-proto-sidebar=1&embed-host=share";

  const projects = [
    {
      title: "WEB Fashion",
      tags: ["Figma"],
      desc: "A modern fashion website prototype designed with clean layout, product showcase, and responsive user flow.",
      github: "https://github.com/MuhammadZikri15/muhammad-zikri",
      demo: prototypeUrlFashion,
      embed: figmaEmbedUrlFashion,
      type: "figma",
    },
    {
      title: "Tugas RPL",
      tags: ["Figma"],
      desc: "An interactive system prototype created in Figma to present application flow, interface structure, and user interaction.",
      github: "https://github.com/MuhammadZikri15/muhammad-zikri",
      demo: prototypeUrlRPL,
      embed: figmaEmbedUrlRPL,
      type: "figma",
    },
    {
      title: "Portfolio Website",
      tags: ["Vite", "CSS"],
      desc: "A personal portfolio website with responsive layout and modern visual style.",
      github: "https://github.com/MuhammadZikri15/muhammad-zikri",
      demo: "https://muhammad-zikri.vercel.app",
      embed: "",
      type: "portfolio",
    },
  ];

  const contentWorks = [
    { title: "Instagram Feed 1", image: k1 },
    { title: "Instagram Feed 2", image: k2 },
    { title: "Instagram Feed 3", image: k3 },
    { title: "Instagram Feed 4", image: k4 },
  ];

  const FigmaIcon = () => (
    <svg
      className="mz-figma-icon"
      width="24"
      height="24"
      viewBox="0 0 38 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
        fill="#1ABCFE"
      />
      <path
        d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
        fill="#0ACF83"
      />
      <path
        d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
        fill="#FF7262"
      />
      <path
        d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
        fill="#F24E1E"
      />
      <path
        d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
        fill="#A259FF"
      />
    </svg>
  );

  return (
    <section id="projects" className="projects mz-projects-section">
      <style>
        {`
          .mz-projects-section {
            width: 100%;
            overflow: hidden;
          }

          .mz-projects-section > h2 {
            display: inline-block;
            color: #ffffff;
            border-bottom: 4px solid #10b981;
            padding-bottom: 10px;
            margin: 0 0 36px 0;
            font-size: 28px;
            line-height: 1.2;
          }

          .mz-project-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 28px;
            align-items: stretch;
          }

          .mz-project-card {
            width: 100%;
            min-width: 0;
            overflow: hidden;
            background: #111c2d;
            border-radius: 24px;
            border: 1px solid rgba(255, 255, 255, 0.06);
            transition: all 0.3s ease;
          }

          .mz-project-card:hover {
            box-shadow: 0 0 35px rgba(16, 185, 129, 0.12);
          }

          .mz-project-preview {
            position: relative;
            width: 100%;
            height: 245px;
            overflow: hidden;
            background:
              linear-gradient(180deg, rgba(16, 185, 129, 0.16), rgba(4, 14, 31, 0.88)),
              linear-gradient(135deg, #10243a, #0b3028);
          }

          .mz-project-preview::after {
            content: "";
            position: absolute;
            inset: 0;
            background:
              linear-gradient(180deg, rgba(4, 14, 31, 0.04), rgba(4, 14, 31, 0.68)),
              linear-gradient(90deg, rgba(16, 185, 129, 0.08), transparent);
            pointer-events: none;
            z-index: 2;
          }

          .mz-project-iframe {
            position: absolute;
            top: -18px;
            left: 0;
            width: 100%;
            height: 138%;
            border: none;
            opacity: 0.45;
            transform: scale(1.08);
            transform-origin: center top;
            pointer-events: none;
            filter: saturate(0.85) contrast(1.02);
            z-index: 1;
          }

          .mz-project-preview-placeholder {
            width: 100%;
            height: 100%;
            background:
              radial-gradient(circle at 78% 18%, rgba(16, 185, 129, 0.26), transparent 34%),
              radial-gradient(circle at 8% 0%, rgba(56, 189, 248, 0.16), transparent 28%),
              linear-gradient(135deg, #10243a, #103b34);
          }

          .mz-project-body {
            padding: 26px;
          }

          .mz-project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 16px;
          }

          .mz-project-tag {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #10b981;
            background: rgba(16, 185, 129, 0.12);
            padding: 7px 10px;
            border-radius: 7px;
            font-size: 12px;
            font-weight: 700;
            line-height: 1;
          }

          .mz-figma-icon {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
          }

          .mz-project-body h3 {
            margin-bottom: 12px;
            font-size: 22px;
            color: #ffffff;
            line-height: 1.35;
          }

          .mz-project-body p {
            color: #a7b0c0;
            line-height: 1.7;
            font-size: 15px;
            margin-bottom: 22px;
          }

          .mz-project-buttons {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 18px;
          }

          .mz-project-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            min-width: 120px;
            padding: 12px 20px;
            border-radius: 16px;
            font-size: 14px;
            font-weight: 700;
            line-height: 1;
            transition: all 0.3s ease;
            text-decoration: none;
          }

          .mz-project-btn svg {
            width: 18px;
            height: 18px;
            flex-shrink: 0;
            transition: color 0.3s ease;
          }

          .mz-github-btn {
            color: #d7dee9;
            background: rgba(255, 255, 255, 0.055);
            border: 2px solid rgba(255, 255, 255, 0.18);
          }

          .mz-github-btn:hover {
  background: #ffffff;
  color: #000000;
  border-color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 0 28px rgba(255, 255, 255, 0.16);
}

.mz-github-btn:hover svg {
  color: #000000;
}

          .mz-demo-btn {
            color: #10b981;
            background: rgba(16, 185, 129, 0.16);
            border: 2px solid rgba(16, 185, 129, 0.75);
          }

          .mz-demo-btn:hover {
            background: #10b981;
            color: #06111f;
            border-color: #10b981;
            transform: translateY(-3px);
            box-shadow: 0 0 28px rgba(16, 185, 129, 0.24);
          }

          .mz-content-work-section {
            margin-top: 100px;
            padding-top: 20px;
          }

          .mz-content-feed-title {
            text-align: left;
            margin-bottom: 46px;
          }

          .mz-content-feed-title h2 {
            display: inline-block;
            color: #ffffff;
            border-bottom: 4px solid #10b981;
            padding-bottom: 10px;
            margin: 0;
            font-size: 28px;
            line-height: 1.2;
          }

          .mz-content-feed-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 28px;
          }

          .mz-content-feed-card {
            width: 100%;
            padding: 0;
            overflow: hidden;
            cursor: pointer;
            border-radius: 18px;
            aspect-ratio: 4 / 5;
            background: #111c2d;
            border: 1px solid rgba(255, 255, 255, 0.06);
          }

          .mz-content-feed-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: transform 0.4s ease;
          }

          .mz-content-feed-card:hover .mz-content-feed-img {
            transform: scale(1.05);
          }

          .mz-content-modal {
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

          .mz-content-modal-box {
            position: relative;
            width: min(1080px, 100%);
            max-height: 92vh;
            background: #0b0f14;
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.12);
            box-shadow: 0 25px 80px rgba(0, 0, 0, 0.55);
          }

          .mz-content-modal-close {
            position: absolute;
            top: 14px;
            right: 14px;
            z-index: 2;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: none;
            background: rgba(0, 0, 0, 0.75);
            color: #ffffff;
            font-size: 24px;
            line-height: 38px;
            cursor: pointer;
          }

          .mz-content-modal-scroll {
            max-height: 92vh;
            overflow: auto;
            padding: 20px;
            background: #05080c;
          }

          .mz-content-modal-scroll img {
            width: 100%;
            height: auto;
            border-radius: 14px;
          }

          @media (max-width: 1200px) {
            .mz-project-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 24px;
            }

            .mz-project-preview {
              height: 230px;
            }

            .mz-content-feed-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 992px) {
            .mz-project-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .mz-project-preview {
              height: 230px;
            }

            .mz-content-feed-title {
              text-align: center;
            }
          }

          @media (max-width: 768px) {
            .mz-project-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .mz-project-preview {
              height: 220px;
            }

            .mz-project-iframe {
              height: 130%;
              top: -10px;
              transform: scale(1.04);
            }

            .mz-project-body {
              padding: 22px;
            }

            .mz-project-body h3 {
              font-size: 19px;
            }

            .mz-project-body p {
              font-size: 14.5px;
              line-height: 1.65;
            }

            .mz-project-buttons {
              flex-direction: column;
              gap: 10px;
            }

            .mz-project-btn {
              width: 100%;
              padding: 13px 18px;
            }

            .mz-content-work-section {
              margin-top: 70px;
            }

            .mz-content-feed-grid {
              grid-template-columns: 1fr;
              gap: 22px;
            }

            .mz-content-feed-card {
              max-width: 420px;
              margin: 0 auto;
            }

            .mz-content-modal {
              padding: 14px;
            }

            .mz-content-modal-box {
              border-radius: 16px;
            }

            .mz-content-modal-scroll {
              padding: 14px;
            }
          }

          @media (max-width: 480px) {
            .mz-project-preview {
              height: 200px;
            }

            .mz-project-iframe {
              height: 126%;
              top: -6px;
              transform: scale(1.02);
            }

            .mz-project-body {
              padding: 19px;
            }

            .mz-project-body h3 {
              font-size: 18px;
            }

            .mz-project-tag {
              font-size: 11px;
              padding: 6px 9px;
            }

            .mz-figma-icon {
              width: 18px;
              height: 18px;
            }

            .mz-project-btn {
              border-radius: 15px;
              font-size: 13.5px;
            }

            .mz-content-feed-card {
              max-width: 100%;
            }

            .mz-content-modal-close {
              width: 34px;
              height: 34px;
              font-size: 22px;
              line-height: 34px;
            }
          }

          @media (max-width: 360px) {
            .mz-project-preview {
              height: 180px;
            }

            .mz-project-body {
              padding: 16px;
            }

            .mz-project-body h3 {
              font-size: 17px;
            }

            .mz-project-body p {
              font-size: 13.8px;
            }
          }
        `}
      </style>

      <h2>Proyek</h2>

      <div className="mz-project-grid">
        {projects.map((project, index) => (
          <motion.article
            className="mz-project-card"
            key={project.title}
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="mz-project-preview">
              {project.embed ? (
                <iframe
                  src={project.embed}
                  title={`${project.title} Prototype Preview`}
                  className="mz-project-iframe"
                  allowFullScreen
                />
              ) : (
                <div className="mz-project-preview-placeholder"></div>
              )}
            </div>

            <div className="mz-project-body">
              <div className="mz-project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="mz-project-tag">
                    {tag === "Figma" && <FigmaIcon />}
                    {tag}
                  </span>
                ))}
              </div>

              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="mz-project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mz-project-btn mz-github-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mz-project-btn mz-demo-btn"
                >
                  Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mz-content-work-section">
        <div className="mz-content-feed-title">
          <h2>Content Feed Instagram</h2>
        </div>

        <div className="mz-content-feed-grid">
          {contentWorks.map((work, index) => (
            <motion.button
              type="button"
              className="mz-content-feed-card"
              key={work.title}
              onClick={() => setSelectedWork(work)}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <img
                src={work.image}
                alt={work.title}
                className="mz-content-feed-img"
                loading="lazy"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="mz-content-modal"
            onClick={() => setSelectedWork(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mz-content-modal-box"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button
                type="button"
                className="mz-content-modal-close"
                onClick={() => setSelectedWork(null)}
                aria-label="Close image preview"
              >
                ×
              </button>

              <div className="mz-content-modal-scroll">
                <img src={selectedWork.image} alt={selectedWork.title} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
