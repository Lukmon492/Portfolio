import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div
          className="flex justify-center md:justify-between 
          text-center"
        >
          <p className="font-playfair font-semibold text-2xl text-yellow">
            SANNI LUKMAN
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 BITSMART. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
