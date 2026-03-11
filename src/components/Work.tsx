import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    tools: "Python, Pandas, Scikit-learn, Matplotlib",
    image: "/images/churn_prediction.webp",
  },
  {
    title: "Sales Forecast Dashboard",
    category: "Data Analysis",
    tools: "Python, Pandas, Seaborn, Plotly, Jupyter",
    image: "/images/sales_dashboard.webp",
  },
  {
    title: "Sentiment Analysis App",
    category: "NLP Project",
    tools: "Python, NLTK, Scikit-learn, Streamlit",
    image: "/images/sentiment_analysis.webp",
  },
  {
    title: "Face Recognition System",
    category: "Computer Vision",
    tools: "Python, OpenCV, TensorFlow, PyTorch",
    image: "/images/face_recognition.webp",
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    tools: "React, CSS, Three.js, GSAP",
    image: "/images/portfolio.webp",
  },
  {
    title: "Stock Price Prediction",
    category: "Predictive Modeling",
    tools: "Python, Pandas, Scikit-learn, LSTM",
    image: "/images/stock_prediction.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;