import { useState } from "react";
import React  from 'react';
import { CAR_DATA } from "./carData";
import CarBox from "./CarBox";
import "../styles/PickStyles.css";
function PickCar() {
  const [active,setActive] = useState("SecondCar");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) =>{
      return (colorBtn === id ? "colored-button" : "" );
  };
  return (
    
    <section className='pick-section'>
    <div className='container'>
    <div className='pick-container'>
        <div className="pick-container__title">
        <h3>Caravan Models</h3>
        <h2>Our Rental Fleet</h2>
        <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip.</p>
        </div>
    
    <div className='pick-container__car-content'>
        {/* pick car */}
        <div className="pick-box">
            <button className={`${coloringButton("btn1")}`} onClick={()=>{btnID("btn1");
setActive("SecondCar"); } }>Touring Caravans</button>
            <button className={`${coloringButton("btn2")}`} id="btn2" onClick={()=>{btnID("btn2"); setActive("FirstCar"); }}>Folding Caravans</button>
            <button className={`${coloringButton("btn3")}`} id="btn3" onClick={()=>{btnID("btn3"); setActive("ThirdCar")}}>Pop Up Caravans</button>
            <button className={`${coloringButton("btn4")}`} id="btn4" onClick={()=>{btnID("btn4"); setActive("FourthCar")}}>Tiny Caravans</button>
            <button className={`${coloringButton("btn5")}`} id="btn5" onClick={()=>{btnID("btn5"); setActive("FifthCar")}}> Retro Caravans</button>
            
        </div>

        {active === "FirstCar" && <CarBox data={CAR_DATA} carID={0} />}
        {active === "SecondCar" && <CarBox data={CAR_DATA} carID={1} />}
        {active ==="ThirdCar" && <CarBox data={CAR_DATA} carID={2}/>}
        {active === "FourthCar" && <CarBox data={CAR_DATA} carID={3}/>}
        {active === "FifthCar" && <CarBox data ={CAR_DATA} carID={4}/>}
        
        </div>
    </div>
    </div>
    </section>
  )
}

export default PickCar