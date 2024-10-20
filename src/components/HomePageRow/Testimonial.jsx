const Testimonial = () => {
  return (
    <div className="min-h-screen py-20 flex flex-col space-y-5 justify-center">
      <div className="flex flex-row justify-center">
        <div className="text-gray-800 font-bold flex justify-center text-center md:justify-start items-center gap-5  text-2xl md:text-3xl xl:text-5xl space-y-2">
          <h2>Customers</h2>
          <h2 className="bg-blue-800 py-3 px-2 mt-4 text-white transform -skew-x-12 inline-block z-100">
            Choose Us ?
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-3 mt-5 gap-5">
        <div className="px-20 flex flex-col justify-center items-center space-y-5">
          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80"
            alt="testimonial"
            className="h-20 w-20 rounded-full"
          />
          <p className="text-center font-semibold opacity-70">
            "Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia."
          </p>
          <div>
            <span></span>
            <p className="uppercase">Charlotte Hale</p>
          </div>
        </div>
        <div className="px-20 flex flex-col justify-center items-center space-y-5">
          <img
            src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80"
            alt="testimonial"
            className="h-20 w-20 rounded-full"
          />
          <p className="text-center font-semibold opacity-70">
            "Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia."
          </p>
          <div>
            <span></span>
            <p className="uppercase">Charlotte Hale</p>
          </div>
        </div>
        <div className="px-20 flex flex-col justify-center items-center space-y-5">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80"
            alt="testimonial"
            className="h-20 w-20 rounded-full"
          />
          <p className="text-center font-semibold opacity-70">
            "Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia."
          </p>
          <div>
            <span></span>
            <p className="uppercase">Charlotte Hale</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
