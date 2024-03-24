import React from 'react';
import { useState } from 'react';
import "../styles/PickStyles.css";
function CarBox({data,carID}) {
  const [carLoad,setcarLoad]=useState(true);
  return (
    <>
      { data[carID].map((car,id)=>(
          <div key={id} className='box-cars'>
            {/* car */}
            <div className='pick-car'>
              {carLoad && <span className='loader'></span>}
              <img 
                style={{display: carLoad ? "none" : "block"}}
                src={car.img}
                alt='car_img'
                onLoad={()=>setcarLoad(false)} //An Event handler function. Fires when the resource has loaded.
              />
             </div>
             {/* description */}
            <div className='pick-description'>
              <div className='pick-description__price'>
                <span>${car.price} /rent per day</span>
              </div>
              <div className='pick-description__table'>
                <div className='pick-description__table__col'>
                  <span>Model</span>
                  <span>{car.model}</span>
                </div>

                <div className='pick-description__table__col'>
                  <span>Mark</span>
                  <span>{car.mark}</span>
                </div>

                <div className='pick-description__table__col'>
                  <span>Year</span>
                  <span>{car.year}</span>
                </div>

                <div className='pick-description__table__col'>
                  <span>Doors</span>
                  <span>{car.doors}</span>
                </div>

                <div className='pick-description__table__col'>
                  <span>AC</span>
                  <span>{car.air}</span>
                </div>

                <div className='pick-description__table__col'>
                  <span>Transmission</span>
                  <span>{car.transmission}</span>
                </div>

                <div className='pick-description__table__col'>
                  <span>Fuel</span>
                  <span>{car.fuel}</span>
                </div>

              </div>
              <a className='cta-btn' href='#booking-section'>Reserve Now</a>
            </div>
          </div>
          )
      ) }
    </>
  )
}

export default CarBox;