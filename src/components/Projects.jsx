import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";

import k1 from "../assets/k1.png";
import k2 from "../assets/k2.png";
import k3 from "../assets/k3.png";
import k4 from "../assets/k4.png";



function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [selectedFlutter, setSelectedFlutter] = useState(null);
  const [selectedFlutterImages, setSelectedFlutterImages] = useState([]);
  const [showMoreFeed, setShowMoreFeed] = useState(false);

  const publicImage = (imageName) => `${import.meta.env.BASE_URL}${imageName}`;

  const cardImage = publicImage("card1.png");
  const cardImage2 = publicImage("card2.png");
  const cardImage3 = publicImage("card3.png");
  const cardImage4 = publicImage("card4.png");
  const cardImage5 = publicImage("figma1.png");
  const cardImage6 = publicImage("figma2.png");
  const cardImage7 = publicImage("rt.png");
  const rt1 = publicImage("rt1.png");
  const rt2 = publicImage("rt2.png");
  const rt3 = publicImage("rt3.png");
  

  const prototypeUrlFashion =
    "https://www.figma.com/proto/tfybYYg201x8QCElcme2HK/WEB-Fashion?node-id=1022-64&t=IXhPNGV3W0r8XAV7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1022%3A64&show-proto-sidebar=1";

  const prototypeUrlRPL =
    "https://www.figma.com/proto/9m74K9sWkt9w7WED05vNGP/Tugas-RPL?node-id=2201-356&t=rJmekAc5UwBHTmwL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2201%3A356&show-proto-sidebar=1";

  const FigmaIcon = () => (
    <svg
      className="pp-project-icon-svg"
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
        d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.2533 0 47.5Z"
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

  const FlutterIcon = () => (
    <svg
      className="pp-project-icon-svg"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M34 6L10 30L18 38L50 6H34Z" fill="#54C5F8" />
      <path d="M34 30L22 42L34 54H50L38 42L50 30H34Z" fill="#01579B" />
      <path d="M22 42L30 34L38 42L30 50L22 42Z" fill="#29B6F6" />
      <path d="M34 54H50L38 42L30 50L34 54Z" fill="#0D47A1" />
    </svg>
  );

  const LaravelIcon = () => (
    <img
      className="pp-project-icon-img"
      src="https://cdn.simpleicons.org/laravel/FF2D20"
      alt="Laravel"
      loading="lazy"
    />
  );

  const ProjectIcon = ({ icon }) => {
    if (icon === "figma") return <FigmaIcon />;
    if (icon === "flutter") return <FlutterIcon />;
    if (icon === "laravel") return <LaravelIcon />;
    return <FigmaIcon />;
  };

  const mainProjects = [
    {
      title: "Kasirku",
      category: "Flutter Mobile App",
      image: cardImage,
      type: "flutter",
      icon: "flutter",
    },
    {
      title: "WEB Fashion",
      category: "Figma Prototype",
      image: cardImage5,
      type: "figma",
      icon: "figma",
      detailUrl: prototypeUrlFashion,
    },
    {
      title: "Aplikasi Mobile RT Smart",
      category: "Flutter Mobile App",
      image: cardImage7,
      type: "flutter",
      icon: "flutter",
    },
  ];

  const moreProjects = [
    
    {
      title: "Dashboard Design",
      category: "Figma Prototype",
      image: cardImage6,
      type: "figma",
      icon: "figma",
      detailUrl: prototypeUrlRPL,
    },
    
  ];

  const flutterProjects = {
    Kasirku: [
      {
        title: "Kasirku Screen 1",
        image: cardImage,
      },
      {
        title: "Kasirku Screen 2",
        image: cardImage2,
      },
      {
        title: "Kasirku Screen 3",
        image: cardImage3,
      },
      {
        title: "Kasirku Screen 4",
        image: cardImage4,
      },
    ],

    "Aplikasi Mobile RT Smart": [
      {
        title: "RT Smart Screen 1",
        image: rt1,
      },
      {
        title: "RT Smart Screen 2",
        image: rt2,
      },
      {
        title: "RT Smart Screen 3",
        image: rt3,
      },
    ],
  };

  const mainInstagramFeeds = [
    {
      title: "Content Feed 1",
      image: k1,
    },
    {
      title: "Content Feed 2",
      image: k2,
    },
    {
      title: "Content Feed 3",
      image: k3,
    },
    {
      title: "Content Feed 4",
      image: k4,
    },
  ];


  const visibleProjects = showMore
    ? [...mainProjects, ...moreProjects]
    : mainProjects;

  const visibleInstagramFeeds = showMoreFeed
    ? [...mainInstagramFeeds, ...moreInstagramFeeds]
    : mainInstagramFeeds;

  const scrollToProjects = () => {
    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const scrollToFeed = () => {
    setTimeout(() => {
      document
        .getElementById("instagram-feed")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const handleDetailClick = (project) => {
    if (project.type === "figma" || project.type === "laravel") {
      window.open(project.detailUrl, "_blank", "noopener,noreferrer");
      return;
    }

    if (project.type === "flutter") {
      setSelectedFlutter(project);

      setSelectedFlutterImages(flutterProjects[project.title] || []);

      scrollToProjects();
    }
  };

  const handleShowMore = () => {
    setShowMore(true);
    setSelectedFlutter(null);
    scrollToProjects();
  };

  const handleBackFromMore = () => {
    setShowMore(false);
    setSelectedFlutter(null);
    scrollToProjects();
  };

  const handleBackFromFlutter = () => {
    setSelectedFlutter(null);
    scrollToProjects();
  };

  const handleShowMoreFeed = () => {
    setShowMoreFeed(true);
    scrollToFeed();
  };

  const handleBackFeed = () => {
    setShowMoreFeed(false);
    scrollToFeed();
  };

  const ProjectCard = ({ project, index }) => (
    <motion.article
      className="pp-projects-card"
      key={project.title}
      initial={{ opacity: 0, y: 45, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    >
      <div className="pp-projects-image-box">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>

      <div className="pp-projects-body">
        <div className="pp-projects-info-wrap">
          <div className="pp-projects-icon-box">
            <ProjectIcon icon={project.icon} />
          </div>

          <div className="pp-projects-info">
            <span className="pp-projects-category">{project.category}</span>
            <h3>{project.title}</h3>
          </div>
        </div>

        <button
          type="button"
          className="pp-projects-detail-btn"
          onClick={() => handleDetailClick(project)}
        >
          Detail
        </button>
      </div>
    </motion.article>
  );

  const InstagramFeedCard = ({ item, index }) => (
    <motion.article
      className="pp-instagram-card"
      key={`${item.title}-${index}`}
      initial={{ opacity: 0, y: 45, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    >
      <div className="pp-instagram-image-box">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
    </motion.article>
  );

  return (
    <section id="projects" className="pp-projects">
      <style>
        {`
          .pp-projects,
          .pp-projects * {
            box-sizing: border-box;
          }

          .pp-projects {
            width: 100%;
            padding: 70px var(--container-x, 8%);
            background: #ffffff !important;
            color: #000000 !important;
            overflow: hidden;
          }

          .pp-projects-top,
          .pp-instagram-top {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 18px;
            margin-bottom: 38px;
          }

          .pp-projects-title,
          .pp-projects-detail-title,
          .pp-instagram-title {
            display: inline-block;
            color: #000000 !important;
            border-bottom: 4px solid #f59e0b;
            padding-bottom: 10px;
            margin: 0;
            font-size: 30px;
            font-weight: 750;
            line-height: 1.2;
          }

          .pp-projects-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 28px;
            align-items: start;
          }

          .pp-instagram-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 24px;
            align-items: start;
          }

          .pp-projects-card,
          .pp-instagram-card {
            width: 100%;
            min-width: 0;
            overflow: hidden;
            background: #f3e4c8;
            border-radius: 18px;
            border: 2px solid #000000;
            color: #000000;
            box-shadow: 7px 7px 0 #000000;
            transition: all 0.3s ease;
          }

          .pp-projects-card:hover,
          .pp-instagram-card:hover {
            transform: translate(-4px, -4px);
            box-shadow: 11px 11px 0 #000000;
          }

          .pp-projects-card:nth-child(3n + 1) {
            background: #dfd0b7;
          }

          .pp-projects-card:nth-child(3n + 2) {
            background: #f3c4a8;
          }

          .pp-projects-card:nth-child(3n) {
            background: #f3e4c8;
          }

          .pp-instagram-card:nth-child(4n + 1) {
            background: #dfd0b7;
          }

          .pp-instagram-card:nth-child(4n + 2) {
            background: #f3c4a8;
          }

          .pp-instagram-card:nth-child(4n + 3) {
            background: #f3e4c8;
          }

          .pp-instagram-card:nth-child(4n) {
            background: #f59e0b;
          }

          .pp-projects-image-box,
          .pp-instagram-image-box {
            width: 100%;
            padding: 12px;
            background: rgba(255, 255, 255, 0.5);
            border-bottom: 2px solid #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
          }

          .pp-instagram-image-box {
            border-bottom: none;
            background: #ffffff;
          }

          .pp-projects-image-box img,
          .pp-instagram-image-box img {
            width: 100%;
            height: auto;
            object-fit: contain;
            object-position: center;
            display: block;
            border-radius: 12px;
          }

          .pp-projects-body {
  padding: 15px 16px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  background: transparent;
  min-height: 120px;
}

         .pp-projects-info-wrap {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  transform: translateY(3px);
}

          .pp-projects-icon-box {
            width: 42px;
            height: 42px;
            min-width: 42px;
            border-radius: 12px;
            border: 2px solid #000000;
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.28);
          }

          .pp-project-icon-svg,
          .pp-project-icon-img {
            width: 22px;
            height: 22px;
            display: block;
            object-fit: contain;
          }

          .pp-projects-info {
  min-width: 0;
  transform: translateY(14px);
}

          .pp-projects-category {
            display: block;
            margin-bottom: 4px;
            color: rgba(0, 0, 0, 0.68);
            font-size: 12px;
            font-weight: 650;
            line-height: 1.25;
          }

 .pp-projects-info h3 {
  margin: 0;
  color: #000000;
  font-size: 18.5px;
  line-height: 1.2;
  font-weight: 720;
  overflow-wrap: anywhere;

  min-height: 48px;
  display: flex;
  align-items: flex-start;
}

          .pp-projects-detail-btn,
          .pp-projects-more-btn,
          .pp-projects-back-btn,
          .pp-instagram-more-btn,
          .pp-instagram-back-btn {
            border: 2px solid #000000;
            color: #000000;
            font-weight: 700;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.28s ease;
          }

          .pp-projects-detail-btn {
            flex-shrink: 0;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 86px;
            padding: 10px 14px;
            border-radius: 30px;
            background: #ffffff;
            font-size: 13px;
            line-height: 1;
            box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.22);
          }

          .pp-projects-detail-btn:hover {
            background: #f59e0b;
            transform: translate(2px, 2px);
            box-shadow: 1px 1px 0 #7c2d12;
          }

          .pp-projects-more-wrapper,
          .pp-instagram-more-wrapper {
            width: 100%;
            margin-top: 42px;
            display: flex;
            justify-content: center;
          }

          .pp-projects-more-btn,
          .pp-instagram-more-btn {
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

          .pp-projects-more-btn:hover,
          .pp-instagram-more-btn:hover {
            background: #fb923c;
            transform: translate(3px, 3px);
            box-shadow: 3px 3px 0 #7c2d12;
          }

          .pp-projects-back-btn,
          .pp-instagram-back-btn {
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

          .pp-projects-back-btn:hover,
          .pp-instagram-back-btn:hover {
            background: #ead6b0;
            transform: translate(3px, 3px);
            box-shadow: 2px 2px 0 #000000;
          }

          .pp-projects-detail-page {
            width: 100%;
          }

          .pp-projects-flutter-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 24px;
            align-items: start;
          }

          .pp-projects-flutter-card {
            width: 100%;
            overflow: hidden;
            border-radius: 18px;
            border: 2px solid #000000;
            background: #f3e4c8;
            box-shadow: 6px 6px 0 #000000;
            transition: all 0.3s ease;
          }

          .pp-projects-flutter-card:hover {
            transform: translate(-3px, -3px);
            box-shadow: 9px 9px 0 #000000;
          }

          .pp-projects-flutter-card:nth-child(4n + 1) {
            background: #dfd0b7;
          }

          .pp-projects-flutter-card:nth-child(4n + 2) {
            background: #f3c4a8;
          }

          .pp-projects-flutter-card:nth-child(4n + 3) {
            background: #f3e4c8;
          }

          .pp-projects-flutter-card:nth-child(4n) {
            background: #f59e0b;
            box-shadow: 6px 6px 0 #92400e;
          }

          .pp-projects-flutter-card:nth-child(4n):hover {
            box-shadow: 9px 9px 0 #7c2d12;
          }

          .pp-projects-flutter-image {
            width: 100%;
            padding: 10px;
            background: #ffffff;
            border-bottom: 2px solid #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
          }

          .pp-projects-flutter-image img {
            width: 100%;
            height: auto;
            object-fit: contain;
            object-position: center;
            display: block;
            border-radius: 12px;
          }

          .pp-projects-flutter-card h3 {
            margin: 0;
            padding: 14px;
            color: #000000;
            font-size: 15px;
            font-weight: 700;
            line-height: 1.3;
            text-align: center;
          }

          .pp-instagram-feed {
            width: 100%;
            margin-top: 58px;
            padding-top: 8px;
            scroll-margin-top: calc(var(--nav-height, 84px) + 18px);
          }

          @media (max-width: 1200px) {
            .pp-projects-grid {
              gap: 22px;
            }

            .pp-instagram-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 18px;
            }

            .pp-projects-flutter-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 18px;
            }

            .pp-projects-info h3 {
              font-size: 17px;
            }
          }

          @media (max-width: 992px) {
            .pp-projects {
              padding: 64px var(--container-x, 6%);
            }

            .pp-projects-grid,
            .pp-instagram-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .pp-projects-flutter-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 768px) {
            .pp-projects {
              padding: 56px var(--container-x, 5%);
            }

            .pp-projects-title,
            .pp-projects-detail-title,
            .pp-instagram-title {
              font-size: 28px;
            }

            .pp-projects-top,
            .pp-instagram-top {
              align-items: flex-start;
            }

            .pp-projects-grid,
            .pp-instagram-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .pp-projects-body {
              padding: 14px 15px 15px;
            }

            .pp-projects-info h3 {
              font-size: 18px;
            }

            .pp-projects-category {
              font-size: 12px;
            }

            .pp-projects-detail-btn {
              min-width: 84px;
              padding: 10px 13px;
            }

            .pp-instagram-feed {
              margin-top: 52px;
            }
          }

          @media (max-width: 480px) {
            .pp-projects {
              padding-top: 46px;
              padding-bottom: 46px;
            }

            .pp-projects-title,
            .pp-projects-detail-title,
            .pp-instagram-title {
              font-size: 26px;
            }

            .pp-projects-card,
            .pp-instagram-card {
              border-radius: 16px;
              box-shadow: 5px 5px 0 #000000;
            }

            .pp-projects-card:hover,
            .pp-instagram-card:hover {
              transform: translate(-2px, -2px);
              box-shadow: 7px 7px 0 #000000;
            }

            .pp-projects-image-box,
            .pp-instagram-image-box {
              padding: 10px;
            }

            .pp-projects-body {
              align-items: center;
              gap: 10px;
            }

            .pp-projects-info-wrap {
              gap: 10px;
            }

            .pp-projects-icon-box {
              width: 38px;
              height: 38px;
              min-width: 38px;
              border-radius: 10px;
            }

            .pp-project-icon-svg,
            .pp-project-icon-img {
              width: 20px;
              height: 20px;
            }

            .pp-projects-info h3 {
              font-size: 16px;
            }

            .pp-projects-detail-btn {
              min-width: 78px;
              padding: 9px 12px;
              font-size: 12.5px;
            }

            .pp-projects-more-btn,
            .pp-projects-back-btn,
            .pp-instagram-more-btn,
            .pp-instagram-back-btn {
              width: auto;
            }

            .pp-projects-flutter-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 14px;
            }

            .pp-projects-flutter-card {
              border-radius: 14px;
              box-shadow: 4px 4px 0 #000000;
            }

            .pp-projects-flutter-card:nth-child(4n) {
              box-shadow: 4px 4px 0 #92400e;
            }

            .pp-projects-flutter-card h3 {
              padding: 11px 8px;
              font-size: 12.5px;
            }
          }

          @media (max-width: 390px) {
            .pp-projects-top,
            .pp-instagram-top {
              flex-direction: column;
            }

            .pp-projects-back-btn,
            .pp-instagram-back-btn {
              width: 100%;
            }
          }

          @media (max-width: 360px) {
            .pp-projects-body {
              flex-direction: column;
              align-items: flex-start;
            }

            .pp-projects-detail-btn {
              width: 100%;
            }

            .pp-projects-flutter-grid {
              gap: 10px;
            }

            .pp-projects-flutter-card h3 {
              font-size: 11.5px;
            }
          }
        `}
      </style>

      <AnimatePresence mode="wait">
        {selectedFlutter ? (
          <motion.div
            key="flutter-detail"
            className="pp-projects-detail-page"
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -45 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="pp-projects-top">
              <h2 className="pp-projects-detail-title">
                {selectedFlutter.title}
              </h2>

              <button
                type="button"
                className="pp-projects-back-btn"
                onClick={handleBackFromFlutter}
              >
                <FaArrowLeft />
                Kembali
              </button>
            </div>

            <div className="pp-projects-flutter-grid">
              {selectedFlutterImages.map((item, index) => (
                <motion.article
                  className="pp-projects-flutter-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <div className="pp-projects-flutter-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>

                  <h3>{item.title}</h3>
                </motion.article>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="project-list"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="pp-projects-top">
              <h2 className="pp-projects-title">Proyek</h2>

              {showMore && (
                <button
                  type="button"
                  className="pp-projects-back-btn"
                  onClick={handleBackFromMore}
                >
                  <FaArrowLeft />
                  Kembali
                </button>
              )}
            </div>

            <div className="pp-projects-grid">
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  project={project}
                  index={index}
                  key={project.title}
                />
              ))}
            </div>

            {!showMore && (
              <div className="pp-projects-more-wrapper">
                <button
                  type="button"
                  className="pp-projects-more-btn"
                  onClick={handleShowMore}
                >
                  Lihat Lainnya
                </button>
              </div>
            )}

            <div id="instagram-feed" className="pp-instagram-feed">
              <div className="pp-instagram-top">
                <h2 className="pp-instagram-title">Feed Instagram</h2>

                {showMoreFeed && (
                  <button
                    type="button"
                    className="pp-instagram-back-btn"
                    onClick={handleBackFeed}
                  >
                    <FaArrowLeft />
                    Kembali
                  </button>
                )}
              </div>

              <div className="pp-instagram-grid">
                {visibleInstagramFeeds.map((item, index) => (
                  <InstagramFeedCard
                    item={item}
                    index={index}
                    key={`${item.title}-${index}`}
                  />
                ))}
              </div>

              {!showMoreFeed && (
                <div className="pp-instagram-more-wrapper"></div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
