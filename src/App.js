import './App.css';
import resume from './resume.pdf';
import linkedin from './icons/linkedin.svg';
import github from './icons/github.svg';
import react from './icons/react.svg';
import Slide from 'react-reveal/Slide';
import airQualityImg from './images/air_quality.jpeg';
import cdis from './images/cdis.png'
import navigationAssistantImg from './images/navigation_assistant.jpg';
import predVizTest from './images/pred_viz_test.png';

function Project(project) {
  return (
    <div className="project-card">
      <h1 className="project-name">{project.name}</h1>
      <p className="project-description">{project.description}</p>
      {project.image && <img src={project.image} alt={project.name} className="project-image" />}
      {project.video && (
        <iframe
          className="project-video"
          src={project.video}
          title={project.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      {project.link !== "" && (
        <a href={project.link} target="_blank" rel="noreferrer">
          <button className="project-link">Link</button>
        </a>
      )}

    </div>
  )
}
function ProjectsSection({ projectsData }) {
  return (
    <section className="projects-list">
      <div className="project-list">
        {projectsData.map((project) => (
          <Slide right>
            <Project {...project} />
          </Slide>
        ))}
      </div>
    </section>
  );
}
function HardwareSection({ hardwareData }) {
  return (
    <section className="hardware-list">
      <h1 className="header">Hardware</h1>
      <div className="project-list">
        {hardwareData.map((project) => (
          <Slide right>
            <Project {...project} />
          </Slide>
        ))}
      </div>
    </section>
  );
}
function ResearchSection({ researchData }) {
  return (
    <section className="research-list">
      <h1 className="header">Research</h1>
      <div className="project-list">
        {researchData.map((project) => (
          <Slide right>
            <Project {...project} />
          </Slide>
        ))}
      </div>
    </section>
  );
}

function JustForFunSection({ funData }) {
  return (
    <section className="just-for-fun">
      <h1 className="header">Just for Fun</h1>
      <div className="fun-facts-grid" style={{ marginTop: "2em" }}>
        {funData.map((item, index) => (
          <Slide up key={index}>
            <div className="fun-fact-card" style={{ alignContent: "start" }}>
              <h3>{item.title}</h3>
              <p style={{ marginBottom: "1em" }}>{item.description}</p>
              {item.link && (
                <a href={item.link} target="_blank" rel="noreferrer" className="project-link">
                  Check it out
                </a>
              )}
            </div>
          </Slide>
        ))}
      </div>
    </section>
  );
}
function App() {
  const projectsData = [
    {
      name: "Remote Operated Semantic Sketching",
      description: "A robot to help the visually impaired experience art through the sense of touch and sound. Winner of Hack the North 2025.",
      link: "https://devpost.com/software/ross-42pnvi"
    },
    {
      name: "Shelter",
      description: "A full-stack ESG analyzer for ESG document releases from publically traded companies. Insert the link to the ESG report PDF to see scores for Environmental and Social Governance. Utilized Next.js, React, TypeScript and Tailwind to create the front end. In the back end, Cheerio, Axios, Tensor Flow, and Natural.js was used to analyze the reports.",
      link: "https://shelter-ecru.vercel.app/"
    },
    {
      name: "ESG Analyzer",
      description: "A full-stack ESG analyzer for ESG document releases from publically traded companies. Insert the link to the ESG report PDF to see scores for Environmental and Social Governance. Utilized Next.js, React, TypeScript and Tailwind to create the front end. In the back end, Cheerio, Axios, Tensor Flow, and Natural.js was used to analyze the reports.",
      link: "https://github.com/nohyp3/esg-analyzer"
    },
    {
      name: "BlockBrain",
      description: "A full-stack blockchain learning platform that incentivizes users with NFTs. Uses Cohere AI to grade answers that test user's understanding of content. Built using React, ChakraUI, Express, and MongoDB.",
      link: "https://taikai.network/hackbox/hackathons/hawkhacks/projects/clwd3yico0ca5uc01z93z8sn3/idea"
    },
    {
      name: "Grocery Run",
      description: "Need groceries to cook your next meal but don't know where to get the cheapest ingredients? We made a react app that tells you where to get the cheapest groceries in a time effecient way.",
      link: "https://devpost.com/software/grocery-run-jzobac",

    },
    {
      name: "Sort the 6ix",
      description: "What if you could find out where to throw your household waste using the camera of your phone? Used React Native, the Google Cloud AI Api, Hugging Face AI's Semantic Search, and City of Toronto's open data",
      //image: "project1.jpg",
      link: "https://devpost.com/software/sorting-the-6ix",
    },
    {
      name: "Posicise",
      description: "Created a simple Android fitness App using Java and Android Studio",
      //image: "project2.jpg",
      link: "https://devpost.com/software/posicise",
    },
    {
      name: "Youthfi",
      description: "An experimental site that taught financial basics. Built to experiment with React. ",
      link: "https://github.com/nohyp3/youthfi",

    },
  ];
  const hardwareData = [
    {
      name: "Bicep Curl Detector",
      description: "A device that detects when a bicep curl has been done utilizing electrodes, an instrumentation amplifier, bandpass filtering, signal wave rectifying, and an arduino.",
      video: "https://www.youtube.com/embed/kHo0N8l3csQ",
      link: ""
    },
    {
      name: "Solar Powered Air Quality Monitor",
      description: "An IoT device that reports air quality data from a BME680 sensor and sends it to a web dashboard. Used a Raspberry Pi Pico to read sensor data and host the dashboard locally. Utilized a solar panel, two rechargeable batteries, and a TP4056 battery charge board to power the Pico and the Sensor.",
      link: "https://github.com/nohyp3/homeMonitor",
      image: airQualityImg
    },
    {
      name: "Navigation Assistant for Visually Impaired",
      description: "Helped created a system to help the visually impaired navigate their surroundings. The system integrates an ESP32-CAM, ultrasonic sensors, and Google Gemini AI to provide real-time scene descriptions and obstacle detection via a Flask web server.",
      link: "https://github.com/nohyp3/ultravision",
      //image: navigationAssistantImg
    },
  ];
  const researchData = [
    {
      name: "Vision and Image Processing Lab",
      description: "Enhanced 3D U-Net performance for MRI segmentation through transfer learning and custom preprocessing; investigated the efficacy of VisionLLMs (SAM3) in clinical imaging tasks.",
      image: predVizTest,
      link: ""
    },
    {
      name: "MRI Imaging with Synthetic Correlated Diffusion Imaging",
      description: "Utitilized the CDIs imaging algorithm on human MRI scans to highlight potentially tumerous areas",
      link: "https://github.com/catai9/BrainCDIs",
      image: cdis
    }
  ]

  const funData = [
    {
      title: "👁️ Open CV ",
      description: "Created a program to manipulate images (turing image grayscale, rotating, detecting edges) using Open CV. Also implemented a prewitt operator to manually detect edges in an image without the OpenCV library"
    },
    {
      title: "🏊 Swimming",
      description: "I used to be a swim instructor and lifeguard. I also swim in my free time."
    }
  ]

  return (
    <div className="App">
      <div className="hero-home">
        <div className="main-header">
          <h1>Hello! My name is Andre.<span className="blink">|</span></h1>
          <h2>Systems Design Engineering Student @ uWaterloo</h2>
          <div className="icons">
            <a href="https://www.linkedin.com/in/andre-ke/" target="_blank" rel="noreferrer"><img className="icon" src={linkedin} alt="linkedin logo" width='50em' height='50em'></img></a>
            <a href="https://github.com/andrxke" target="_blank" rel="noreferrer"><img className="icon" src={github} alt="github logo" width='50em' height='50em'></img></a>
            <a className="icon" href={resume} target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
      </div>
      <div className="projects">
        <h1 className="header">Projects</h1>
        <ProjectsSection projectsData={projectsData} />
        <HardwareSection hardwareData={hardwareData} />
        <ResearchSection researchData={researchData} />
        <JustForFunSection funData={funData} />
      </div>
      <div className="footer">
        <p>Built With</p> <img src={react}></img>
      </div>
    </div>
  );
}

export default App;
