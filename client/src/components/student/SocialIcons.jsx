import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-3 mt-5 ml-1 mb-2 max-md:mt-4">
      <a 
        href="https://facebook.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group transition transform hover:scale-110"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png" 
          alt="Facebook" 
          className="w-8 h-8 transition duration-300 hover:opacity-80" 
        />
      </a>

      <a 
        href="https://twitter.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group transition transform hover:scale-110"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/733/733579.png" 
          alt="Twitter" 
          className="w-8 h-8 transition duration-300 hover:opacity-80" 
        />
      </a>

      <a 
        href="https://linkedin.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group transition transform hover:scale-110"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" 
          alt="LinkedIn" 
          className="w-8 h-8 transition duration-300 hover:opacity-80" 
        />
      </a>

      <a 
        href="https://github.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group transition transform hover:scale-110"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/733/733553.png" 
          alt="GitHub" 
          className="w-8 h-8 transition duration-300 hover:opacity-80" 
        />
      </a>

      <a 
        href="https://gitlab.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group transition transform hover:scale-110"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png" 
          alt="GitLab" 
          className="w-8 h-8 transition duration-300 hover:opacity-80" 
        />
      </a>

      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group transition transform hover:scale-110"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
          alt="WhatsApp" 
          className="w-8 h-8 transition duration-300 hover:opacity-80" 
        />
      </a>
    </div>
  );
};

export default SocialIcons;
