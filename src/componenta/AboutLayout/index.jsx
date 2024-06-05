import { useState } from "react";
import { useInView } from "react-intersection-observer";
import SkillCard from "./card";

const AboutLayout = () => {
  const TechStackArray = [
    {
      title: "HTML",
      src: "images/html.png",
      level: "Advanced",
    },
    { title: "CSS", src: "images/css.png", level: "Advanced" },
    {
      title: "JavaScript",
      src: "images/javascript.png",
      level: "Intermediate",
    },
    {
      title: "ReactJS",
      src: "images/reactjs.png",
      level: "Intermediate",
    },
    { title: "Node.js", src: "images/nodejs.png", level: "Beginner" },
    { title: "NextJS", src: "images/nextjs.png", level: "Beginner" },
    { title: "Golang", src: "images/golang.png", level: "Beginner" },
    { title: "Gin Gonic", src: "images/gin.png", level: "Beginner" },
    { title: "JWT Auth", src: "images/jwt.png", level: "Beginner" },
    { title: "Python", src: "images/python.png", level: "Beginner" },
    {
      title: "Tailwind",
      src: "images/tailwind.png",
      level: "Beginner",
    },
    { title: "PHP", src: "images/php.png", level: "Beginner" },
    { title: "MySQL", src: "images/mysql.png", level: "Beginner" },
    { title: "Django", src: "images/django.png", level: "Beginner" },
    {
      title: "Restfull API",
      src: "images/restful.png",
      level: "Beginner",
    },
  ];
  const ToolsDataArray = [
    {
      title: "Git",
      src: "images/git.png",
      level: "Advanced",
    },
    { title: "Github", src: "images/github.png", level: "Advanced" },
    {
      title: "NPM",
      src: "images/npm.png",
      level: "Intermediate",
    },
    {
      title: "Postman",
      src: "images/postman.png",
      level: "Intermediate",
    },
    { title: "Android Studio", src: "images/android.png", level: "Beginner" },
    { title: "VS Code", src: "images/vscode.png", level: "Beginner" },
  ];

  const [skillsData, setSkillsData] = useState(TechStackArray);

  const handleBtnSkills = (data) => {
    return () => setSkillsData(data);
  };

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container h-fit md:px-28 px-5  flex-col gap-8 ">
      {/* about */}
      <div
        className={`bg-white/10 p-10 flex flex-col  md:px-10 text-slate-50 justify-center items-center rounded-md md:rounded md:h-[430px]`}
      >
        <div className="flex gap-12 md:flex-row flex-col justify-center items-center">
          <div
            ref={aboutRef}
            className={`md:h-80 md:w-80 h-60 w-60 rounded-full overflow-hidden shadow-sm hover:shadow-off  transition-all  border-4 border-slate-200  ${
              aboutInView
                ? "animate-fade-right animate-duration-1000 animate-delay-200"
                : ""
            }`}
          >
            <img src="images/photoabout.jpg" alt="" className="w-full" />
          </div>
          <div className="md:w-[60%] w-full px-10 flex flex-col gap-3 md:justify-center text-justify -translate-y-1">
            <div
              className={`flex gap-2 items-center justify-start  ${
                aboutInView
                  ? "animate-fade-left animate-duration-1000 animate-delay-300 flex-row-reverse md:flex-row"
                  : ""
              }`}
            >
              <div className="h-1 w-52 md:w-80 bg-green-500 text-lg font-semibold"></div>
              <div className="text-xl font-bold">ABOUT</div>
            </div>
            <p
              className={`${
                aboutInView
                  ? "animate-fade-up animate-duration-1000 animate-delay-500 "
                  : ""
              }`}
            >
              Perkenalkan Saya Ulil Amry Al Qadri, lahir di Kodeoha, 08 November
              2003, anak kedua dari tiga bersaudara dan memiliki minat yang
              mendalam dalam bidang teknologi informasi. Saat ini, saya sedang
              aktif memperdalam pengetahuan dan keterampilan dalam dunia IT,
              khususnya dalam bidang software engineering. Keinginan saya untuk
              terus belajar dan berkembang dalam bidang ini sangat besar, karena
              saya percaya bahwa teknologi informasi memiliki peran penting
              dalam kemajuan dunia. Dengan tekad dan dedikasi yang kuat, saya
              berusaha untuk menjadi ahli di bidang software engineering,
              sehingga dapat memberikan kontribusi yang berarti dalam industri
              teknologi informasi.
            </p>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className=" flex flex-col gap-7 mt-3">
        <div className="flex items-center text-slate-50 gap-1">
          <div className="text-lg">Skills</div>
          <div className="h-0.5 w-40 bg-slate-50"></div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleBtnSkills(TechStackArray)}
            className="px-5 py-1.5 rounded bg-white/10 text-slate-50 font-semibold text-sm hover:bg-green-500 hover:scale-110 hover:shadow-off hover:shadow-green-500 transition-all hover:text-slate-900"
          >
            Tech Stack
          </button>
          <button
            onClick={handleBtnSkills(ToolsDataArray)}
            className="px-5 py-1.5 rounded bg-white/10 text-slate-50 font-semibold text-sm hover:bg-green-500 hover:scale-110 hover:shadow-off hover:shadow-green-500 transition-all hover:text-slate-900"
          >
            Tools
          </button>
        </div>
        <div
          ref={skillsRef}
          className={`grid md:grid-cols-5 gap-8 grid-cols-2`}
        >
          {skillsInView &&
            skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                src={skill.src}
                level={skill.level}
                Classname={"animate-fade-up animate-duration-[800ms] "}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default AboutLayout;
