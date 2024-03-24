import React from 'react';
import { Link } from "react-router-dom";
import { useEffect,useState } from 'react';
import BgShape from "../images/heros/hero-bg.png";
import HeroCar from "../images/heros/hero-caravan.png"
import { IconChevronRight,IconCircleCheck } from '@tabler/icons-react';
import "../styles/Hero.css";
function Hero() {

  const [goUp,setgoUp] = useState(false);

  useEffect(()=>{
    const onPageScroll=()=>{
      if(window.scrollY > 100 ){
        setgoUp(true);
      }else{
        setgoUp(false);
      }
    };
    window.addEventListener("scroll",onPageScroll);
    return ()=>{
      window.removeEventListener("scroll",onPageScroll);
    }
  },[]);


  const bookBtn = () =>{
    document
    .querySelector("#booking-section")
    .scrollIntoView({behavior:"smooth"});
  }

  const scrolltoTop = ()=>{
    window.scrollTo({top:0 , behavior:"smooth"})
  };
  
  return (
    <>
        <section id='home' className='hero-section'>
        <div className='container'>
        <img  className='bg-shape' src={BgShape} alt='bg-shape'/>
        <div className='hero_content'>
        <div className='hero_content_text'>
          <h4>Plan your trip now</h4>
          <h1> Save <span>big</span> with our caravan rental</h1>
          <p>Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.</p>
        <div className='hero_content_text_btns'>
          <Link to="/" className='hero_content_text_btns_book-ride' onClick={bookBtn}>
            Book Ride <IconCircleCheck/>
          </Link>
          <Link to="/"   className='hero_content_text_btns_learn-more'>
            Learn More  <IconChevronRight />
          </Link>
        </div>
        </div>
        </div>
        </div>

        <div>
          <img  className='hero-content-car-img' alt='<a href="https://www.freepik.com/free-vector/summer-travel-vacation-logo-concept_24097086.htm#query=caravan&position=43&from_view=keyword&track=sph&uuid=7b0bbd5f-0bc5-4eb8-9fa9-e6f60d7228b1">Image by brgfx</a> on Freepik' src={HeroCar}/>
        </div>
        <div onClick={scrolltoTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
        ^
        </div>
        </section>
    </>
  )
}

export default Hero