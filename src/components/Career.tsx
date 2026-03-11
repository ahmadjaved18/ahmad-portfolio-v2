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
                <h4>Software Engineering Student</h4>
                <h5>The Islamia University of Bahawalpur</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Currently pursuing a Bachelor's degree in Software Engineering
              with a strong interest in Artificial Intelligence and Machine
              Learning. Developing programming foundations and applying Python
              for problem solving and data-driven applications.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analysis Trainee</h4>
                <h5>Government Technical Training Program</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a 3-month government-sponsored training program in
              Data Analysis using Python. Worked with Pandas, NumPy,
              Matplotlib, and Seaborn to perform data cleaning, exploratory
              analysis, and visualization on real-world datasets.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Associate Team Member</h4>
                <h5>HackerRank Chapter – IUB</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Contributing to technical activities and learning initiatives
              related to programming, artificial intelligence, and
              problem-solving while collaborating with peers and expanding
              knowledge in machine learning technologies.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning & Data Analysis Projects</h4>
                <h5>Python / Scikit-learn</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Developing practical projects involving data analysis and machine
              learning using Python libraries such as Pandas, NumPy,
              Matplotlib, and Scikit-learn. Built models including regression
              and classification algorithms to analyze datasets, generate
              insights, and understand predictive modeling workflows.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;