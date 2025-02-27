import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <h1 className="about-title">About This Calculator</h1>
        <p className="about-text">
          Welcome to our <strong>React Calculator</strong> – a fast and efficient tool for arithmetic operations.
        </p>

        <h2 className="about-section-title">🚀 Features:</h2>
        <ul className="about-list">
          <li><strong>Basic Arithmetic</strong> –Addition, Subtraction, Multiplication, Division &  Percentage.</li>
          {/* <li><strong>Responsive Design</strong> – Works on all devices.</li> */}
          {/* <li><strong>Keyboard Support</strong> – Use keys for fast calculations.</li> */}
          <li><strong>Error Handling</strong> – Prevents invalid operations.</li>
          <li><strong>Optimized Performance</strong> – Lightweight and fast.</li>
        </ul>

        <h2 className="about-section-title">🛠️ Build Using : </h2>
        <p className="about-text">React.js, CSS, JavaScript.</p>

        <h2 className="about-section-title">📌 How to Use:</h2>
        <ul className="about-list">
          <li>Enter numbers using the keypad.</li>
          <li>Select an operator (+, -, ×, ÷).</li>
          <li>Press <strong>=</strong> to calculate the result.</li>
          <li>Click <strong>C</strong> to clear the input.</li>
          <li>Click <strong>⌫</strong> to clear last input.</li>
        </ul>

        <p className="about-footer">
          Developed by <strong>Pratap Mondal</strong> using React.js.  
          <br />
           <a href="https://github.com/m-pratap-13">myGitHub ID</a>.
        </p>
      </div>
    </div>
  );
};

export default About;
