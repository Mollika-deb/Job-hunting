import React, { useEffect, useState } from 'react';
import BdCompnies from './BdCompnies';

const BdCompany = () => {
    const [bdCompanies, setBdCompanies] = useState([])

    useEffect(()=>{
        fetch('BdCompany.json')
        .then(res => res.json())
        .then(data => setBdCompanies(data))
    }, [])
    return (
        <div>
             <h1 className='text-4xl font-bold text-center text-cyan-500 py-10'>Top Three companies in Bangladesh!!</h1>
            <div className='grid lg:grid-cols-3 gap-6  my-10 lg:ml-32 lg:mr-32'>
            {
                bdCompanies.map(bdCompny=><BdCompnies
                     key={bdCompny.id}
                     bdCompny={bdCompny}></BdCompnies>)
            }
        </div>
        </div>
    );
};

export default BdCompany;