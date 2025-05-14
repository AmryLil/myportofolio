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
      "Our online store lets you shop easily from anywhere. We're constantly improving and adding new features to enhance your shopping experience.",
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

const PortfolioLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollContainerRef = useRef(null);
  const [direction, setDirection] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const prevProjectRef = useRef(null);
  const currentProjectRef = useRef(null);

  useEffect(() => {
    // Store current project data for smooth transitions
    prevProjectRef.current = projects[currentIndex];
    
    // Mark first render complete after mount
    if (isFirstRender) {
      setTimeout(() => setIsFirstRender(false), 100);
    }
  }, [currentIndex, isFirstRender]);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, backgroundColor: "#10b981" },
    tap: { scale: 0.95 }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection('left');
      const newIndex =
        currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection('right');
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

    // Set longer animation time to ensure data doesn't disappear too quickly
    const timeoutId = setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Increased from 500ms to 700ms

    // Update the current project reference for transitions
    currentProjectRef.current = projects[currentIndex];

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  // Pre-load images to prevent flashing during transitions
  useEffect(() => {
    // Preload images for smoother transitions
    projects.forEach(project => {
      const img = new Image();
      img.src = project.imageUrl;
    });
  }, []);

  // Handle scroll with debounce to prevent flickering
  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer && !isAnimating) {
      const elementWidth = scrollContainer.scrollWidth / projects.length;
      const newIndex = Math.round(scrollContainer.scrollLeft / elementWidth);
      
      if (newIndex !== currentIndex) {
        setDirection(newIndex > currentIndex ? 'right' : 'left');
        setCurrentIndex(newIndex);
      }
    }
  };

  // Improved scroll handler with debouncing
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollTimeout;
    
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };
    
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", debouncedScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", debouncedScroll);
        clearTimeout(scrollTimeout);
      }
    };
  }, [currentIndex, isAnimating]);

  // Auto rotation for the carousel
  useEffect(() => {
    const autoRotate = setTimeout(() => {
      if (!isAnimating && !hoveredIndex) {
        handleNext();
      }
    }, 5000); // Change project every 5 seconds if not interacting

    return () => clearTimeout(autoRotate);
  }, [currentIndex, isAnimating, hoveredIndex]);

  const { ref: lineRef, inView: lineInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: mainRef, inView: mainView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Progress indicator calculation
  const progressPercentage = ((currentIndex + 1) / projects.length) * 100;

  return (
    <motion.div
      ref={lineRef}
      className="container mx-auto p-4 h-screen md:px-28 px-6 mt-10 animated-translateY"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {lineInView && (
        <motion.div 
          className="flex items-center gap-1 flex-row mb-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="md:text-5xl text-2xl font-bold text-white">
            Post Project Experience
          </h1>
          <motion.div 
            className="h-2 bg-green-500 w-[8px] md:block hidden self-end -translate-y-1"
            initial={{ width: 0 }}
            animate={{ width: "8px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
          ></motion.div>
        </motion.div>
      )}
      
      <div className="flex h-full" ref={mainRef}>
        {mainView && (
          <>
            <motion.div 
              className="w-[40%] hidden md:block space-y-3 text-slate-50 pr-5 pt-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Project Details Section - Using AnimatePresence for smooth transitions */}
              <motion.div
                key={`project-details-${currentIndex}`}
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Title with Persistent Animation */}
                <motion.div 
                  className="h-14 mb-2"
                  initial={false}
                >
                  <motion.h1 
                    className="font-bold text-3xl text-green-400"
                    initial={isFirstRender ? { opacity: 1 } : { opacity: 0, x: direction === 'left' ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {projects[currentIndex].title}
                  </motion.h1>
                </motion.div>

                {/* Project Description with Persistent Animation */}
                <motion.div 
                  className="h-[70px] overflow-hidden mb-3"
                  initial={false}
                >
                  <motion.p
                    initial={isFirstRender ? { opacity: 1 } : { opacity: 0, x: direction === 'left' ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                  >
                    {projects[currentIndex].description}
                  </motion.p>
                </motion.div>

                {/* Technologies Section */}
                <motion.div 
                  className="h-40"
                  initial={false}
                >
                  <motion.h4 
                    className="text-green-400 font-semibold text-lg mt-2"
                    initial={isFirstRender ? { opacity: 1 } : { opacity: 0, x: direction === 'left' ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    Technologies.
                  </motion.h4>
                  
                  <motion.div 
                    className="grid grid-cols-3 gap-2 mt-3"
                    initial={false}
                  >
                    {projects[currentIndex].techStack.map((tech, index) => (
                      <motion.div 
                        key={`${currentIndex}-${tech.name}`}
                        initial={isFirstRender ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                        className="transform origin-center"
                      >
                        <Cardtech title={tech.name} src={tech.url} />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Action Buttons */}
                {projects[currentIndex].url && (
                  <motion.div 
                    className="flex gap-2 items-end"
                    initial={isFirstRender ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.div 
                      className="flex rounded-md text-slate-900 justify-center items-center bg-slate-50 cursor-pointer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <h3 className="mx-3 font-bold">Github</h3>
                      <a
                        href={projects[currentIndex].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl cursor-pointer"
                      >
                        <FaGithubSquare />
                      </a>
                    </motion.div>
                    <motion.div 
                      className="flex rounded-md text-slate-900 justify-center items-center bg-slate-50 p-0.5 group cursor-pointer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <h3 className="mx-3 font-bold">Demo</h3>
                      <motion.div 
                        className="bg-slate-900 rounded-md p-1.5"
                        transition={{ duration: 0.3 }}
                      >
                        <a
                          href={projects[currentIndex].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-slate-50 cursor-pointer"
                        >
                          <GrFormNextLink className="group-hover:rotate-0 rotate-45 transition-all duration-300" />
                        </a>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-end gap-2 md:w-[60%] w-full relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative w-full">
                <div
                  ref={scrollContainerRef}
                  className="flex border rounded-lg overflow-hidden border-green-600 overflow-x-auto no-scrollbar snap-x snap-mandatory w-full h-[400px] gap-3 hover:shadow-lg hover:shadow-green-600/30 transition-all duration-300"
                  style={{ scrollBehavior: "smooth" }}
                  onMouseEnter={() => setHoveredIndex(currentIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.imageUrl}
                      className="flex-shrink-0 snap-center w-full h-full cursor-pointer relative"
                      onMouseEnter={() => setHoveredIndex(index)}
                    >
                      {/* Using layout animation to avoid flickering */}
                      <motion.img
                        src={project.imageUrl}
                        alt={project.title}
                        className="object-cover content-start h-full w-full"
                        variants={imageVariants}
                        initial="initial"
                        whileHover="hover"
                        animate={hoveredIndex === index ? "hover" : "initial"}
                        layoutId={`project-image-${index}`}
                      />
                      
                      {/* Overlay with project info - visible on mobile */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 md:hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {project.techStack.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="text-xs bg-green-600 px-2 py-1 rounded">
                              {tech.name}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="text-xs bg-green-600/50 px-2 py-1 rounded">
                              +{project.techStack.length - 3}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Project number indicator */}
                <motion.div 
                  className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {currentIndex + 1}/{projects.length}
                </motion.div>
                
                {/* Progress bar */}
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              </div>
              
              <div className="flex justify-between w-full mt-4">
                <motion.button
                  onClick={handlePrev}
                  className="transform bg-green-600 p-2 rounded-full shadow-lg"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <GrFormPrevious size={28} />
                </motion.button>
                
                {/* Project dots navigation */}
                <div className="flex items-center gap-1">
                  {projects.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-2 rounded-full cursor-pointer ${
                        index === currentIndex ? "w-6 bg-green-500" : "w-2 bg-gray-500"
                      }`}
                      onClick={() => {
                        if (!isAnimating) {
                          setDirection(index > currentIndex ? 'right' : 'left');
                          setCurrentIndex(index);
                        }
                      }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </div>
                
                <motion.button
                  onClick={handleNext}
                  className="transform bg-green-600 p-2 rounded-full shadow-lg"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <GrFormNext size={28} />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioLayout;