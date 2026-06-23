import { motion } from "framer-motion";

function Skill() {
  const MicrosoftOfficeIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M14 10L34 4L52 12V52L34 60L14 54V10Z" fill="#D83B01" />
      <path d="M34 4V60L52 52V12L34 4Z" fill="#F25022" />
      <path d="M22 19L34 15L44 20V44L34 49L22 45V19Z" fill="#FF8C00" />
      <path d="M14 10L34 18V49L14 54V10Z" fill="#B7472A" />
    </svg>
  );

  const ExcelIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M38 8H56C58.2 8 60 9.8 60 12V52C60 54.2 58.2 56 56 56H38V8Z"
        fill="#21A366"
      />
      <path d="M38 8H56V20H38V8Z" fill="#33C481" />
      <path d="M38 20H56V32H38V20Z" fill="#107C41" />
      <path d="M38 32H56V44H38V32Z" fill="#185C37" />
      <path d="M38 44H56V56H38V44Z" fill="#107C41" />
      <path d="M6 14L40 8V56L6 50V14Z" fill="#107C41" />
      <path
        d="M16 23H22L26 30L30 23H36L29 33L36 44H30L26 36L21 44H15L23 33L16 23Z"
        fill="white"
      />
    </svg>
  );

  const FigmaIcon = () => (
    <svg
      width="46"
      height="46"
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

  const FlutterIcon = () => (
    <svg
      width="46"
      height="46"
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

  const DartIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 18L26 6H50L58 14V38L46 50H22L6 34V26L14 18Z"
        fill="#0175C2"
      />
      <path d="M14 18L46 50H22L6 34V26L14 18Z" fill="#13B9FD" />
      <path d="M26 6L58 38V14L50 6H26Z" fill="#40C4FF" />
      <path d="M14 18H38L58 38L46 50L14 18Z" fill="#01579B" />
      <path d="M14 18L6 26V34L22 50H46L14 18Z" fill="#29B6F6" />
    </svg>
  );

  const HtmlIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 6H54L50 54L32 60L14 54L10 6Z" fill="#E34F26" />
      <path d="M32 10H50L47 51L32 56V10Z" fill="#EF652A" />
      <path
        d="M21 18H43L42.5 24H27.5L28 30H42L40.8 45L32 48L23.2 45L22.6 37H28.5L28.8 40.5L32 41.6L35.2 40.5L35.6 35.8H22.4L21 18Z"
        fill="white"
      />
    </svg>
  );

  const CssIcon = () => (
    <svg
      width="46"
      height="46"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 6H54L50 54L32 60L14 54L10 6Z" fill="#1572B6" />
      <path d="M32 10H50L47 51L32 56V10Z" fill="#33A9DC" />
      <path
        d="M21 18H43L42.4 24H28L28.4 29.5H42L40.8 45L32 48L23.2 45L22.6 37H28.5L28.8 40.5L32 41.6L35.2 40.5L35.6 35.5H22.3L21 18Z"
        fill="white"
      />
      <path d="M28 24H42.4L42 29.5H28.4L28 24Z" fill="#EBEBEB" />
    </svg>
  );

  const skillList = [
    "(Digital) Product Design",
    "User Experience Design",
    "User Testing",
    "User Interface Design",
    "User Research",
    "Design System Building",
  ];

  const tools = [
    {
      name: "Figma",
      description: "UI/UX Design & Prototyping",
      icon: <FigmaIcon />,
    },
    {
      name: "Microsoft Office",
      description: "Dokumen & Presentasi",
      icon: <MicrosoftOfficeIcon />,
    },
    {
      name: "Microsoft Excel",
      description: "Data & Spreadsheet",
      icon: <ExcelIcon />,
    },
    {
      name: "Laravel",
      description: "Web Framework",
      icon: "https://cdn.simpleicons.org/laravel/FF2D20",
    },
    {
      name: "Flutter",
      description: "Mobile App Development",
      icon: <FlutterIcon />,
    },
    {
      name: "Dart",
      description: "Mobile Programming",
      icon: <DartIcon />,
    },
    {
      name: "HTML",
      description: "Website Structure",
      icon: <HtmlIcon />,
    },
    {
      name: "CSS",
      description: "Website Styling",
      icon: <CssIcon />,
    },
    {
      name: "MySQL",
      description: "Database Management",
      icon: "https://cdn.simpleicons.org/mysql/4479A1",
    },
    {
      name: "phpMyAdmin",
      description: "Database Dashboard",
      icon: "https://cdn.simpleicons.org/phpmyadmin/6C78AF",
    },
  ];

  return (
    <motion.section
      id="skills"
      className="pp-skill"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8 }}
    >
      <style>
        {`
          .pp-skill,
          .pp-skill * {
            box-sizing: border-box;
          }

          .pp-skill {
            width: 100%;
            overflow: hidden;
            background: #ffffff !important;
            color: #000000 !important;
            padding: 80px var(--container-x, 8%);
          }

          .pp-skill-title {
            text-align: left;
            margin-bottom: 36px;
          }

          .pp-skill-title h2 {
            display: inline-block;
            color: #000000 !important;
            border-bottom: 4px solid #f59e0b;
            padding-bottom: 10px;
            margin: 0;
            font-size: 30px;
            font-weight: 800;
            line-height: 1.2;
          }

          .pp-skill-main {
            margin-bottom: 86px;
          }

          .pp-skill-main-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
            align-items: stretch;
          }

          .pp-skill-main-card {
            position: relative;
            min-height: 96px;
            padding: 24px 28px;
            border: 2px solid #000000;
            border-radius: 14px;
            color: #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            box-shadow: 4px 4px 0 #000000;
            transition: all 0.3s ease;
          }

          .pp-skill-main-card:hover {
            transform: translate(-3px, -3px);
            box-shadow: 8px 8px 0 #000000;
          }

          .pp-skill-main-card h3 {
            margin: 0;
            color: #000000;
            font-size: 16px;
            font-weight: 800;
            line-height: 1.45;
          }

          .pp-skill-main-card:nth-child(1),
          .pp-skill-main-card:nth-child(5) {
            background: #f3c4a8;
          }

          .pp-skill-main-card:nth-child(2),
          .pp-skill-main-card:nth-child(4) {
            background: #dca733;
          }

          .pp-skill-main-card:nth-child(3),
          .pp-skill-main-card:nth-child(6) {
            background: #dfd0b7;
          }

          .pp-tools-main {
            position: relative;
          }

          .pp-tools-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            column-gap: 64px;
            row-gap: 34px;
            align-items: start;
          }

          .pp-tool-item {
            min-width: 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 16px;
            text-align: left;
            color: #000000;
            background: transparent;
            border: none;
            box-shadow: none;
            transition: transform 0.3s ease;
          }

          .pp-tool-item:hover {
            transform: translateY(-4px);
          }

          .pp-tool-icon {
            width: 62px;
            height: 62px;
            min-width: 62px;
            border-radius: 16px;
            border: 2px solid #000000;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            box-shadow: 4px 4px 0 #000000;
            transition: all 0.3s ease;
          }

          .pp-tool-item:hover .pp-tool-icon {
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0 #000000;
          }

          .pp-tool-item:nth-child(3n + 1) .pp-tool-icon {
            background: #f3c4a8;
          }

          .pp-tool-item:nth-child(3n + 2) .pp-tool-icon {
            background: #dca733;
          }

          .pp-tool-item:nth-child(3n) .pp-tool-icon {
            background: #dfd0b7;
          }

          .pp-tool-icon svg,
          .pp-tool-icon img {
            width: 34px;
            height: 34px;
            object-fit: contain;
            display: block;
          }

          .pp-tool-info {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .pp-tool-info h3 {
            color: #000000;
            font-size: 16px;
            font-weight: 800;
            line-height: 1.25;
            text-align: left;
            margin: 0;
            max-width: 100%;
            overflow-wrap: anywhere;
          }

          .pp-tool-info p {
            color: rgba(0, 0, 0, 0.68);
            font-size: 13px;
            font-weight: 600;
            line-height: 1.35;
            text-align: left;
            margin: 0;
            max-width: 100%;
            overflow-wrap: anywhere;
          }

          @media (max-width: 1200px) {
            .pp-tools-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              column-gap: 54px;
              row-gap: 32px;
            }
          }

          @media (max-width: 992px) {
            .pp-skill {
              padding: 64px var(--container-x, 6%);
            }

            .pp-skill-main-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 16px;
            }

            .pp-tools-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              column-gap: 34px;
              row-gap: 28px;
            }
          }

          @media (max-width: 768px) {
            .pp-skill {
              padding: 56px var(--container-x, 5%);
            }

            .pp-skill-main {
              margin-bottom: 62px;
            }

            .pp-skill-title {
              margin-bottom: 30px;
            }

            .pp-skill-title h2 {
              font-size: 28px;
            }

            .pp-skill-main-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 14px;
            }

            .pp-skill-main-card {
              min-height: 92px;
              padding: 18px 14px;
              border-radius: 14px;
            }

            .pp-skill-main-card h3 {
              font-size: 14px;
              line-height: 1.35;
            }

            .pp-tools-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              column-gap: 18px;
              row-gap: 28px;
            }

            .pp-tool-item {
              align-items: flex-start;
              gap: 10px;
            }

            .pp-tool-icon {
              width: 52px;
              height: 52px;
              min-width: 52px;
              border-radius: 14px;
              box-shadow: 3px 3px 0 #000000;
            }

            .pp-tool-icon svg,
            .pp-tool-icon img {
              width: 29px;
              height: 29px;
            }

            .pp-tool-info h3 {
              font-size: 14px;
              line-height: 1.2;
            }

            .pp-tool-info p {
              font-size: 11.5px;
              line-height: 1.3;
            }
          }

          @media (max-width: 560px) {
            .pp-skill-main-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 12px;
            }

            .pp-skill-main-card {
              min-height: 88px;
              padding: 16px 10px;
            }

            .pp-skill-main-card h3 {
              font-size: 13px;
              line-height: 1.3;
            }

            .pp-tools-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              column-gap: 16px;
              row-gap: 26px;
            }

            .pp-tool-item {
              width: 100%;
              align-items: center;
              gap: 10px;
            }

            .pp-tool-icon {
              width: 50px;
              height: 50px;
              min-width: 50px;
            }

            .pp-tool-info h3 {
              font-size: 13.5px;
            }

            .pp-tool-info p {
              font-size: 11px;
            }
          }

          @media (max-width: 480px) {
            .pp-skill {
              padding-top: 46px;
              padding-bottom: 46px;
            }

            .pp-skill-title {
              margin-bottom: 28px;
            }

            .pp-skill-title h2 {
              font-size: 26px;
            }

            .pp-skill-main-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 12px;
            }

            .pp-skill-main-card {
              min-height: 82px;
              padding: 15px 9px;
              border-radius: 12px;
              box-shadow: 3px 3px 0 #000000;
            }

            .pp-skill-main-card:hover {
              transform: translate(-2px, -2px);
              box-shadow: 6px 6px 0 #000000;
            }

            .pp-skill-main-card h3 {
              font-size: 12.5px;
              line-height: 1.28;
            }

            .pp-tools-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              column-gap: 14px;
              row-gap: 24px;
            }

            .pp-tool-item {
              gap: 9px;
            }

            .pp-tool-icon {
              width: 48px;
              height: 48px;
              min-width: 48px;
              border-radius: 13px;
              box-shadow: 3px 3px 0 #000000;
            }

            .pp-tool-item:hover .pp-tool-icon {
              transform: translate(-1px, -1px);
              box-shadow: 5px 5px 0 #000000;
            }

            .pp-tool-icon svg,
            .pp-tool-icon img {
              width: 27px;
              height: 27px;
            }

            .pp-tool-info h3 {
              font-size: 13px;
            }

            .pp-tool-info p {
              font-size: 10.5px;
            }
          }

          @media (max-width: 390px) {
            .pp-skill-main-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 10px;
            }

            .pp-skill-main-card {
              min-height: 78px;
              padding: 13px 7px;
            }

            .pp-skill-main-card h3 {
              font-size: 11.5px;
              line-height: 1.25;
            }

            .pp-tools-grid {
              column-gap: 12px;
              row-gap: 22px;
            }

            .pp-tool-item {
              flex-direction: column;
              align-items: flex-start;
              gap: 10px;
            }

            .pp-tool-icon {
              width: 46px;
              height: 46px;
              min-width: 46px;
            }

            .pp-tool-info h3 {
              font-size: 12.5px;
            }

            .pp-tool-info p {
              font-size: 10px;
            }
          }

          @media (max-width: 360px) {
            .pp-skill-main-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 9px;
            }

            .pp-skill-main-card {
              min-height: 74px;
              padding: 12px 6px;
            }

            .pp-skill-main-card h3 {
              font-size: 10.8px;
            }

            .pp-tools-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              column-gap: 10px;
              row-gap: 20px;
            }

            .pp-tool-icon {
              width: 44px;
              height: 44px;
              min-width: 44px;
            }

            .pp-tool-icon svg,
            .pp-tool-icon img {
              width: 24px;
              height: 24px;
            }

            .pp-tool-info h3 {
              font-size: 12px;
            }

            .pp-tool-info p {
              font-size: 9.5px;
            }
          }
        `}
      </style>

      <div className="pp-skill-main">
        <motion.div
          className="pp-skill-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Skills</h2>
        </motion.div>

        <div className="pp-skill-main-grid">
          {skillList.map((skill, index) => (
            <motion.div
              className="pp-skill-main-card"
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <h3>{skill}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pp-tools-main">
        <motion.div
          className="pp-skill-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Tools yang Digunakan</h2>
        </motion.div>

        <div className="pp-tools-grid">
          {tools.map((tool, index) => (
            <motion.div
              className="pp-tool-item"
              key={tool.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="pp-tool-icon">
                {typeof tool.icon === "string" ? (
                  <img src={tool.icon} alt={`${tool.name} logo`} />
                ) : (
                  tool.icon
                )}
              </div>

              <div className="pp-tool-info">
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skill;
