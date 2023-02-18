import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fresher from './Fresher';

const FreasherJob = () => {
    const [freshers, setFreshers] = useState([])


    useEffect(()=>{
        fetch('fresher.json')
        .then(res => res.json())
        .then(data => setFreshers(data))

    }, [])
    return (
      <div>
         <h1 className='text-4xl font-bold text-center text-cyan-500 pb-10'>Find your first job!!</h1>
         <div className="grid lg:grid-cols-2 gap-5 lg:mr-32 lg:ml-32">
       
       {
         freshers.map(fresher=><Fresher 
            kye={fresher.id}
            fresher = {fresher}
         ></Fresher>)
       }
      <div className='card-actions justify-center'>
      <button  className='btn bg-pink-500 justify-center rounded-xl'><Link to='/job'>See All Job</Link></button>
      </div>
      </div>
      </div>
    );
};

export default FreasherJob;