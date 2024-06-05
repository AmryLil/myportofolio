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
  },
  {
    title: "Pixture",
    description:
      "A website that has a responsive display to make it easier for Muslims to read the Quran from anywhere.",
    techStack: ["NextJs", "JavaScript", "Html", "Tailwind", "Golang", "Gin"],
    imageUrl: "images/projectPic/pixture.png",
  },
  {
    title: "Bapukpedia",
    description:
      "A website that has a responsive display to make it easier for Muslims to read the Quran from anywhere.",
    techStack: ["Html", "Tailwind", "Javascript", "Python", "Django"],
    imageUrl: "images/projectPic/bapukpedia.png",
  },
  {
    title: "School Website",
    description:
      "A website that has a responsive display to make it easier for Muslims to read the Quran from anywhere.",
    techStack: ["Html", "Css", "Javascript", "PHP", "Mysql"],
    imageUrl: "images/projectPic/school.png",
  },
  {
    title: "Music Player App UI UX",
    description:
      "A website that has a responsive display to make it easier for Muslims to read the Quran from anywhere.",
    techStack: ["Canva"],
    imageUrl: "images/projectPic/UIUX.jpg",
  },
  {
    title: "Music Player Mobile App",
    description:
      "A website that has a responsive display to make it easier for Muslims to read the Quran from anywhere.",
    techStack: ["Kotlin", "XML", "Media Player"],
    imageUrl: "images/projectPic/mobileapp.jpg",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:rounded rounded-md ">
        {inView &&
          projects.map((project, index) => (
            <ProjectCard
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
