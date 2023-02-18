import React, { useEffect, useState } from 'react';
import ForeignCompanies from './ForeignCompanies';

const ForeignCompany = () => {

    const [foreignCompanies, setForeignCompanies] = useState([])

    useEffect(()=>{
        fetch('BdCompany.json')
        .then(res => res.json())
        .then(data => setForeignCompanies(data))
    }, [])
    return (
        <div>
        <h1 className='text-4xl font-bold text-center text-cyan-500 py-10'>Top Three companies in worldwide!!</h1>
       <div className='grid lg:grid-cols-3 gap-6  my-10 lg:ml-32 lg:mr-32'>
       {
           foreignCompanies.map(foreignCompany=><ForeignCompanies
                key={foreignCompany.id}
                foreignCompany={foreignCompany}></ForeignCompanies>)
       }
   </div>
   </div>
    );
};

export default ForeignCompany;