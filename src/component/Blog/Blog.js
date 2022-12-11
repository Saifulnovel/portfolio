import React from 'react';
import logo from '../../undraw_barbecue_3x93.svg'
import HeadShake from "react-reveal/HeadShake";
const Blog = () => {
    return (
      <div>
        <HeadShake>
          {" "}
          <h1 className="font-bold text-4xl text-white">
            Blog is Cooking , Its Coming soon
          </h1>
        </HeadShake>
        <div className='mt-10'>
          <img className='mx-auto' src={logo} alt="" />
        </div>
      </div>
    );
};

export default Blog;