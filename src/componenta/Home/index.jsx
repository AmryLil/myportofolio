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
            <div className="md:text-2xl text-lg font-bold text-green-500 mt-2">
              <span className="md:text-3xl text-xl text-gray-50">
                I'm a {` `}
              </span>
              <TypeAnimation
                sequence={[
                  "Student",
                  1500,
                  "Backend Web Dev",
                  1500,
                  "Fullstack Web Dev",
                  1500,
                  "Frontend Web Dev",
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
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <h1 className="font-semibold text-white tracking-wider text-sm">
                Socmed
              </h1>
              <div className="h-[2px] bg-green-500 w-[53%]"></div>
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
          </div>
          <a
            href="https://export-download.canva.com/DtThY/DAGHjlDtThY/90/0-1285082337035381457.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240608%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240608T010629Z&X-Amz-Expires=72629&X-Amz-Signature=100dee11ff0710e491bad4c55bc7a37bdc1b57627b8a9ca6d5d2989f5fc49aca&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Ulil%2520Amry%2520CV.pdf&response-expires=Sat%2C%2008%20Jun%202024%2021%3A16%3A58%20GMT"
            className="transition-all w-40 px-4 py-1 rounded-lg border border-green-700 font-bold tracking-wide text-gray-50 hover:bg-green-600 hover:shadow-off hover:shadow-green-700 text-center"
          >
            Download CV
          </a>
        </div>
        <div className="relative md:p-8 p-6 ">
          <div className=" shadow-tipis shadow-green-500 md:h-[300px] md:w-[300px] h-[200px] w-[200px] overflow-hidden   transition-all animate-fade-up animate-once animate-duration-[1000ms] rounded-lg bg-white/10">
            <img
              src="images/photo3.png"
              alt="photo"
              className="overflow-hidden z-40 filter brightness-90  shadow-inner 0"
            />
          </div>
          <div className="border_siku border-t-4 border-l-4 absolute top-0 start-0 animate-fade-right  shadow-green-500 rounded-lg"></div>
          <div className="border_siku border-t-4 border-r-4 absolute top-0 end-0 animate-fade-left rounded-lg"></div>
          <div className="border_siku border-b-4 border-l-4 absolute bottom-0 start-0 animate-fade-right rounded-lg"></div>
          <div className="border_siku border-b-4 border-r-4 absolute bottom-0 end-0 animate-fade-left rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};
export default HomeLayouts;
