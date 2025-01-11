import React from "react";
import Navbar from "./Navbar";
import Showcase from "./home/Showcase";
import About from "./home/About";
import Project from "./home/Project";
import Experience from "./home/Experience";
import Education from "./home/Education";
import CarouselInfo from "./Carousel";

const Home = () => {
  return (
    <div>
      <div className="relative z-10 bg-[rgba(0,0,0,0.9)]">
        <Navbar />
      </div>

      <Showcase />

      <div className="lg:px-36 px-6">
        <About />
        <Project />
        <Experience />
      </div>

      <CarouselInfo direction="right" carouselData={["photoshop", "figma"]} />
      <CarouselInfo carouselData={["figma", "photoshop"]} />

      <div className="lg:px-36 px-6 lg:my-16 my-6">
        <Education />

        <div className="lg:text-[30px] text-[20px] lg:w-[900px] w-full lg:mx-auto lg:leading-[52px]">
          Over the past four years, I've been fortunate to design and refine
          digital products across tech, e-commerce, and finance industries. My
          approach is rooted in simplicity and a holistic perspective—breaking
          down complex problems into intuitive, user-centered solutions,{" "}
          <span className="opacity-50">
            while never losing sight of the finer details that truly elevate a
            design. When I'm not crafting seamless digital experiences, you'll
            find me exploring my love for interior design and cars, or diving
            into the world of movies and shows for a fresh dose of inspiration.
          </span>
        </div>
      </div>

      <CarouselInfo carouselData={["lkd", "wa", "tw"]} />
    </div>
  );
};

export default Home;
