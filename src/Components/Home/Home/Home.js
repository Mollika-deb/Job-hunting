import React from 'react';
import BdCompany from '../BdCompany/BdCompany';
import ExpertJob from '../ExpertJob/ExpertJob';
import ForeignCompany from '../ForeignCompany/ForeignCompany';
import FreasherJob from '../FreasherJob/FreasherJob';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FreasherJob></FreasherJob>
            <ExpertJob></ExpertJob>
            <BdCompany></BdCompany>
            <ForeignCompany></ForeignCompany>
        </div>
    );
};

export default Home;