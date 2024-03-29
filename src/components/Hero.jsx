import React from "react";
import myHero from "../assets/images/software.png";
const Hero = () => {
  const social_media = [
    // "logo-instagram",
    // "logo-facebook",
    // "logo-linkedin",
    // "logo-twitter",

    <a href="https://www.instagram.com/engomarjibril/" target="_blank"  key={1}
    className="text-gray-600 hover:text-white cursor-pointer ">
    <ion-icon name={"logo-instagram"}></ion-icon>
  </a>,
  
    <a href="https://www.facebook.com/Omar.Toodka/" target="_blank" key={2}
    className="text-gray-600 hover:text-white cursor-pointer ">
    <ion-icon name={"logo-facebook"}></ion-icon>
  </a>,

    <a href="https://www.linkedin.com/in/omar-jibril-abdulkhadir-6147a5270/"target="_blank"  key={3}
    className="text-gray-600 hover:text-white cursor-pointer ">
    <ion-icon name={"logo-linkedin"}></ion-icon>
  </a>,

    <a href="https://twitter.com/OMARJIBRII" target="_blank"  key={4}
    className="text-gray-600 hover:text-white cursor-pointer ">
    <ion-icon name={"logo-twitter"}></ion-icon>
  </a>,

    <a href="https://www.youtube.com/@Omar-Tood/videos" target="_blank"  key={4}
    className="text-gray-600 hover:text-white cursor-pointer ">
    <ion-icon name={"logo-youtube"}></ion-icon>
  </a>

  
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={myHero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Omar Jibril</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8"><a href="#contact">Contact Me !</a></button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((media) => {
              return media;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
