import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(https://i.imgur.com/u7n8DTp.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Rami Martinez</h3>
            <p className="job">
              Full Stack Software Engineer willing to locate anywhere in the United States
            </p>
            {/* END JOB */}
            <Social />
            <p> Email: &nbsp;
            <a href="mailto:ram.martinez007@gmail.com">ram.martinez007@gmail.com</a>
            </p>
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
