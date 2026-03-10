import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>Tech Startup</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Assisted in developing machine learning pipelines for structured
              data analysis. Worked with Python, Pandas, and Scikit-learn to
              clean datasets, engineer features, and build classification models
              that improved prediction accuracy by over 20%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Data Analyst</h4>
                <h5>Data Solutions Co.</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Analyzed large datasets using NumPy and Pandas to uncover
              business insights and support data-driven decision making.
              Built automated reporting tools and developed regression models
              to forecast key performance metrics for clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer</h4>
                <h5>Freelance / Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and deploying end-to-end AI solutions for clients
              across various industries. Specializing in predictive modeling,
              natural language processing, and data analysis using Python,
              Scikit-learn, and modern ML frameworks to deliver measurable
              business value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;