import React from 'react';
import './Fresher.css';

const Fresher = ({fresher}) => {
    const {img_url, job_title, compny, location} = fresher
    return (
        <div className="card card-side bg-violet-900 rounded-3xl shadow-xl hover:shadow-2xl hover:bg-black ">
        <figure><img id='image' className='' src={img_url} alt="Movie"/></figure>
        <div className=" lg:pl-10 w-1/2">
          <h2 className=" text-2xl font-bold text-white pt-20">{job_title}</h2>
          <p className=" text-1xl font-bold text-pink-500 py-3">Company: {compny}</p>
          <p className=" text-1xl font-semibold text-pink-500 py-5">Location: {location}</p>
          <div className="card-actions ">
            <button className="btn bg-cyan-600 rounded-xl py-5">Apply Now</button>
          </div>
        </div>
      </div>
      
    );
};

export default Fresher;