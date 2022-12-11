import React from 'react';
import { useParams } from 'react-router-dom';
import datas from "../Projects/Projects.json"


const ProjectsDetails = () => {
    const { id } = useParams();
    const details = datas.find((data) => data.id === id);
    console.log(details);
    return (
      <div>
        <div className="my-16">
          <h1 className="text-5xl text-orange-500 font-serif font-bold text-center ">
            {details.projectsName}
          </h1>
          <p>{details.details}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mx-20 lg:grid-cols-3 gap-6">
          <img src={details.detailImage1} alt="" />
          <img src={details.detailImage2} alt="" />
          <img src={details.detailImage3} alt="" />
        </div>
        <div className="text-start ml-10">
          <h1 className="text-3xl font-bold  my-7 ">Projects Details</h1>

          <ul className="list-disc">
            <li>{details.d1}</li>
            <li>{details.d2}</li>
            <li>{details.d3}</li>
          </ul>

          {/* <div> { details.d1}</div>
                <div> { details.d2}</div>
                <div> { details.d3}</div> */}
        </div>
      </div>
    );
};

export default ProjectsDetails;