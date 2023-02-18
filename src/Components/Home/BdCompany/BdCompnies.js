import React from 'react';
import { Link } from 'react-router-dom';

const BdCompnies = ({bdCompny}) => {
    const {img_url, company, location, Description} = bdCompny
    return (
        <div className="card  bg-fuchsia-900 rounded-3xl shadow-xl hover:shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={img_url} alt="Shoes" className="rounded-xl h-48 w-72" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-3xl font-bold text-white">{company}</h2>
          <p className="text-2xl font-semibold text-pink-600">{location}</p>
          <p className="text-1xl font-semibold text-white">{Description.slice(1,100)}....</p>
          <div className="card-actions">
            <button className="btn btn-primary rounded-xl"><Link to='/bddetails/:id'>View Details</Link></button>
          </div>
        </div>
      </div>
    );
};

export default BdCompnies;

