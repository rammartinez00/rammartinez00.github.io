import React from "react";

const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/rami-martinez-2931099b/",
  },
  { iconName: "twitter", link: "https://twitter.com/Rami_M_dev" },
  {
    iconName: "angellist",
    link: "https://angel.co/u/rami-martinez",
  },
  { iconName: "github", link: "https://github.com/rammartinez00" },
  // {
  //   iconName: "tik-tok",
  //   link: "https://www.tiktok.com/",
  // },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
