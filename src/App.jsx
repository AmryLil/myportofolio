import { useRef } from "react";
import Navbar from "./componenta/Navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Portofolio from "./pages/portofolio";

function App() {
  const aboutRef = useRef();
  const homeRef = useRef();
  const portofolioRef = useRef();
  return (
    <>
      <div className="h-screen overflow-y-auto no-scrollbar scroll-snap-y ">
        <Navbar
          onClickAbout={() => {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          onClickHome={() => {
            homeRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          onClickPortofolio={() => {
            portofolioRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <div ref={homeRef} className="h-fit snap-center">
          <Home />
        </div>

        <div ref={aboutRef} className="h-fit snap-end pt-20 pb-20">
          <About />
        </div>
        <div
          ref={portofolioRef}
          className="md:h-[170%] h-[440%] snap-end pt-10"
        >
          <Portofolio />
        </div>
        <div className="h-[150%] md:h-full snap-center pt-12 pb-20 ">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
