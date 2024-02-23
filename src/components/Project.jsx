import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/Expense-tracker-projec1.png";
import project2 from "../assets/images/fecbook-clone-projec3.png";
import project3 from "../assets/images/Linked-clone-projec2.png";
import project4 from "../assets/images/project4.png";

import project_person from "../assets/images/omar-Tood.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Expense Tracke Manager",
      github_link: "https://github.com/Engr-Pirlo/Expense-Tracker",
      live_link: "expense-tracker-black-pi.vercel.app",
    },
    {
      img: project2,
      name: "Fecbook-Clone",
      github_link: "https://github.com/Engr-Pirlo/Facebook-Clone",
      live_link: "https://facebook-clone-beryl-five.vercel.app/",
    },
    {
      img: project3,
      name: "Linked-Clone",
      github_link: "https://github.com/Engr-Pirlo/Linked-Clone",
      live_link: "https://linked-clone12.vercel.app/",
    },
    {
      img: project4,
      name:  "Netflix-Clone",
      github_link: "https://github.com/Engr-Pirlo/Netflix-Clone",
      live_link: "https://netflix-clone-two-puce.vercel.app/"
    },
   
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
