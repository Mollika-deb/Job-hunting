import React from 'react';
 import bg2 from '../../../../images/bg4.jpg'
 import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className="hero min-h-screen  lg:pl-32 lg:pr-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bg2} className="lg:max-w-lg sm:max-w-xs lg:max-h-lg rounded-lg shadow-2xl" />
          <div className="lg:max-w-lg sm:max-w-xs">
            <h1 > <span className="text-4xl text-pink-400  font-bold">Hey Developers! </span > <span className="text-4xl  font-semibold text-cyan-600" >
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Welcome to JobHunting']}
            loop={55000}
            cursor
            cursorStyle='...'
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1000}
            
          />
        </span></h1>
            <p className="py-6 font-semibold">Find your desired job and explore a new life! Here you can find out your dream job. So, find the job and go one step closer to your dream. Happy searching!!</p>
            <button className="btn bg-cyan-600">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;

// /images/stock/photo-1507358522600-9f71e620c44e.jpg
// style={{ backgroundImage: `url("../../../../images/bg1.jpg")` }}
{/* <img src={bg2}></img> */}

// style={{ color:'cornflowerblue', fontWeight: 'semibold' }}