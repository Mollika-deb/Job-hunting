import React, { useEffect, useState } from 'react';
import Job from './Job';

const AllJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch('fresher.json')
        .then(res => res.json())
        .then(data => setJobs(data))

    },[])
    return (
        <div className='grid lg:grid-cols-3 gap-6  my-10 lg:ml-32 lg:mr-32'>
            {
                jobs.map(job =><Job 
                key={job.id}
                job={job}
                ></Job>)
            }
        </div>
    );
};

export default AllJobs;