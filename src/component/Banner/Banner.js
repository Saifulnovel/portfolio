import React from 'react';
import { Zoom } from 'react-reveal';
import Typewriter from "typewriter-effect";
import logo from '../../undraw_personal_info_re_ur1n.svg'
import Pulse from "react-reveal/Pulse";

const Banner = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-slate-600">
          <div className="hero-content flex-col lg:flex-row">
            <Zoom>
              <img src={logo} className=" rounded-lg shadow-2xl " />
            </Zoom>
            <div>
              <Pulse>
                <h1 className="text-5xl text-white font-bold">Saiful Islam Novel</h1>
              </Pulse>
              <div className="text-2xl font-serif font-bold">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .pauseFor(300)
                      .deleteChars(10)
                      .typeString("<strong >Front-End</strong>  ")
                      .typeString(
                        '<strong>Web<span style="color: #6ED4C8">Developer</span></strong>'
                      )
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </div>

              <p className="py-6"></p>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;