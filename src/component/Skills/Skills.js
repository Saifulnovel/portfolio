import React from "react";
import items from "./Skills.json";
import img from "../../Designer _Flatline.svg"
import './Skills.css'
import Bounce from "react-reveal/Bounce";
import Swing from "react-reveal/Swing";

const Skills = () => {
  return (
    <div className="my-10 skill ">
      <Bounce>
        <h2 className="font-extrabold font-serif text-green-400 text-left text-6xl mb-10  text-center">
          Skills
        </h2>
      </Bounce>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 ml-8 justify-center items-center mx-auto">
          <div>
            <Swing>
              {" "}
              <img className="w-full" src={img} alt="" />
            </Swing>
          </div>
          <div>
            <ul className="flex flex-wrap justify-center max-w-[450px] mx-auto">
              {items.map((skill) => (
                <li key={skill.id} className="m-2 btn btn-outline">
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
