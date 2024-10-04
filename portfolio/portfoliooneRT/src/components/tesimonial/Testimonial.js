import React, { useState } from 'react';
import Title from '../layouts/Title';
import './skill.css';

const Testimonial = () => {
  const [displaySkills, setDisplaySkills] = useState(true);

  const toggleDisplay = () => {
    setDisplaySkills(!displaySkills);
  };

  return (
    <section
    id="testimonial"
    className="w-full py-20 border-b-[1px] border-b-black"
  >
    <div className="flex justify-center items-center text-center">
      <Title title="WHAT CLIENTS SAY" des="Testimonial" />
    </div>

      {/* <div className="flex justify-center items-center text-center">
        <Title title="Skills" des="Skills" />
      </div> */}

    <div id="Skill" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="What My Programming Skills Include?" des="Skills" />
      </div>
      <div className="max-w-6xl mx-auto">
        <section className="skills" id="skills">
          <div className="skills-content section-content">
            <p className="section-subtitle">My skills</p>
            <h2 className="h3 section-title">What My Programming Skills Include?</h2>
            <p className="section-text">
              I develop simple, intuitive, and responsive user interfaces
              that help users get things done with less effort and time with these technologies.
            </p>

            <div className="skills-toggle" data-toggle-box>
              <button className={`toggle-btn ${displaySkills ? 'active' : ''}`} data-toggle-btn onClick={toggleDisplay}>Skills</button>
              <button className={`toggle-btn ${!displaySkills ? 'active' : ''}`} data-toggle-btn onClick={toggleDisplay}>Tools</button>
            </div>
          </div>

          <div className="skills-box" data-skills-box>
            {/* Render either skills or tools based on state */}
            {displaySkills ? (
              <div className="row">
                {/* First row of skills */}
                <div className="col-md-3">
                  <ul className="skills-list">
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">Java</div>
                        <div className="card-icon">
                          <img src="../image/java.png" alt="java logo" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">C</div>
                        <div className="card-icon">
                          <img src="../image/c.png" alt="c logo" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">C++</div>
                        <div className="card-icon">
                          <img src="../image/c++.png" alt="c++ logo" />
                        </div>
                      </div>
                    </li>
                    {/* Add more skills as needed */}
                  </ul>
                </div>
                <div className="col-md-3">
                  {/* Second column of skills */}
                  <ul className="skills-list">
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">HTML5</div>
                        <div className="card-icon">
                          <img src="../image/html5.png" alt="HTML logo" />
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="skill-card">
                        <div className="tooltip">JavaScript</div>
                        <div className="card-icon">
                          <img src="../image/javascript.png" alt="javascript logo" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">MySQL</div>
                        <div className="card-icon">
                          <img src="../image/Mysql.png" alt="MySQL logo" />
                        </div>
                      </div>
                    </li>
                    {/* Add more skills as needed */}
                  </ul>
                </div>
                <div className="col-md-3">
                  {/* Third column of skills */}
                  <ul className="skills-list">
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">React</div>
                        <div className="card-icon">
                          <img src="../image/React.png" alt="React logo" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">npm</div>
                        <div className="card-icon">
                          <img src="../image/npm.png" alt="Npm logo" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">Bootstrap</div>
                        <div className="card-icon">
                          <img src="../image/bootstap.png" alt="Bootstrap logo" />
                        </div>
                      </div>
                    </li>
                    {/* Add more columns for skills */}
                  </ul>
                </div>
                <div className="col-md-3">
                  {/* Fourth column of skills */}
                  <ul className="skills-list">
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">Angular</div>
                        <div className="card-icon">
                          <img src="../image/Angular.png" alt="Angular logo" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">jQuery</div>
                        <div className="card-icon">
                          <img src="../image/Jquery.png" alt="jQuery logo" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">Tailwind CSS</div>
                        <div className="card-icon">
                          <img src="../image/TalwindCss.png" alt="Tailwind CSS logo" />
                        </div>
                      </div>
                    </li>
                    {/* Add more columns for skills */}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="row">
                {/* First row of tools */}
                <div className="col-md-3">
                  <ul className="tools-list">
                    {/* Add more tools as needed */}
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">Eclipse</div>
                        <div className="card-icon">
                          <img src="../image/eclipse.jpg" alt="Eclipse logo" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">Github</div>
                        <div className="card-icon">
                          <img src="../image/github.png" alt="Git logo" />
                        </div>
                      </div>
                    </li>
                    {/* <li>
                      <div className="skill-card">
                        <div className="tooltip">Postman</div>
                        <div className="card-icon">
                          <img src="../image/postman.svg" alt="Postman logo" />
                        </div>
                      </div>
                    </li> */}
                  </ul>
                </div>
                <div className="col-md-3">
                  {/* Second column of tools */}
                  <ul className="tools-list">
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">STS</div>
                        <div className="card-icon">
                          <img src="../image/sts.png" alt="STS logo" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">Visual Studio</div>
                        <div className="card-icon">
                          <img src="../image/vs.png" alt="Visual Studio logo" />
                        </div>
                      </div>
                    </li>
                    {/* <li>
                      <div className="skill-card">
                        <div className="tooltip">Ajax</div>
                        <div className="card-icon">
                          <img src="../image/ajax.png" alt="Ajax logo" />
                        </div>
                      </div>
                    </li> */}
                    {/* Add more columns for tools */}
                  </ul>
                </div>
                <div className="col-md-3">
                  {/* Third column of tools */}
                  <ul className="tools-list">
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">Postman</div>
                        <div className="card-icon">
                          <img src="../image/postman.svg" alt="Ajax logo" />
                        </div>
                      </div>
                    </li>
                    {/* <li>
                      <div className="skill-card">
                        <div className="tooltip">Ajax</div>
                        <div className="card-icon">
                          <img src="../image/ajax.png" alt="Ajax logo" />
                        </div>
                      </div>
                    </li> */}
                    <li>
                      <div className="skill-card">
                        <div className="tooltip">Heidisql</div>
                        <div className="card-icon">
                          <img src="../image/heidisql.png" alt="Ajax logo" />
                        </div>
                      </div>
                    </li>
                    {/* Add more columns for tools */}
                  </ul>
                </div>
                
              </div>
            )}
          </div>
        </section>
      </div>
      </div>
    </section>
  );
};

export default Testimonial;
