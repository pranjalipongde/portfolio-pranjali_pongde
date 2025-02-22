import React from "react";
import ProfileImg from "../assets/profile.jpg"; // Ensure the image is lowercase

const About = () => {
  return (
    <div className="min-h-screen w-full px-6 py-8 flex flex-col items-center justify-center text-center md:text-left md:max-w-3xl lg:max-w-4xl mx-auto">
      <div className="w-40 h-40 md:hidden mb-6 ">
        <img
          src={ProfileImg}
          alt="Pranjali Pongde"
          className="w-full h-full rounded-full shadow-lg object-cover border-4 border-white"
        />
      </div>

      <div className="md:w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
          Hello, there! <br /> I'm{" "}
          <span className="text-pink-700 name">Pranjali Pongde.</span>
        </h1>

        <div className="mt-6">
          <p className="text-lg leading-relaxed text-gray-700">
            👋 I am a <b>Frontend Developer</b> with{" "}
            <b className="text-pink-600">1.5+</b> years of experience in
            building responsive and high-performance web applications. Skilled
            in
            <b className="text-pink-600">HTML, CSS, JavaScript, and React,</b> I
            focus on crafting seamless user experiences with modern tools like{" "}
            <b className="text-pink-600">Next.js, Git, and Vercel.</b>
          </p>
          <p className="text-lg mt-4 leading-relaxed text-gray-700">
            Beyond coding, I have a creative edge in{" "}
            <b className="text-pink-600">Canva design</b> , blending aesthetics
            with technology. Always eager to{" "}
            <b className="text-pink-600">learn and innovate</b>, I strive to
            push the boundaries of{" "}
            <b className="text-pink-600">frontend development.</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
