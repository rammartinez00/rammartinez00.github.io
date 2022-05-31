import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image ">
          <img src="https://i.imgur.com/u7n8DTp.jpg" alt="about" />
        </div>
        {/* <div className="o-video">
          <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe>
        </div> */}
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Rami Martinez Software Engineer</h3>
          <div className="description_inner">
            <div className="left">
              <p>
              Software Engineer with experience building full stack apps in Javascript and Python with React, Redux, Flask, Express, PostgreSQL. Transitioned from a career in 
              Healthcare Informatics to pursue a career in Software Engineering and tech. 
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                {/* <li>
                  <p>
                    <span>Birthday:</span>01.07.1990
                  </p>
                </li> */}
                {/* <li>
                  <p>
                    <span>Age:</span>31
                  </p>
                </li> */}
                {/* <li>
                  <p>
                    <span>Address:</span>Ave 11, New York, USA
                  </p>
                </li> */}
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:ram.martinez007@gmail.com">ram.martinez007@gmail.com</a>
                  </p>
                </li>
                {/* <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+770221770505">+77 022 177 05 05</a>
                  </p>
                </li> */}
                {/* <li>
                  <p>
                    <span>Study:</span>Univercity of Texas
                  </p>
                </li> */}
                {/* <li>
                  <p>
                    <span>Freelance:</span>Available
                  </p>
                </li> */}
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                  <p>
                  Javascript, Python, React, Redux, HTML, CSS, Docker, Node.js, Express.js, PostgreSQL,
                   Git, Heroku, AWS, Flask,
                   SQLAlchemy, Pug.js, Sequelize, REST APIs, Object Oriented Programming
                  </p>
                    {/* <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Wedding Photography</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Lifestyle Photography</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 80 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Family Photography</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 90 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Languages</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Javascript</span>
                        {/* <span className="number">95%</span> */}
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 100 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Python</span>
                        {/* <span className="number">90%</span> */}
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 100 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Arabian</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            style={{ width: 85 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>4</h3>
                      <span>Full Stack Projects</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>250+</h3>
                      <span>Commits in 2022</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>9K+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              {/* <div className="partners">
                <div className="about_title">
                  <h3>Our Partners</h3>
                </div>
                <Brand />
              </div> */}
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
