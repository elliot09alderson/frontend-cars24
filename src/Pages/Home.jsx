import React from "react";
import Sidebar from "./Home/Sections/Sidebar/Sidebar";
import CarContainer from "./Home/Sections/CarContainer/CarContainer";
import Navbar from "../component_01/Navbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import mob from "../../public/Home_image/mob.jpg";
import img1 from "/businessmen.jpeg";
import img2 from "/familycar.jpg";
// import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { Swiper } from "swiper/types";
import karlo from "/logo/karlo.png";
import vector2 from "/vectors/vector2.jpg";
import vector3 from "/vectors/ve3ctor-4.jpg";
import vector1 from "/vectors/vector1.jpg";
import { Link } from "react-router-dom";
import Requirement from "./Home/Sections/Requirement";
const Home = () => {
  return (
    <div className="flex min-h-screen px-40 py-12   flex-col w-full">
      <div className="rounded-4xl shadow-sm shadow-black flex flex-col ">
        <div className="flex  h-24 mt-8 items-center justify-between  px-12">
          <div className="flex gap-2">
            {/* <img src="" alt="logo" /> */}
            <Link to={"/"} className="text-3xl font-bold">
              <img src={karlo} alt="karlo image" className="w-64" />
            </Link>
          </div>
          <div className="flex gap-6   text-sm items-center">
            <Link
              to="/ads"
              className="p-4 px-10 text-white rounded-xl text-xl bg-black cursor-pointer"
            >
              See Ads
            </Link>
            <Link
              to={"/login"}
              className="p-4 px-10 text-gray-800 rounded-xl bg-gray-300 font-semibiold text-xl  cursor-pointer"
            >
              Login :
            </Link>
          </div>
        </div>
        <div className="flex  w-full   h-full gap-14 py-20 px-30">
          <div className=" flex flex-col  justify-between ">
            <div className="flex flex-col gap-12">
              <div className="flex-col xl:text-8xl lg:text-6xl md:text-4xl  flex gap-2   font-semibold">
                <p className="">Rewarding </p>
                <p>accommodation</p>
                <p> for events</p>
              </div>
              <div className=" text-2xl pt-4  text-gray-400 leading-9">
                <p className="">You event is already creating a huge</p>
                <p>demand for hotel bookings, with</p>
                <p>significant commission going to waste. Hyatt</p>
              </div>
            </div>

            <div className="  w-[280px]  overflow-hidden  rounded-3xl h-[140px]  relative  bottom-40">
              <img src={img2} className="object-cover  " alt="" />
            </div>
          </div>
          <div className="">
            <img
              className="w-[800px] h-[1100px] object-cover"
              src={mob}
              alt="screen"
            />
          </div>
          <div className="flex w-[800px] flex-col">
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-end">
                <div className="border  flex  overflow-hidden border-none w-[260px] relative top-64  right-64 rounded-xl h-[150px]">
                  <img
                    src={img1}
                    className="object-cover rounded-3xl w-[250px]"
                    alt=""
                  />
                </div>
              </div>
              <div className=" xl:w-[450px] relative bottom-64 text-gray-400 text-xl">
                <h2 className="text-2xl text-gray-500">1M Property</h2>
                <p className=" text-2xl pt-4  leading-9">
                  Take back this otherwise lost revenue; and offer your
                  attendees a smart and simple way to access over 1m market
                  beating hotel prices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Requirement />

        <div className="flex flex-col gap-14 px-30 py-20">
          <div className="flex gap-14 items-center ">
            <div className="w-[60%] flex items-center justify-between bg-[#ffc2d1] rounded-2xl h-[450px] p-12">
              <div className="flex flex-col gap-4 items-start justify-center">
                <img src="" alt="" />
                <h1 className="text-4xl font-semibold mb-4">Business Owners</h1>
                <p className="text-xl text-gray-500">
                  Running a business is not that easy these days! Put your
                  prospecting on complete autopilot, so you could focus on other
                  important things.
                </p>
              </div>
              <img src={vector3} alt="" className=" w-72 object-cover" />
            </div>
            <div className="w-[40%] bg-[#e5e6e4] flex  gap-4 items-center rounded-2xl h-[450px] p-12">
              <div className="flex flex-col gap-4 items-start  justify-center">
                <img src="" alt="" />
                <h1 className="text-4xl font-semibold mb-4">Recruiters</h1>
                <p className="text-xl text-gray-500  w-[80%]">
                  Automate Linkedin lead generation for your company, onboard
                  your entire team to Dripify to manage their campaigns and view
                  analytics - all from your control panel.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-14 items-center ">
            <div className="w-[40%] bg-[#62b6cb] flex  gap-4 items-center rounded-2xl h-[450px] p-12">
              <div className="flex flex-col gap-4 items-start justify-center">
                <img src="" alt="" />
                <h1 className="text-4xl   font-semibold mb-4">
                  Marketing Agencie
                </h1>
                <p className="text-xl text-gray-500    w-[80%]">
                  Running a business is not that easy these days! Put your
                  prospecting on complete autopilot, so you could focus on other
                  important things.
                </p>
              </div>
            </div>
            <div className="w-[60%]  bg-[#ffe5ec]  rounded-2xl h-[450px] p-12 flex items-center justify-between">
              <div className="flex flex-col gap-4 items-start justify-center">
                <img src="" alt="" />
                <h1 className="text-4xl font-semibold mb-4">Sales Teams</h1>
                <p className="text-xl text-gray-500  w-[80%]">
                  Automate Linkedin lead generation for your company, onboard
                  your entire team to Dripify to manage their campaigns and view
                  analytics - all from your control panel.
                </p>
                <p className="mt-12-">Learn More </p>
              </div>
              <img src={vector1} alt="" className=" w-72 object-cover" />
            </div>
          </div>
        </div>

        <div className="min-h-screen  2xl:px-[400px] xl:px-[200px] lg:px-[100px] my-40">
          <div className=" xl:p-24 flex flex-col gap-20 xl:pb-72 rounded-3xl shadow-sm shadow-gray-500">
            <div className="flex flex-col items-center justifty-center ">
              <h1 className="py-5 xl:text-6xl lg:text-4xl  leading-20 text-center">
                Powerful <span className="bg-[#fc2e00] px-2">lead</span>
                generation software that brings incredible results
              </h1>
              <p className="text-lg text-gray-500 text-center py-4">
                On average each Dripify user achieves the following numbers
              </p>
            </div>

            <div className="flex items-center justify-between gap-20  ">
              <div>
                <h1 className="text-6xl py-4 text-center">50+</h1>
                <p className="text-gray-400 text-center ">
                  50+ cities covered across 5 States{" "}
                </p>
              </div>
              <div>
                <h1 className="text-6xl py-4 text-center">200+ </h1>
                <p className="text-gray-400 ">New Ads Every Month </p>
              </div>
              <div>
                <h1 className="text-6xl py-4 text-center">350+</h1>
                <p className="text-gray-400 ">
                  Verified Agents which bring the best deals on the table.{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <div>
                <h1 className="text-6xl py-4 text-center">X10</h1>
                <p className="text-gray-400 text-center">
                  overall productivity
                </p>
              </div>
              <div>
                <h1 className="text-6xl py-4 text-center">100%</h1>
                <p className="text-gray-400 text-center">
                  Assured By RTO Department
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
