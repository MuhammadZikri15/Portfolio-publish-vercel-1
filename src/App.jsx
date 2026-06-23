import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

          :root {
            --bg-main: #ffffff;
            --bg-soft: #f7f7f7;
            --bg-card: #ffffff;

            --text-main: #000000;
            --text-muted: #222222;
            --text-soft: #333333;
            --text-dim: #555555;

            --border-main: #000000;
            --border-soft: rgba(0, 0, 0, 0.12);

            --accent: #22c997;
            --container-x: 8%;
            --nav-height: 84px;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", Arial, Helvetica, sans-serif;
          }

          html {
            scroll-behavior: smooth;
            overflow-x: hidden;
            background: #ffffff !important;
          }

          body {
            min-width: 320px;
            background: #ffffff !important;
            color: #000000 !important;
            overflow-x: hidden;
          }

          #root {
            width: 100%;
            min-height: 100vh;
            background: #ffffff !important;
            color: #000000 !important;
          }

          .app {
            width: 100%;
            min-height: 100vh;
            background: #ffffff !important;
            color: #000000 !important;
            overflow-x: hidden;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          img,
          svg {
            max-width: 100%;
            display: block;
          }

          button,
          input,
          textarea {
            font-family: inherit;
          }

          button {
            cursor: pointer;
          }

          section {
            scroll-margin-top: var(--nav-height);
          }

          ::selection {
            background: #000000;
            color: #ffffff;
          }

          @media (max-width: 992px) {
            :root {
              --container-x: 6%;
              --nav-height: 80px;
            }
          }

          @media (max-width: 768px) {
            :root {
              --container-x: 5%;
              --nav-height: 76px;
            }
          }

          @media (max-width: 480px) {
            :root {
              --container-x: 5%;
              --nav-height: 74px;
            }
          }
        `}
      </style>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
