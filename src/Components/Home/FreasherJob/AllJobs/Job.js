import React from 'react';

const Job = ({job}) => {
    const {img_url, job_title, compny, location} = job
    return (
        <div className="card  bg-purple-800 rounded-3xl shadow-xl hover:shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={img_url} alt="Shoes" className="rounded-xl h-48 w-72" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-3xl font-bold text-cyan-500">{job_title}</h2>
          <p className="text-2xl font-semibold text-pink-600">{compny}</p>
          <p className="text-1xl font-semibold text-cyan-600">{location}</p>
          <div className="card-actions">
            <button className="btn btn-primary rounded-xl">Apply Now</button>
          </div>
        </div>
      </div>
    );
};

export default Job;