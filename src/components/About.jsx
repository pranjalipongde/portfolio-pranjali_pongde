import React from "react";
import ProfileImg from "../assets/profile.jpg"; // Ensure the image is lowercase

const About = () => {
  return (
    <div className="h-screen w-full px-6 py-8 flex flex-col items-center justify-center text-center md:text-left md:max-w-3xl lg:max-w-4xl mx-auto">
      {/* Image (Only visible on mobile) */}
      <div className="w-40 h-40 md:hidden mb-6">
        <img
          src={ProfileImg}
          alt="Pranjali Pongde"
          className="w-full h-full rounded-full shadow-lg object-cover border-4 border-white"
        />
      </div>

      <div className="md:w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
          Hey, You. <br /> I'm{" "}
          <span className="text-pink-700 name">Pranjali Pongde.</span>
        </h1>

        <div className="mt-6">
          <p className="text-lg leading-relaxed text-gray-700">
            👋 I am a passionate <b>Frontend Developer</b> with expertise in{" "}
            <b className="text-pink-600">HTML, CSS, JavaScript, and React.</b>I
            love crafting visually appealing and high-performance web
            applications while ensuring a seamless user experience.
          </p>
          <p className="text-lg mt-4 leading-relaxed text-gray-700">
            Beyond coding, I also enjoy creating{" "}
            <b className="text-pink-600">Canva designs</b>
            as a part-time passion, blending creativity with technology. Always
            eager to learn, I stay updated with tools like{" "}
            <b className="text-pink-600">Next.js, Git, and Vercel.</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
