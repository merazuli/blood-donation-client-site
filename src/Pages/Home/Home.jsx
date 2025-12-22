import React from 'react';
import Banner from '../../components/Banner/Banner';
import FeaturedSection from '../../components/Feature/FeaturedSection';
import ContactUs from '../../components/Contact/ContactUs';
import Footer from '../../components/footer/Footer';
import FeaturedStats from '../../components/FeaturedStats ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <ContactUs></ContactUs>
            <Footer></Footer>
            <FeaturedStats></FeaturedStats>
        </div>
    );
};

export default Home;