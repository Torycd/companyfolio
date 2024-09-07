// import React from 'react'

const FooterGrid = () => {
  const submitFunction = () => {
    //
  };
  const footHeder = "font-bold md:text-xl mb-5";
  const footNav =
    "transition ease-in-out duration-500 underline-offset-4 text-gray-500 hover:underline font-medium";
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-20 text-gray-700  text-center md:text-left">
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
        <div className="col-span-3 mb-5 md:mb-0 md:col-span-1 justify-self-center">
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
        <form
          onSubmit={submitFunction}
          className="w-full h-28 md:h-12 flex flex-col md:flex-row gap-4 md:gap-0 "
        >
          <input
            placeholder="Your Email Address"
            include={"@"}
            className="h-full w-100 md:w-[65%] px-4 border placeholder-opacity-55 bg-gray-200  border-gray-300 rounded-lg md:rounded-none md:rounded-tl-lg md:rounded-bl-lg  focus:outline focus:outline-blue-700 focus:outline-2"
          />
          <button
            type="submit"
            className="h-full w-100 md:w-[35%] rounded-lg md:rounded-none md:rounded-br-lg md:rounded-tr-lg text-white bg-blue-700 hover:bg-blue-800 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default FooterGrid;
