import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BdDetails = () => {
    const bddetals = useLoaderData()
    return (
        <div>
            {
                <h1>{bddetals.location}</h1>
            }
        </div>
    );
};

export default BdDetails;