import React, { useState, useEffect } from 'react';
import './App.css';
import resume from './resume.pdf';
import linkedin from './icons/linkedin.svg';
import github from './icons/github.svg';
import Slide from 'react-reveal/Slide';
import airQualityImg from './images/air_quality.jpeg';
import cdis from './images/cdis.png'
import navigationAssistantImg from './images/navigation_assistant.jpg';
import predVizTest from './images/pred_viz_test.png';
import pepper from './images/pepper.webp';

const laptopFrames = [
  `
      .---------------------------.
      | .-----------------------. |
      | |                       | |
      | | andre@dev:~$ _        | |
      | |                       | |
      | |                       | |
      | '-----------------------' |
      '---------------------------'
     /:::::::::::::::::::::::::::::\\
    /_______________________________\\
`,
  `
      .---------------------------.
      | .-----------------------. |
      | |                       | |
      | | andre@dev:~$          | |
      | |                       | |
      | |                       | |
      | '-----------------------' |
      '---------------------------'
     /:::::::::::::::::::::::::::::\\
    /_______________________________\\
`
];

const front1 = `
   +------------------------------------+
   | [PWR]                 +-+ USB +-+  |
   |                       +-+     +-+  |
   |                                    |
   | [ ]N/C                    AREF[ ]  |
   | [ ]IOREF                   GND[ ]  |
   | [ ]RST                      13[ ]  |
   | [ ]3V3                      12[ ]  |
   | [ ]5V      +---+            11[ ]~ |
   | [ ]GND     | A |            10[ ]~ |
   | [ ]GND     | R |             9[ ]~ |
   | [ ]Vin     | M |             8[ ]  |
   |            +---+                   |
   | [ ]A0                        7[ ]  |
   | [ ]A1                        6[ ]~ |
   | [ ]A2                        5[ ]~ |
   | [ ]A3                        4[ ]  |
   | [ ]A4      [ ][ ]            3[ ]~ |
   | [ ]A5      [ ][ ]            2[ ]  |
   |            [ ][ ]       TX-> 1[ ]  |
   |  ARDUINO                RX<- 0[ ]  |
   \\____________________________________/
`;

const front2 = `
     +------------------------------+
     | [PWR]             +-+USB+-+  |
     |                   +-+   +-+  |
     |                              |
     | [ ]N/C               AREF[ ] |
     | [ ]IOREF              GND[ ] |
     | [ ]RST                 13[ ] |
     | [ ]3V3                 12[ ] |
     | [ ]5V     +---+        11[ ]~|
     | [ ]GND    | A |        10[ ]~|
     | [ ]GND    | R |         9[ ]~|
     | [ ]Vin    | M |         8[ ] |
     |           +---+              |
     | [ ]A0                   7[ ] |
     | [ ]A1                   6[ ]~|
     | [ ]A2                   5[ ]~|
     | [ ]A3                   4[ ] |
     | [ ]A4     [ ][]         3[ ]~|
     | [ ]A5     [ ][]         2[ ] |
     |           [ ][]    TX->1[ ]  |
     | ARDUINO            RX<-0[ ]  |
     \\______________________________/
`;

const front3 = `
        +----------------------+
        | [PW]        +-+USB+  |
        |             +-+   +  |
        |                      |
        | []N/C         AREF[] |
        | []IOR          GND[] |
        | []RST           13[] |
        | []3V3           12[] |
        | []5V    +-+     11[]~|
        | []GND   |A|     10[]~|
        | []GND   |R|      9[]~|
        | []Vin   |M|      8[] |
        |         +-+          |
        | []A0             7[] |
        | []A1             6[]~|
        | []A2             5[]~|
        | []A3             4[] |
        | []A4    [][]     3[]~|
        | []A5    [][]     2[] |
        |         [][] TX->1[] |
        | ARDU             0[] |
        \\______________________/
`;

const front4 = `
           +----------------+
           | [P]    +UB+    |
           |        +  +    |
           |                |
           | []NC     ARF[] |
           | []IO     GND[] |
           | []RT      13[] |
           | []3V      12[] |
           | []5V +-+  11[]~|
           | []GN |A|  10[]~|
           | []GN |R|   9[]~|
           | []Vi |M|   8[] |
           |      +-+       |
           | []A0       7[] |
           | []A1       6[]~|
           | []A2       5[]~|
           | []A3       4[] |
           | []A4 [][]  3[]~|
           | []A5 [][]  2[] |
           |      [][]  1[] |
           | AR         0[] |
           \\________________/
`;

const edge = `
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  |  |
                  \\__/
`;

const back4 = `
           +----------------+
           | O [][][][] O   |
           | TE     MADE    |
           | SD     ITAL    |
           | O         .+-+ |
           |           .| | |
           |           .|U| |
           |            |S| |
           |      .     |B| |
           |      .     | | |
           |            +-+ |
           |                |
           |                |
           |      ..        |
           |      ..        |
           |                |
           | [][][]     +-+ |
           |           .|P| |
           | [][]      .|W| |
           | O         .|R| |
           \\----------------/
`;

const back3 = `
        +----------------------+
        | O [][][][][][][] O   |
        | (TE)     MADE IN     |
        | SDF       ITALY      |
        | O               ..+-+|
        |                 ..| ||
        |                 ..|U||
        |                   |S||
        |      ..           |B||
        |      ..           | ||
        |                   +-+|
        |                      |
        |                      |
        |      ...             |
        |      ...             |
        |                      |
        | [][][][][]       +-+ |
        |                 ..|P||
        | [][][][]        ..|W||
        | O               ..|R||
        \\----------------------/
`;

const back2 = `
     +------------------------------+
     | O [ ][ ][ ][ ][ ][ ][ ][ ] O |
     | (T.E)         MADE IN        |
     | S=DF           ITALY         |
     | O                      . .+-+|
     |                        . .| ||
     |                        . .|U||
     |                           |S||
     |       . .                 |B||
     |       . .                 | ||
     |                           +-+|
     |                              |
     |                              |
     |       . . . .                |
     |       . . . .                |
     |                              |
     | [ ][ ][ ][ ][ ][ ]       +-+ |
     |                       . .|P| |
     | [ ][ ][ ][ ][ ]       . .|W| |
     | O                     . .|R| |
     \\------------------------------/
`;

const back1 = `
   +------------------------------------+
   | O [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ] O |
   | (T.E.)           MADE IN           |
   | S=DF              ITALY            |
   | O                          . . +-+ |
   |                            . . | | |
   |                            . . |U| |
   |                                |S| |
   |        . .                     |B| |
   |        . .                     | | |
   |                                +-+ |
   |                                    |
   |                                    |
   |        . . . . .                   |
   |        . . . . .                   |
   |                                    |
   | [ ][ ][ ][ ][ ][ ][ ][ ]       +-+ |
   |                          . .   |P| |
   | [ ][ ][ ][ ][ ][ ]       . .   |W| |
   | O                        . .   |R| |
   \\------------------------------------/
`;

const pcbFrames = [front1, front2, front3, front4, edge, back4, back3, back2, back1, back2, back3, back4, edge, front4, front3, front2];

const smileFrames = [
`
   .-----.
  /       \\
 |  O   O  |
 |    >    |
 |  \\___/  |
  \\       /
   '-----'
`,
`
   .-----.
  /       \\
 |  O   -  |
 |    >    |
 |  \\___/  |
  \\       /
   '-----'
`
];

const flaskFrames = [
  `
    ===
    | |
   /   \\
  /_____\\
`,
  `
     ==
     ||
    /  \\
   /____\\
`,
  `
     =
     |
    / \\
   /___\\
`,
  `
     |
     |
     |
     |
`,
  `
     =
     |
    / \\
   /___\\
`,
  `
     ==
     ||
    /  \\
   /____\\
`
];

function AsciiAnimation({ frames, interval = 200 }) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, interval);
    return () => clearInterval(timer);
  }, [frames, interval]);

  return (
    <pre className="ascii-art">
      {frames[frameIndex]}
    </pre>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}

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
      <div className="section-header-container">
        <h1 className="header">Hardware</h1>
        <AsciiAnimation frames={pcbFrames} />
      </div>
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
      <div className="section-header-container">
        <h1 className="header">Research</h1>
        <AsciiAnimation frames={flaskFrames} />
      </div>
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
      <div className="section-header-container">
        <h1 className="header">Just for Fun</h1>
        <AsciiAnimation frames={smileFrames} interval={800} />
      </div>
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
      name: "Content Wise",
      description: "ContentWise is a locally-hosted browser extension and backend server designed to monitor user tab content and predict cognitive states (such as Focused, Lured, or Distracted). It leverages Meta's TRIBE v2 multimodal brain encoding foundation model to analyze what you are watching and listening to, predicting your level of engagement.",
      link: "https://github.com/andrxke/content-wise",
    },
    {
      name: "Remote Operated Semantic Sketching",
      description: "A robot to help the visually impaired experience art through the sense of touch and sound. Winner of Hack the North 2025.",
      link: "https://devpost.com/software/ross-42pnvi"
    },
    {
      name: "Shelter",
      description: "A project to visualize data about shelters within the City of Toronto. Pulled data from the OpenData portal, saved data to a MongoDB database, and plotted data on usage and available beds for the past 7 days to help those in need find relevant, up to date information on shelters.",
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
      name: "SIRRL - the Social and Intelligent Robotics Research Lab",
      description: "Working on using a humaoid robot, Pepper to give feedback on body language as a public speaking coach for students",
      image: pepper,
      link: "https://uwaterloo.ca/social-intelligent-robotics-research-lab/profiles/andre-ke"
    },
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
      title: "📚 I like to read! ",
      description: "I like reading a variety of nonfictional titles, memoirs, theology,and classics. I don't really like reading modern fiction."
    },
    {
      title: "🏊 Swimming",
      description: "I used to be a swim instructor and lifeguard. I also swim in my free time."
    }
  ]

  return (
    <div className="App">
      <CustomCursor />
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
        <div className="section-header-container">
          <h1 className="header">Projects</h1>
          <AsciiAnimation frames={laptopFrames} interval={600} />
        </div>
        <ProjectsSection projectsData={projectsData} />
        <HardwareSection hardwareData={hardwareData} />
        <ResearchSection researchData={researchData} />
        <JustForFunSection funData={funData} />
      </div>
    </div>
  );
}

export default App;
