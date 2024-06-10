import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./card";

const projects = [
  {
    title: "Personal Website",
    description:
      "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
    techStack: ["JavaScript", "Tailwind", "ReactJs"],
    imageUrl: "images/projectPic/portofolio1.png",
    url: "https://github.com/AmryLil/myportofolio",
  },
  {
    title: "Pixture",
    description:
      "Pixture is a website that offers a collection of photos. Users can upload, collect, and download photos.",
    techStack: ["NextJs", "JavaScript", "Html", "Tailwind"],
    imageUrl: "images/projectPic/pixture.png",
    url: "https://github.com/AmryLil/pixture",
  },
  {
    title: "E Commerce Website",
    description:
      "This e-commerce website allows users to purchase items online and includes a menu for becoming a seller on the platform.",
    techStack: ["Html", "Tailwind", "Javascript"],
    imageUrl: "images/projectPic/bapukpedia.png",
    url: "https://github.com/AmryLil/e_commerce",
  },
  {
    title: "School Website",
    description:
      "This school website features the profiles of the school, teachers, and departments. There are menus leading to dashboards for administrators, as well as for teachers and students to submit and upload assignments and materials.",
    techStack: ["Html", "Css", "Javascript", "PHP", "Mysql"],
    imageUrl: "images/projectPic/school.png",
    url: "https://github.com/AmryLil/web-sekolah",
  },
  {
    title: "Music Player App UI UX",
    description:
      "This is a music player app with a user interface and user experience design crafted using Canva.",
    techStack: ["Canva"],
    imageUrl: "images/projectPic/UIUX.jpg",
  },
  {
    title: "Music Player Mobile App",
    description:
      "The music player app enables users to play local and online music (via the YouTube API). Users can create and share playlists with others.",
    techStack: ["Kotlin", "XML", "Media Player"],
    imageUrl: "images/projectPic/mobileapp.jpg",
    url: "https://github.com/AmryLil/MusicPlayer",
  },
  {
    title: "Hotel System Website",
    description:
      "This is an online hotel booking website where customers can reserve hotel rooms, set the duration of their stay, and negotiate prices online.",
    techStack: ["PHP", "Javascript", "Mysql", "Html", "CSS"],
    imageUrl: "images/projectPic/hotelweb.jpeg",
    url: "https://github.com/AmryLil/Hotel-system",
  },
  {
    title: "Pixture API",
    description:
      "This is the API for my Pixture web app, featuring login, sign up, and user data functionalities, currently under development.",
    techStack: ["Golang", "Gin", "Gorm"],
    imageUrl: "images/projectPic/api_pixture.png",
    url: "https://github.com/AmryLil/api_pixture",
  },
  {
    title: "E Commerce API",
    description:
      "This is the API for my e-commerce website, containing endpoints for login, signup, user details, becoming a seller, and shopping cart functionalities, currently under development.",
    techStack: ["Python", "Django", "Django Rest Api"],
    imageUrl: "images/projectPic/api_bapukpedia.png",
    url: "https://github.com/AmryLil/api_e_commerce",
  },
];
let dly = 0;
const PortofolioLayout = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className="container mx-auto p-4 h-screen md:px-28 px-6 mt-10"
    >
      <div className="flex items-center gap-3 flex-row mb-10">
        <h1 className="md:text-4xl text-2xl font-bold text-white ">
          Post Project Experience
        </h1>
        <div className="h-1 bg-green-500 w-[60%] translate-y-1 md:block hidden"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:rounded rounded-md pb-10">
        {inView &&
          projects.map((project, index) => (
            <ProjectCard
              url={project.url}
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              imageUrl={project.imageUrl}
              style={{ animationDelay: `${index * 0.4}s` }}
            />
          ))}
      </div>
    </div>
  );
};

export default PortofolioLayout;
