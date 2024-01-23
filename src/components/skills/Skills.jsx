import React from "react";
import "./skills.css";
import Skills1 from "./Frontend";
import Skills2 from "./Databases";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Tech Stack</span>

      <div className="skills__container container grid">
        <Skills1 />
        <Skills2 />
      </div>
    </section>
  );
};

export default Skills;
