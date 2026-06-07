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

  const skills = [
    {
      name: "Microsoft Office",
      icon: <MicrosoftOfficeIcon />,
    },
    {
      name: "Microsoft Excel",
      icon: <ExcelIcon />,
    },
    {
      name: "Figma",
      icon: <FigmaIcon />,
    },
    {
      name: "Laravel",
      icon: "https://cdn.simpleicons.org/laravel/FF2D20",
    },
    {
      name: "Flutter",
      icon: <FlutterIcon />,
    },
    {
      name: "Dart",
      icon: <DartIcon />,
    },
    {
      name: "HTML",
      icon: <HtmlIcon />,
    },
    {
      name: "CSS",
      icon: <CssIcon />,
    },
    {
      name: "MySQL",
      icon: "https://cdn.simpleicons.org/mysql/4479A1",
    },
    {
      name: "phpMyAdmin",
      icon: "https://cdn.simpleicons.org/phpmyadmin/6C78AF",
    },
  ];

  return (
    <motion.section
      id="skills"
      className="skills mz-skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.8 }}
    >
      <style>
        {`
          .mz-skills-section {
            width: 100%;
            overflow: hidden;
          }

          .mz-skills-section .section-title {
            text-align: left;
            margin-bottom: 40px;
          }

          .mz-skills-section .section-title h2 {
            display: inline-block;
            color: #ffffff;
            border-bottom: 4px solid #10b981;
            padding-bottom: 10px;
            margin: 0;
            font-size: 28px;
            line-height: 1.2;
          }

          .mz-skill-grid {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 24px;
            align-items: stretch;
          }

          .mz-skill-card {
            min-width: 0;
            min-height: 150px;
            padding: 24px 16px;
            background: #111c2d;
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 14px;
            text-align: center;
            transition: all 0.3s ease;
          }

          .mz-skill-card:hover {
            border-color: #10b981;
            box-shadow: 0 0 28px rgba(16, 185, 129, 0.12);
          }

          .mz-skill-icon {
            width: 54px;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .mz-skill-icon svg,
          .mz-skill-icon img {
            width: 46px;
            height: 46px;
            object-fit: contain;
            display: block;
          }

          .mz-skill-card h3 {
            color: #ffffff;
            font-size: 15px;
            font-weight: 700;
            line-height: 1.35;
            text-align: center;
            margin: 0;
            max-width: 100%;
            overflow-wrap: anywhere;
          }

          @media (max-width: 1200px) {
            .mz-skill-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 20px;
            }
          }

          @media (max-width: 992px) {
            .mz-skills-section .section-title {
              text-align: center;
            }

            .mz-skill-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 18px;
            }

            .mz-skill-card {
              min-height: 140px;
            }
          }

          @media (max-width: 768px) {
            .mz-skill-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 12px;
            }

            .mz-skill-card {
              min-height: 112px;
              padding: 16px 8px;
              border-radius: 16px;
              gap: 10px;
            }

            .mz-skill-icon {
              width: 38px;
              height: 38px;
            }

            .mz-skill-icon svg,
            .mz-skill-icon img {
              width: 30px;
              height: 30px;
            }

            .mz-skill-card h3 {
              font-size: 11px;
              line-height: 1.3;
            }
          }

          @media (max-width: 480px) {
            .mz-skill-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 10px;
            }

            .mz-skill-card {
              min-height: 100px;
              padding: 12px 6px;
              border-radius: 14px;
              gap: 8px;
            }

            .mz-skill-icon {
              width: 34px;
              height: 34px;
            }

            .mz-skill-icon svg,
            .mz-skill-icon img {
              width: 25px;
              height: 25px;
            }

            .mz-skill-card h3 {
              font-size: 9.8px;
            }
          }

          @media (max-width: 360px) {
            .mz-skill-grid {
              gap: 7px;
            }

            .mz-skill-card {
              min-height: 92px;
              padding: 10px 4px;
            }

            .mz-skill-icon {
              width: 30px;
              height: 30px;
            }

            .mz-skill-icon svg,
            .mz-skill-icon img {
              width: 21px;
              height: 21px;
            }

            .mz-skill-card h3 {
              font-size: 8.5px;
            }
          }
        `}
      </style>

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Kemampuan</h2>
      </motion.div>

      <div className="mz-skill-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="mz-skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
          >
            <div className="mz-skill-icon">
              {typeof skill.icon === "string" ? (
                <img src={skill.icon} alt={`${skill.name} logo`} />
              ) : (
                skill.icon
              )}
            </div>

            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skill;
