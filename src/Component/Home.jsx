import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="mt-4 px-4 md:px-40 overflow-hidden">
        <div className="flex space-x-2 items-center text-blue-600 mb-4">
          <FaArrowLeft style={{ color: "blue" }} />
          <span className="font-semibold cursor-pointer">Donate with Paypal</span>
        </div>
        <div className="relative">
          <img
            src="image/gradient.jpg"
            className="md:h-[350px] h-[150px] w-[95%] rounded-t-xl"
          />
        </div>
        <div className="absolute bottom-1/2 md:top-2/3 lg:bottom-1/4 xl:top2/3">
          <div className=" border-2 px-1 py-1 md:px-4 md:py-4 rounded-full bg-white  ">
            <img src="image/mobile.png" className="h-[50px] w-[50px]" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16">
          <div className=" p-4 md:w-11/12">
            <div className="mb-5">
              <p>Donate to PayPal Giving Fund</p>
              <h1 className="text-4xl font-semibold">
                Figures of Speech Theatre
              </h1>
            </div>
            <div className="w-fit rounded-full px-2 bg-blue-200 text-blue-800">
              Arts & Culture
            </div>
            <div className="font-semibold mt-4 mb-4">
              <p>FreePort,ME</p>
              <p>EIN:12-34455</p>
            </div>
            <div className="flex gap-3">
              <div className="px-3 py-2 rounded-full bg-slate-100">
                <FontAwesomeIcon icon={faImage} style={{ color: "blue" }} />
              </div>
              <div className="px-3 py-2 rounded-full bg-slate-100">
                <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
              </div>
            </div>
            <div className="font-semibold mt-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                sequi commodi quam, quasi voluptatem fugit? Hic itaque
                reiciendis commodi, fugit facere nobis ipsa! Quod cum sunt
                recusandae ipsam earum? Nam?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Totam, impedit.
              </p>
            </div>
            <div className="mt-2 md:mt-4 ">
              <p>Source:Paypal Giving Fund Charity Profile</p>
            </div>
            <div className="mt-2 md:mt-3 text-gray-500">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, odit.
              </p>
            </div>
          </div>
          <div className=" p-4 md:w-11/12">
            <div className=" flex flex-wrap justify-start items-center">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-5 rounded-lg bg-white font-semibold hover:bg-blue-900 hover:text-white border shadow-lg transition duration-400">
                  $25
                </div>
                <div className="p-5 rounded-lg bg-white font-semibold border shadow-lg hover:bg-blue-900 hover:text-white transition duration-400">
                  $100
                </div>
                <div className="p-5 rounded-lg hover:bg-blue-900 hover:text-white font-semibold bg-white border shadow-lg transition duration-400">
                  $125
                </div>
                <div className="p-5 rounded-lg bg-white font-semibold hover:bg-blue-900 hover:text-white border shadow-lg transition duration-400">
                  $150
                </div>
                <div className="p-5 rounded-lg bg-white font-semibold hover:bg-blue-900 hover:text-white border shadow-lg transition duration-400">
                  $175
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center mt-4 gap-3 px-3">
              <label className="font-semibold px-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="h-4 w-5"
                />
                <span className="pl-2">
                  Share My name and email with this clarity
                </span>
              </label>
            </div>
            <div className="bg-blue-900 hover:bg-blue-500  text-white px-3 py-2 rounded-full w-fit mt-3 transition duration-400">
              Donate Now
            </div>
            <div className="mt-3 flex flex-col text-wrap font-semibold">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                ipsam!
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur
                <span className="text-blue-500">adipisicing elit</span>. In a
                sunt, ipsum quia nulla impedit.
              </li>
              <li>
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                <span className="text-blue-500">
                  Ipsa debitis non architecto deleniti culpa adipisci veniam
                  neque
                </span>
                , nemo omnis quia nulla, itaque rem provident corporis saepe
                reprehenderit aspernatur harum molestias.
              </li>
              <li>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span className="text-blue-500">
                  adipisicing elitMagnam officia autem atque, repellat dicta
                  aliquid nemo
                </span>{" "}
                possimus ad officiis quibusdam quos numquam deleniti rem aperiam
                expedita ex, quod ipsam odit.
              </li>
            </div>
            <div className="border rounded-md shadow-md mt-3">
              <p className="font-semibold text-center">
                share and inspire others
              </p>
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://www.facebook.com/example"
                  target="_blank"
                  className="px-2 py-2 items-center rounded-full border"
                >
                  <FaFacebook style={{ color: "blue" }} />
                </a>
                <a
                  href="https://twitter.com/?lang=en"
                  target="_blank"
                  className="px-2 py-2 items-center rounded-full border"
                >
                  <FaTwitter style={{ color: "blue" }} />
                </a>
                <a
                  href="https://support.google.com/mail/answer/56256?hl=en"
                  target="_blank"
                  className="px-2 py-2 items-center rounded-full border "
                >
                  <MdEmail style={{ color: "blue" }} />
                </a>
              </div>
              <div className="flex md:flex-row flex-col justify-start items-center  bg-gray-100 m-2 h-[100px] w-[95%] ">
                <a
                  href=""
                  className=" px-1 whitespace-normal overflow-hidden overflow-ellipsis font-semibold"
                >
                  https://www.paypal.com/US/fu
                  ndraiser/charity/1297594
                </a>
                <button className="border-2 border-black rounded-full px-4 py-2">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
