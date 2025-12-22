import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import FeaturedSection from '../../components/Feature/FeaturedSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
        </div>
    );
};

export default Home;