import React, { useEffect, useState } from 'react';
import Expert from './Expert';

const ExpertJob = () => {
    const [experts, setExperts] = useState([])

    useEffect(()=>{
        fetch('fresher.json')
        .then(res => res.json())
        .then(data => setExperts(data))
    }, [])
    return (
       <div>
         <h1 className='text-4xl font-bold text-center text-cyan-500 py-10'>Find your first job!!</h1>
         <div className='grid lg:grid-cols-3 gap-6  my-10 lg:ml-32 lg:mr-32'>
            
            {
             experts.map(expert=><Expert 
                 key={expert.id}
                 expert={expert}
             ></Expert>)
            }
         </div>
       </div>
    );
};

export default ExpertJob;