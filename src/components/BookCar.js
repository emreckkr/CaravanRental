import React from 'react';
import carAudi from "../images/logo.png";
import carRenault from "../images/logo.png";
import { IconCalendar, IconCar, IconMapPinDollar, IconMapPinFilled, IconX , IconInfoCircleFilled} from "@tabler/icons-react";
import {useState,useEffect} from "react";
import "../styles/BookCar.css"

function BookCar() {
    
    //class - active modal
    const [modal,setModal] = useState(false);

    //booking car
    const [carType,setcarType]=useState("");
    const [pickUp, setPickUp] = useState("");
    const [dropOff,setdropOff] = useState("");
    const [pickTime,setpickTime] = useState("");
    const [dropTime,setdropTime] = useState("");
    const [carImg,setcarImg] = useState("");

    // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");


  //taking value of modal inputs
    const handleName = (e) =>{
        setName(e.target.value);
    };

    const handleLastName= (e) =>{
        setLastName(e.target.value);
    };

    const handlePhone = (e)=>{
        setPhone(e.target.value);
    };

    const handleAge = (e) =>{
        setAge(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleCity = (e) => {
        setCity(e.target.value);
    };

    const handleZip = (e) => {
        setZipCode(e.target.value);
    };

    // open modal when all inputs are fulfilled
    const openModal =(e)=>{
        e.preventDefault();   
        const errorMsg = document.querySelector(".error-message");
        if(pickUp ==="" ||  dropOff === "" || carType === ""){
            errorMsg.style.display = "flex";
        }
        else{
            setModal(!modal);
            const modalDiv = document.querySelector(".booking-modal");
            modalDiv.scroll(0,0);
            errorMsg.style.display = "none";
        }
    };
    // disable page scroll when modal is displayed

    useEffect(() =>{
        if(modal === true){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow =  "auto";
        }
    },[modal]);

    //confirm modal booking

    const confirmBooking = (e) =>{
        e.preventDefault();
        setModal(!modal);
        const doneMsg = document.querySelector(".booking-done");
        doneMsg.style.display = "flex";

    };

    

    // taking value of booking inputs

    const handleCar= (e) =>{
        setcarType(e.target.value);
        setcarImg(e.target.value);
    };

    const handlePick = (e) => {
        setPickUp(e.target.value);
    };

    const handleDrop = (e) => {
        setdropOff(e.target.value);
    };

    const handlePickTime=(e) =>{
        setpickTime(e.target.value);
    };
    const handleDropTime = (e) => {
        setdropTime(e.target.value);
    };

    // based on value name show car img
    let imgUrl;
        switch(carImg){
            case  "Audi":
                imgUrl= carAudi;
                break;
            case "Renault":
                imgUrl = carRenault;
                break;
            default:
                imgUrl = "";

        };
    

        //hide message
        const hideMessage = () => {
            const doneMsg = document.querySelector(".booking-done");
            doneMsg.style.display = "none";
        }


  return (
    <>     
        { /* overlay */ }
        <section id='booking-section' className='book-section'>
        <div className={`modal-overlay ${modal ? "active-modal" : ""}`} onClick={openModal} >
        </div>
        <div className='container'>
        <div className='book-content'>
        <div className='book-content_box'>
            <h2> Book a car</h2>

            <p className='error-message'>
                All fields required! <IconX className='icon' width={20} heigh={20}/>
            </p>
            <p className='booking-done'>
                Check your email to confirm an order.{" "} 
                <IconX className='icon' width={20} height={20} onClick={hideMessage} />
            </p>
            
            <form className='box-form'> 
            <div className='box-form__car-type'>
            <label>
                <IconCar  className='input-icon'/>&nbsp; Select Your Car
            Type <b>*</b>
            </label>

            <select value={carType} onChange={handleCar} >
                <option>Select your caravan type</option>
                <option value="Caravan">Caravan</option>
                <option value="Off-Road">Off-Road</option>
                <option value="Motorhome">Motorhome</option>
                <option value="Camper vans">Camper Vans</option>
            </select>
            </div>

            <div className='box-form__car-type'>
                <label>
                    <IconMapPinFilled className='input-icon'/> &nbsp; Pick-Up <b>*</b>
                </label>
                <select  value={pickUp} onChange={handlePick}>
                    <option>Select your location</option>
                    <option value="İstanbul">İstanbul</option>
                    <option value="Ankara">Ankara</option>
                    <option value="İzmir">İzmir</option>
                    <option value="Antalya">Antalya</option>
                    <option value="Muğla">Muğla</option>
                </select>
            </div>

            <div className='box-form__car-type'>
                <label>
                    <IconMapPinFilled className='input-icon'/>&nbsp; Drop-Of <b>*</b>
                </label>
                <select value={dropOff} onChange={handleDrop}>
                    <option>Select your location to drop</option>
                    <option value="İstanbul">İstanbul</option>
                    <option value="Ankara">Ankara</option>
                    <option value="İzmir">İzmir</option>
                    <option value="Antalya">Antalya</option>
                    <option value="Muğla">Muğla</option>
                </select>
            </div>

            <div className='box-form__car-time'>
                <label htmlFor='picktime'>
                    <IconCalendar className='input-icon'/> &nbsp; Choose Pick Time{" "} <b>*</b> 
                </label>
                <input id='picktime' value={pickTime} onClick={handlePickTime} type='date' />
            </div>

            <div className='box-form__car-time'>
            <label htmlFor='droptime'>
                <IconCalendar className='input-icon'/>&nbsp; Choose Dropping Time {" "} <b>*</b>
            </label>
                <input id='droptime' value={dropTime} onClick={handleDropTime} type='date' />
            </div>

            <button onClick={openModal} type='submit'>
                Search
            </button>
            </form>
        </div>
        </div>
        </div>
        </section>

        {/* modal */}
        <div className={`booking-modal ${modal ? "active-modal" : "" }`} >
                {/* title */}
            <div className='booking-modal_title'>
            <h2> Complete Reservation!</h2>
            <IconX className='iconX' onClick={openModal}/>
            </div>
        {/* message */}
        <div className="booking-modal_message">
          <h4>
            <IconInfoCircleFilled /> Upon completing this reservation enquiry,
            you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>

        {/* car info */}
        <div className='booking-modal_car-info'>
        <div className='dates-div'>
            <div className='booking-modal_car-info-dates'>
            <h5>Location & Date</h5>
            <span >
                <IconMapPinFilled />
                <div>
                    <h6>Pick-Up Date & Time</h6>
                    <p>
                    {pickTime} / {" "} <input type='time' className='input-time'></input>
                    </p>
                </div>
            </span>

            </div>
            <div className="booking-modal_car-info-dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>
            <div className="booking-modal_car-info-dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal_car-info-dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
        </div>
        <div className='booking-modal_car-info-model'>
            <h5>
                <span>Car -</span>{carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt='car_img' />}
        </div>
        </div>
        {/* personal info */}
        <div className='booking-modal_person-info'>
            <h4>Personal Information</h4>
            <form className='info-form'>
                <div className='info-form__2col'>
                    <span>
                        <label>First Name <b>*</b></label><input type='text' value={name} onChange={handleName} placeholder='Enter your first name'>

                        </input>
                        <p className='error-modal'>This field is required </p>
                    </span>
                   <span>
                    <label>Last Name <b>*</b></label>
                    <input type='text' value={lastName} placeholder='Enter your last name' onChange={handleLastName}></input>
                    <p className='error-modal'>This field is required</p>
                   </span>

                    <span>
                        <label>Phone Number <b>*</b></label>
                        <input type='tel' value={phone} onChange={handlePhone} placeholder='Enter your phone number'></input>
                        <p className='error-modal'>This field is required</p>
                    </span>

                    <span>
                        <label>Age <b>*</b></label>
                        <input type='number' value={age} onChange={handleAge} placeholder='18'></input>
                        <p className='error-modal'>This field is required</p>
                    </span>
                    </div>
                    <div className='info-form__1col'>
                    <span>
                        <label>Email <b>*</b></label>
                        <input type='email' placeholder='blabla@gmail.com' value={email} onChange={handleEmail}></input>
                        <p className='error-modal'>This field is required</p>
                    </span>

                    <span>
                        <label>Adress <b>*</b></label>
                        <input type='text' placeholder='Enter your street adress' value={address} onChange={handleAddress}></input>
                        <p className='error-modal'>This field is required</p>
                    </span>
                    </div>

                    <div className='info-form__2col'>
                    <span>
                        <label>City <b>*</b></label>
                        <input type='text' value={city} onChange={handleCity} placeholder='Enter your city'></input>
                        <p className='error-modal'>This field is required</p>
                    </span>

                    <span>
                        <label>Zip Code <b>*</b></label>
                        <input type='number' value={zipcode} onChange={handleZip} placeholder='Enter your zipcode'></input>                 
                        <p className='error-modal'>This field is required</p>
                    </span>
                    </div>
                    <span className="info-form__checkbox">
                        <input type="checkbox"></input>
                        <p>Please send me latest news and updates</p>
                    </span>

                    <div className="reserve-button">
                        <button onClick={confirmBooking}>Reserve Now</button>
                    </div>
                    </form>
        </div>
        </div>
    </>
  )
}

export default BookCar