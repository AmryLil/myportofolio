import { FaGithub, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const HomeLayouts = () => {
  return (
    <div className="container h-screen md:px-28 pt-8 w-full">
      <div className="flex md:flex-row flex-col-reverse h-screen items-center justify-center md:justify-between gap-y-8">
        <div className="md:w-[55%] w-full flex flex-col gap-y-5 animate-fade-right justify-center md:justify-start items-center md:items-start ">
          <div>
            <div className="md:text-5xl text-2xl font-bold text-gray-50">
              Hi, It's <span className="text-green-500">Ulil Amry AQ</span>
            </div>
            <div className="md:text-2xl text-lg font-bold text-gray-50 mt-2">
              <TypeAnimation
                sequence={[
                  "I,m a Student",
                  1500,
                  "I,m a Backend Web Dev",
                  1500,
                  "I,m a Fullstack Web Dev",
                  1500,
                  "I,m a Frontend Web Dev",
                  1500,
                ]}
                wrapper="span"
                speed={20}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="text-sm text-gray-50 text-center px-4 md:px-0 md:text-start">
            Keep learning and growing every day to build a brighter future
            filled with endless opportunities and success.
          </div>
          <div className=" flex gap-4 text-gray-50">
            <a href="#">
              <FaLinkedin size={20} className="socmed" />
            </a>
            <a href="https://github.com/AmryLil">
              <FaGithub size={20} className="socmed" />
            </a>
            <a href="https://www.instagram.com/amrylil_/">
              <FaInstagram size={20} className="socmed" />
            </a>
            <a href="mailto:ulilamry432@gmail.com">
              <FaGoogle size={20} className="socmed" />
            </a>
          </div>
          <a
            href="https://drive.usercontent.google.com/u/0/uc?id=1lUdaToPidUlRyguTge-901A2JHJxSp-r&export=download"
            className="transition-all w-40 px-4 py-1 rounded-lg border border-green-700 font-bold tracking-wide text-gray-50 hover:bg-green-600 hover:shadow-off hover:shadow-green-700 text-center"
          >
            Download CV
          </a>
        </div>
        <div className="relative md:p-8 p-6 ">
          <div className=" md:h-[300px] md:w-[300px] h-[200px] w-[200px] overflow-hidden   transition-all animate-fade-up animate-once animate-duration-[1000ms] bg-gray-800 p-2">
            <img
              src="../images/photo3.png"
              alt="photo"
              className="overflow-hidden z-40 filter brightness-90  shadow-inner 0"
            />
          </div>
          <div className="border_siku border-t-4 border-l-4 absolute top-0 start-0 animate-fade-right"></div>
          <div className="border_siku border-t-4 border-r-4 absolute top-0 end-0 animate-fade-left"></div>
          <div className="border_siku border-b-4 border-l-4 absolute bottom-0 start-0 animate-fade-right"></div>
          <div className="border_siku border-b-4 border-r-4 absolute bottom-0 end-0 animate-fade-left"></div>
        </div>
      </div>
    </div>
  );
};
export default HomeLayouts;