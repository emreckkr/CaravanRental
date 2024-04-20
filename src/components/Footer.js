import { IconMail, IconPhoneCall } from '@tabler/icons-react'
import React from 'react';
import "../styles/Footer.css";

function Footer() {
  return (
    <>
        <footer>
            <div className='contianer'>
                <div className='footer-content'>

                    <ul className='footer-content-1'>
                        <li><span>Caravan</span> Rental</li>
                        <li>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</li>
                        <li><a href='tel:12345678912'><IconPhoneCall /> &nbsp; tel: (123) 456-789-12</a> </li>
                        <li > <a href="mailto:caravanrental@gmail.com"><IconMail/> &nbsp; caravanrental@gmail.com</a></li>
                    </ul>

                    <ul className='footer-content-2'>
                        <li>COMPANY</li>
                        <li><a href='#home'>İstanbul</a></li>
                         <li><a href="#home ">Careers</a> </li>
                         <li><a href='#home'> Mobile</a></li>
                         <li><a href='#home'> Blog</a></li>
                         <li><a href='#home'> How We Work</a></li>
                    </ul>

                    <ul className='footer-content-2'>
                        <li>WORKING HOURS</li>
                        <li>Mon - Fri: 9:00AM - 9:00PM</li>
                        <li>Sat: 9:00AM - 19:00PM</li>
                        <li>Sun: Closed</li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer