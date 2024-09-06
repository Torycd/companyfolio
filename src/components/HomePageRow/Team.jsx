// import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Team = () => {
  const CARD = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
      position: "Founder",
      name: "Adam Cuppy",
      twitter: "https://twitter.com",
      LinkedIn: "https://linkedin.com",
      GitHub: "https://github.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
      position: "Sr. Designer",
      name: "Charlotte Hale",
      twitter: "https://twitter.com",
      LinkedIn: "https://linkedin.com",
      GitHub: "https://github.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
      position: "Jr. Designer",
      name: "Silvester Wize",
      twitter: "https://twitter.com",
      LinkedIn: "https://linkedin.com",
      GitHub: "https://github.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80",
      position: "Lead Developer",
      name: "Himali Turn",
      twitter: "https://twitter.com",
      LinkedIn: "https://linkedin.com",
      GitHub: "https://github.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Sr. Developer",
      name: "Troye Sivan",
      twitter: "https://twitter.com",
      LinkedIn: "https://linkedin.com",
      GitHub: "https://github.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
      position: "Quality Assurance",
      name: "Holo Wo",
      twitter: "https://twitter.com",
      LinkedIn: "https://linkedin.com",
      GitHub: "https://github.com",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="space-y-4 mb-24">
        <h2 className="text-blue-800 uppercase font-medium">Our Team</h2>
        <div className="text-gray-800 font-bold text-3xl  md:text-6xl space-y-2">
          <h2 className="text-wrap">Meet These Fine Folks.</h2>
        </div>
        <p className="font-medium md:text-xl text-gray-500 text-wrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br></br>
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 md:gap-20">
        {CARD.map((det) => (
          <div className="flex flex-col gap-2" key={det.name}>
            <img src={det.imageSrc} className="w-64 h-64 " alt={det.name} />
            <h2 className="text-blue-800 uppercase font-medium">{det.position}</h2>
            <h2 className="font-semibold text-xl mb-5">{det.name}</h2>
            <div className="flex justify-around">
              <a href={det.twitter} className="text-gray-400 hover:text-blue-800 transition-all ease-in-out duration-500">
                <FaTwitter size={20} />
              </a>
              <a href={det.LinkedIn} className="text-gray-400 hover:text-blue-800">
                <FaLinkedin size={20} />
              </a>
              <a href={det.GitHub} className="text-gray-400 hover:text-blue-800">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
