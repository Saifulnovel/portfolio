
import React from 'react';
import datas from "./Projects.json"

const Projects = () => {
    return (
        <div className='my-14'>
            <h1 className='text-6xl mb-8 font-extrabold font-serif text-center text-green-300'>Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datas.map((data) => (
            <div key={data.key} className="mx-auto">
              <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                  <img src={data.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">{data.projectsName}</h2>
                  <p className='text-xl'>{data.details}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Veiw Details</button>
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