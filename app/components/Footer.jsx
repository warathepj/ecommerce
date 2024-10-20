import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="mt-6 container mx-auto text-center">
        <h4 className="mb-2 text-2xl text-green-700">CorgiDev</h4>
        <img
          className="w-32 mx-auto"
          src="https://warathepj.github.io/js-ai-gallery/public/image/corgi/1.jpg"
          alt="CorgiDev"
        />
      </div>
      <footer
        className="bg-gray-
          800 text-green-700 py-4 mt-auto"
      >
        <div className="container mx-auto text-center">
          <p>&copy; {currentYear} CorgiDev - All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
