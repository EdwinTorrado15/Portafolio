import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

const Social = () => {
  return (
    <div className="home-social">
      <a
        href="https://www.instagram.com/edwintorrado/"
        className="home-social-icon"
        target="_blank"
      >
        <i>
          <InstagramLogo />
        </i>
      </a>

      <a
        href="https://www.linkedin.com/in/edwintorrado15/"
        className="home-social-icon"
        target="_blank"
      >
        <i>
          <LinkedinLogo />
        </i>
      </a>
      
      <a
        href="https://github.com/EdwinTorrado15"
        className="home-social-icon"
        target="_blank"
      >
        <i>
          <GithubLogo />
        </i>
      </a>
    </div>
  );
};

export default Social;
