import { useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import image from "../../images/heoImg.jpeg";
import Button from "../Button/Button";
import ReactModalAdapter from "../Helpers/ReactModalAdapter";
import ResponsiveVideoEmbed from "../Helpers/ResponsiveVideoEmbed";
import { AiOutlineClose } from "react-icons/ai";

// Removed styled-components code since we use Tailwind directly

const CloseModalButton =
  "absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500";

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  const watchVideoYoutubeUrl = "https://www.youtube.com/embed/rOnaQMGzOog?si=0Y362Go13jBcthxC";

  return (
    <div className="h-screen flex justify-center relative">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20">
        <div className="flex flex-col justify-center space-y-4">
          <div className="text-gray-800 items-center md:text-left z-10 text-center text-nowrap font-bold leading-snug text-xl xl:text-6xl">
            <h2>Beautiful & Cheap</h2>
            <h2 className="bg-blue-800 p-2 mt-4 text-white transform -skew-x-12 inline-block z-100">
              Simple & Classic.
            </h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex">
            <Button>Order now</Button>
            <div className="flex font-medium text-gray-500 transition-all duration-500 hover:text-blue-700">
              <div
                onClick={toggleModal}
                className="items-center flex px-4 cursor-pointer"
              >
                <FaRegPlayCircle size={35} />
              </div>
              <p className="text-center justify-center flex flex-col">
                Meet the Designers
              </p>
            </div>
          </div>
        </div>
        <img
          className="rounded-lg flex self-center order-first md:order-last"
          src={image}
          alt="Hero"
        />
      </div>
      <ReactModalAdapter
        closeTimeoutMS={300}
        className="absolute inset-0 xl:mx-auto m-4 sm:m-16 max-w-screen-xl flex justify-center items-center rounded-lg bg-gray-200 outline-none"
        overlayClassName="fixed inset-0 z-50 flex justify-center items-center"
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={true}
      >
        <button className={CloseModalButton} onClick={toggleModal}>
          <AiOutlineClose className="w-6 h-6" />
        </button>
        <div className="w-full lg:p-16">
          <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" />
        </div>
      </ReactModalAdapter>
    </div>
  );
};

export default Hero;
