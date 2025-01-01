import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { GrFormNext, GrFormNextLink, GrFormPrevious } from "react-icons/gr";
import { useInView } from "react-intersection-observer";
import Cardtech from "./cardtech";

const projects = [
  {
    title: "Personal Website",
    description:
      "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
    techStack: [
      { name: "JavaScript", url: "images/javascript.png" },
      { name: "HTML", url: "images/html.png" },
      { name: "Tailwind", url: "images/tailwind.png" },
      { name: "ReactJs", url: "images/reactjs.png" },
    ],
    imageUrl: "images/projectPic/portofolio1.png",
    url: "https://github.com/AmryLil/myportofolio",
  },
  {
    title: "Pixture",
    description:
      "Pixture is a website that offers a collection of photos. Users can upload, collect, and download photos.",
    techStack: [
      { name: "NextJs", url: "images/nextjs.png" },
      { name: "JavaScript", url: "images/javascript.png" },
      { name: "Html", url: "images/html.png" },
      { name: "Tailwind", url: "images/tailwind.png" },
    ],
    imageUrl: "images/projectPic/pixture.png",
    url: "https://github.com/AmryLil/pixture",
  },
  {
    title: "E Commerce Website",
    description:
      "This e-commerce website allows users to purchase items online and includes a menu for becoming a seller on the platform.",
    techStack: [
      { name: "Html", url: "images/html.png" },
      { name: "Tailwind", url: "images/tailwind.png" },
      { name: "JavaScript", url: "images/javascript.png" },
    ],
    imageUrl: "images/projectPic/bapukpedia.png",
    url: "https://github.com/AmryLil/e_commerce",
  },
  {
    title: "School Website",
    description:
      "This school website features the profiles of the school, teachers, and departments. There are menus leading to dashboards for administrators, as well as for teachers and students to submit and upload assignments and materials.",
    techStack: [
      { name: "Html", url: "images/html.png" },
      { name: "Css", url: "images/css.png" },
      { name: "JavaScript", url: "images/javascript.png" },
      { name: "PHP", url: "images/php.png" },
      { name: "Mysql", url: "images/mysql.png" },
    ],
    imageUrl: "images/projectPic/school.png",
    url: "https://github.com/AmryLil/web-sekolah",
  },

  {
    title: "Music Player Mobile App",
    description:
      "The music player app enables users to play local and online music (via the YouTube API). Users can create and share playlists with others.",
    techStack: [
      { name: "Kotlin", url: "images/kotlin.png" },
      { name: "XML", url: "images/xml.png" },
      { name: "Firebase", url: "images/firebase.png" },
    ],
    imageUrl: "images/projectPic/mobileapp.jpg",
    url: "https://github.com/AmryLil/MusicPlayer",
  },
  {
    title: "Hotel System Website",
    description:
      "This is an online hotel booking website where customers can reserve hotel rooms, set the duration of their stay, and negotiate prices online.",
    techStack: [
      { name: "PHP", url: "images/php.png" },
      { name: "JavaScript", url: "images/javascript.png" },
      { name: "Mysql", url: "images/mysql.png" },
      { name: "Html", url: "images/html.png" },
      { name: "CSS", url: "images/css.png" },
    ],
    imageUrl: "images/projectPic/hotelweb.jpeg",
    url: "https://github.com/AmryLil/Hotel-system",
  },
  {
    title: "Pixture API",
    description:
      "This is the API for my Pixture web app, featuring login, sign up, and user data functionalities, currently under development.",
    techStack: [
      { name: "Golang", url: "images/golang.png" },
      { name: "Gin", url: "images/gin.png" },
      { name: "MySql", url: "images/mysql.png" },
    ],
    imageUrl: "images/projectPic/api_pixture.png",
    url: "https://github.com/AmryLil/api_pixture",
  },
  {
    title: "E Commerce API",
    description:
      "This is the API for my e-commerce website, containing endpoints for login, signup, user details, becoming a seller, and shopping cart functionalities, currently under development.",
    techStack: [
      { name: "Python", url: "images/python.png" },
      { name: "Django", url: "images/django.png" },
      { name: "MySql", url: "images/mysql.png" },
    ],
    imageUrl: "images/projectPic/api_bapukpedia.png",
    url: "https://github.com/AmryLil/api_e_commerce",
  },
  {
    title: "Online Shop",
    description:
      "Our online store lets you shop easily from anywhere. We’re constantly improving and adding new features to enhance your shopping experience.",
    techStack: [
      { name: "React JS", url: "images/reactjs.png" },
      { name: "JavaScript", url: "images/javascript.png" },
      { name: "Tailwind", url: "images/tailwind.png" },
    ],
    imageUrl: "images/projectPic/olshop.png",
    url: "https://github.com/AmryLil/goshop",
  },
  {
    title: "Online Shop API",
    description:
      "This is the API for my Online shop website, containing endpoints for login, signup, user details, becoming a seller, and shopping cart functionalities, currently under development.",
    techStack: [
      { name: "Golang", url: "images/golang.png" },
      { name: "Gin", url: "images/gin.png" },
      { name: "Gorm", url: "images/gorm.png" },
      { name: "MySql", url: "images/mysql.png" },
    ],
    imageUrl: "images/projectPic/api_olshop.png",
    url: "https://github.com/AmryLil/api_goshop",
  },
];

const PortofolioLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollContainerRef = useRef(null);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const newIndex =
        currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const newIndex =
        currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const elementWidth = scrollContainer.scrollWidth / projects.length;
      scrollContainer.scrollTo({
        left: elementWidth * currentIndex,
        behavior: "smooth",
      });
    }

    const timeoutId = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // duration should match animation duration

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const elementWidth = scrollContainer.scrollWidth / projects.length;
      const index = Math.round(scrollContainer.scrollLeft / elementWidth);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const { ref: lineRef, inView: lineInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: mainRef, inView: mainView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={lineRef}
      className="container mx-auto p-4 h-screen md:px-28 px-6 mt-10"
    >
      {lineInView && (
        <div className="flex items-center gap-1 flex-row mb-10 animated-translateY">
          <h1 className="md:text-5xl text-2xl font-bold text-white">
            Post Project Experience
          </h1>
          <div className="h-2 bg-green-500 w-[8px] md:block hidden self-end -translate-y-1"></div>
        </div>
      )}
      <div className="flex h-full" ref={mainRef}>
        {mainView && (
          <>
            <div className="w-[40%] space-y-3 text-slate-50 pr-5 pt-3">
              <div
                key={projects[currentIndex].title}
                className="animated-translateY"
              >
                <h1 className="font-bold text-3xl animated-translateY">
                  {projects[currentIndex].title}
                </h1>
                <p className="h-[70px] overflow-hidden animated-translateY">
                  {projects[currentIndex].description}
                </p>
                <div className="h-40">
                  <h4 className="text-green-400 font-semibold text-lg mt-2 animated-translateY">
                    Technologies.
                  </h4>
                  <div className="grid grid-cols-3 gap-2 mt-3 animated-translateY">
                    {projects[currentIndex].techStack.map((tech, index) => (
                      <Cardtech key={index} title={tech.name} src={tech.url} />
                    ))}
                  </div>
                </div>
                {projects[currentIndex].url && (
                  <div className="flex gap-2  items-end animated-translateY">
                    <div className="flex rounded-md text-slate-900 justify-center items-center bg-slate-50 hover:scale-105 transition-all duration-150 cursor-pointer">
                      <h3 className="mx-3 font-bold">Github</h3>
                      <a
                        href={projects[currentIndex].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl  cursor-pointer"
                      >
                        <FaGithubSquare />
                      </a>
                    </div>
                    <div className="flex rounded-md text-slate-900 justify-center items-center bg-slate-50 p-0.5 group hover:scale-105 transition-all duration-150 cursor-pointer">
                      <h3 className="mx-3 font-bold">Demo</h3>
                      <div className=" bg-slate-900 rounded-md p-1.5">
                        <a
                          href={projects[currentIndex].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-slate-50  hover:scale-105 transition-all duration-150 cursor-pointer"
                        >
                          <GrFormNextLink className="rotate-45 group-hover:rotate-0 transition-all duration-150" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col items-end gap-2 w-[60%] relative animated-scale"
            >
              <div
                ref={scrollContainerRef}
                className="flex border rounded-lg overflow-hidden border-green-600 overflow-x-auto no-scrollbar snap-x snap-mandatory w-full h-[60%] gap-3 hover:shadow-off hover:shadow-green-600 transition-all duration-150"
                style={{ scrollBehavior: "smooth" }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.imageUrl}
                    className="flex-shrink-0  snap-center w-full h-full  cursor-pointer relative"
                  >
                    <motion.img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover content-start h-full w-full"
                      variants={{
                        initial: {
                          opacity: 0,
                          x: index < currentIndex ? -100 : 100,
                        },
                        animate: { opacity: 1, x: 0 },
                      }}
                      initial="initial"
                      animate="animate"
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handlePrev}
                  className="transform bg-green-600 hover:scale-105 hover:bg-green-500  transition-all duration-150 p-1 rounded-sm"
                >
                  <GrFormPrevious size={40} />
                </button>
                <button
                  onClick={handleNext}
                  className="transform bg-green-600 hover:scale-105 hover:bg-green-500 transition-all duration-150 p-1 rounded-sm"
                >
                  <GrFormNext size={40} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PortofolioLayout;
