
import React from 'react';
import { Link } from 'react-router-dom';
import datas from "./Projects.json"
import Bounce from "react-reveal/Bounce";

const Projects = () => {
    return (
      <div className="my-14">
        <Bounce>
          <h1 className="text-6xl mb-8 font-extrabold font-serif text-center text-green-300">
            Projects
          </h1>
        </Bounce>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {datas.map((data) => (
            <div key={data.key} className="mx-auto">
              <div className="card border border-1 border-white card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src={data.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">{data.projectsName}</h2>
                  <p className="text-xl">{data.details}</p>
                  <div className="card-actions justify-end">
                    <Link to={`details/${data.id}`}>
                      <button className="btn btn-primary">Veiw Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Projects;