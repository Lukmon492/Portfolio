import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://www.linkedin.com/feed/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/linkedin.png" alt="linkedin-link" />
      </a>
      <a
        href="https://twitter.com/LukmanSanni15"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/twitter.png" alt="twitter-link" />
      </a>
      <a
        href="https://web.facebook.com/sanni.lukmon.7/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/facebook.png" alt="facebook-link" />
      </a>
      <a
        href="https://www.instagram.com/"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/instagram.png" alt="instagram-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
