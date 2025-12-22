import React from 'react';
import Banner from '../../components/Banner/Banner';
import FeaturedSection from '../../components/Feature/FeaturedSection';
import ContactUs from '../../components/Contact/ContactUs';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
        <div>
            <title>Blood-donation - Home</title>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;