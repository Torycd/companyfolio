// import React from 'react'

const Footer = () => {
  const footHeder = "font-bold text-xl mb-5";
  const footNav =
    "transition ease-in-out duration-500 underline-offset-4 text-gray-500 hover:underline font-medium";
  return (
    <div className="mt-20 bg-blue-100 lg:px-64 md:px-24 sm:px-10 px-4 py-20 text-gray-500">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
        <div className="grid md:grid-cols-4 gap-20 text-gray-700">
          <div>
            <h2 className={footHeder}>Main</h2>
            <ul className="flex flex-col gap-2">
              <li className={footNav}>Blog</li>
              <li className={footNav}>FAQs</li>
              <li className={footNav}>Support</li>
              <li className={footNav}>About Us</li>
            </ul>
          </div>
          <div>
            <h2 className={footHeder}>Product</h2>
            <ul className="flex flex-col gap-2">
              <li className={footNav}>Log In</li>
              <li className={footNav}>Personal</li>
              <li className={footNav}>Business</li>
              <li className={footNav}>Team</li>
            </ul>
          </div>
          <div>
            <h2 className={footHeder}>Press</h2>
            <ul className="flex flex-col gap-2">
              <li className={footNav}>Logos</li>
              <li className={footNav}>Events</li>
              <li className={footNav}>Stories</li>
              <li className={footNav}>Office</li>
            </ul>
          </div>
          <div>
            <h2 className={footHeder}>Legal</h2>
            <ul className="flex flex-col gap-2">
              <li className={footNav}>GDPR</li>
              <li className={footNav}>Privacy Policy</li>
              <li className={footNav}>Terms of Service</li>
              <li className={footNav}>Disclaimer</li>
            </ul>
          </div>
        </div>
        <div className="">
          <h2 className={`text-gray-700 ${footHeder}`}>
            Subscribe to our Newsletter
          </h2>
          <p className="text-wrap font-medium text-gray-500 mb-5">
            We deliver high quality blog posts written by<br></br> professionals
            weekly. And we promise no spam.
          </p>
          <div className="w-full h-12 flex">
            <input
              placeholder="Hello"
              className="h-full w-[65%] px-4 border border-gray-300 rounded-tl-lg rounded-bl-lg focus:outline focus:outline-blue-700 focus:outline-2"
            />
            <button className="h-full w-[35%] rounded-br-lg rounded-tr-lg text-white bg-blue-700 hover:bg-blue-800 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
