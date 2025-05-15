import React from 'react';
import Marque from '../../components/Marque';
import Hero from './components/Hero';
import Categories from './components/Categories';
import DesignShowcase from './components/DesignShowcase';
import ClientSection from './components/ClientSection';
import Testimonials from './components/Testinomials';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Marque />
            <Categories/>
            <DesignShowcase/>
            <ClientSection/>
            <Testimonials/>
        </>
    );
};

export default Home;