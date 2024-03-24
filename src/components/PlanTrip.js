import React from 'react';
import SelectCar from "../images/plans/icon1.png";
import Contact from "../images/plans/icon2.png";
import Drive from "../images/plans/icon3.png";
import "../styles/PlanTrip.css";
function PlanTrip() {
  return (
    <>
        <section className='plan-section'>
            <div className='container'>
              <div className='plan-container'>
              <div className='plan-container_title'>
                <h3>Plan Your Trip Now</h3>
                <h2>Quick & easy caravan rental</h2>
              </div>

                <div className='plan-container__boxes'>
                    <div className='plan-container__boxes_box'>
                      <img src={SelectCar} alt='icon-img'/>
                      <h4>Select Caravan</h4>
                      <p>We offers a big range of vehicles for all your driving needs. We have the perfect caravan to meet your needs</p>
                    </div>

                    <div  className='plan-container__boxes_box'>
                      <img src={Contact} alt='icon-img'/>
                      <h4>Contact Operator </h4>
                      <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                    </div>

                    <div className='plan-container__boxes_box'>
                      <img src={Drive} alt='icon-img'/>
                      <h4>Let's Drive</h4>
                      <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                    </div>
                </div>
            
              </div>
            </div>
        </section>
    </>
  )
}

export default PlanTrip