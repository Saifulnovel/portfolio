import React from "react";
import items from "./Skills.json";
import img from "../../grapy-coder-workplace.png"

const Skills = () => {
  return (
    <div className="my-10">
      <h2 className="font-extrabold font-serif text-green-400 text-left text-6xl mb-10  text-center">Skills</h2>
      <section className="container mx-auto">
        <div className="grid grid-cols-3 ml-8 justify-center mx-auto">
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <ul className="flex flex-wrap justify-center max-w-[450px] mx-auto">
              {items.map((skill) => (
                <li key={skill.id} className="m-2 btn btn--plain">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
