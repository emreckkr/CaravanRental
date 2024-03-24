import React from 'react';
import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from '../components/PlanTrip';
import PickCar from '../components/PickCar';
import Banner from "../components/Banner";
import ChooseUs from  "../components/ChooseUs";
import Testimonials from '../components/Testimonials';
import Faq from "../components/Faq";
function Home() {
  return (
    <>
        <Hero />
        <BookCar />
        <PlanTrip />
        <PickCar />
        <Banner />
        <ChooseUs />
        <Testimonials />
        <Faq />
        {/* <Download />
        <Footer /> */}
    </>
  )
}

export default Home