import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full md:max-w-3/4 px-8 py-2 mb-6">
      <h1 className="text-5xl text-bold">
        Hey, You. <br />
        I'm Pranjali Pongde.
      </h1>

      <div className="mt-8">
        <p className="text-lg leading-6">
          👋 I am a passionate frontend developer with a strong foundation in{" "}
          <b> HTML, CSS, JavaScript, and React.</b>I love crafting visually
          appealing and high-performance web applications while ensuring a
          seamless user experience.
        </p>
        <p className="text-lg mt-4 leading-6">
          Beyond coding, I also enjoy creating <b>Canva designs</b> as a
          part-time passion, blending creativity with technology. Always eager
          to learn, I stay updated with the latest tools like Next.js, Git, and
          modern deployment platforms like Vercel and Netlify.
        </p>
      </div>
    </div>
  );
};

export default About;
