import { Linkedin } from "../assets";
import { Instagram } from "../assets";
import { Github } from "../assets";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="transition duration-500 hover:opacity-60"
        href="https://www.linkedin.com/in/bhanuprasad-suram-586392259/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Linkedin}
          alt="linkedin-link"
          className="hover:filter hover:brightness-125"
        />
      </a>

      <a
        className="transition duration-500 hover:opacity-60"
        href="https://www.instagram.com/suram_bhanuprasad/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Instagram}
          alt="Instagram-link"
          className="hover:filter hover:brightness-125"
        />
      </a>

      <a
        className="transition duration-500 hover:opacity-60"
        href="https://github.com/Bhanuprasad17"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Github}
          alt="Github-link"
          className="hover:filter hover:brightness-125"
        />
     </a>
    </div>
  );
};

export default SocialMediaIcons;
