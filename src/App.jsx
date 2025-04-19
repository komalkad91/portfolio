
import './App.css'

import React from 'react';

function App() {
  return (
    <div className="App">
    <header className="navbar">
      <h1>Komal Kadlag</h1>
      <p>Full Stack Developer</p>
      <p>
        📧 <a href="mailto:komalkadlag00@gmail.com">komalkadlag00@gmail.com</a> | 📞 9373253197<br />
        🔗 <a href="https://linkedin.com/in/komal-kadlag-029673202" target="_blank" rel="noreferrer">linkedin         </a>
        <a href="https://github.com/komalkad91">  <img src='./github.svg' style={{height:'14px',marginTop:'9px'}}></img>  Github</a>
      </p>
    </header>

    <section className="section">
      <h2>Summary</h2>
      <p>
        Full Stack Developer with hands-on experience building scalable applications using Java (Spring Boot) and React. Skilled in developing products from scratch, contributing across the entire SDLC, and working in both enterprise and startup environments.
      </p>
    </section>

    <section className="section gray-bg">
      <h2>Technical Skills</h2>
      <div className="skills">
        <div className="skill">Java</div>
        <div className="skill">Spring Boot</div>
        <div className="skill">React</div>
        <div className="skill">Redux</div>
        <div className="skill">TypeScript</div>
        <div className="skill">Material-UI</div>
        <div className="skill">SCSS</div>
        <div className="skill">PostgreSQL</div>
        <div className="skill">Docker</div>
        <div className="skill">Apache Superset</div>
        <div className="skill">GoJS</div>
        <div className="skill">VS Code</div>
        <div className="skill">IntelliJ</div>
      </div>
    </section>

    <section className="section">
      <h2>Professional Experience</h2>
      <div className="card">
        <h3>Aether Enterprise Applications LLP – Full Stack Developer</h3>
        <p><em>Nov 2022 – Present</em></p>
        <ul>
          <li>Developed and maintained full-stack applications using React and Spring Boot.</li>
          <li>Upgraded frontend stack (React 17 to 18), integrated Redux Toolkit, TypeScript, Webpack, Formik, and MUI.</li>
          <li>Implemented secure fund transfer functionality between trust and operating accounts.</li>
          <li>Provided production support with quick resolution, ensuring uptime and client satisfaction.</li>
          <li>Integrated Apache Superset dashboards to visualize MT/MX execution data.</li>
          <li>Built tree-based test planning UI using GoJS, with relational DB persistence.</li>
        </ul>
      </div>
    </section>

    <section className="section gray-bg">
      <h2>Projects</h2>
      <div className="card">
        {/* <h3>NOTA BY MNT BANK</h3> */}
        <a href='https://www.trustnota.com/'><h3>NOTA BY MNT BANK</h3></a>
        <p><em>Nov 2022 – Mar 2024</em></p>
        <p>Legal-fintech platform offering trust account management, compliance, and transaction audit.</p>
        <ul>
          <li>Built fund transfer module and check-printing workflow with audit logs.</li>
          <li>Supports check printing, transaction logs, and multi-level approval flows.</li>
          <li>Helps law firms manage client funds securely with built-in controls for fund segregation</li>
        </ul>
      </div>
      <div className="card">
        <h3>PayAutoVerify</h3>
        <p><em>Apr 2024 – Present</em></p>
        <p>Automation testing platform for MT/MX messages and GPP payment flow validation.</p>
        <ul>
          <li>Built dynamic test plan UI using GoJS and integrated Superset for report visualization.</li>
        </ul>
      </div>
      <div className="card">
        {/* <h3>EVEREST ABACUS ACADEMY</h3> */}
        <a href='https://everesttutorhub.com/#/login'><h3>EVEREST ABACUS ACADEMY</h3></a>
        <p><em>Freelance, 2024</em></p>
        <p>A custom web-based teacher and student management system developed for Everest Abacus Academy — an institute with
over 21,000 students and 700 teachers across India.
</p>
        <ul>
          <li>Implemented onboarding flows, role-based access, and server-side pagination.</li>
          <li>Teachers can securely log in, register students under their profile, and track academic records</li>
        </ul>
      </div>
    </section>

    <section className="section">
      <h2>Achievements</h2>
      <ul>
        <li>Solved 380+ DSA problems on <a href="https://leetcode.com/u/komalkadlag00/" target="_blank" rel="noreferrer">LEETCODE</a> & <a href="https://www.geeksforgeeks.org/user/komalkadlag00/" target="_blank" rel="noreferrer">GEEKSFORGEEKS</a></li>
        <li>Highest rating on <a href="https://codechef.com/users/komalkad00" target="_blank" rel="noreferrer">CODECHEF</a> 3-Star rated</li>
      </ul>
    </section>

    <section className="section gray-bg">
      <h2>Education</h2>
      <p><strong>Bachelor of Engineering – RSCOE Pune</strong></p>
      <p><em>Aug 2018 – May 2022</em></p>
    </section>

    <footer className="footer">
      <p>© 2025 Komal Kadlag</p>
    </footer>
  </div>
  );
}

export default App;
