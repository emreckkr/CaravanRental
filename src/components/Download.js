import React from 'react';
import appledownload from "../images/download/indir (1).png";
import googledownload from "../images/download/indir.png";
import "../styles/Download.css";
function Download() {
  return (
    <section className='download-Section'>
        <div className='downloadcontainer'>

        <div className='download-text'>
        <h2>Download Our App To Get Most Out Of It</h2>
        <p>Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.</p>
              
        </div>
        <div className='download-image'>
                <img src={appledownload} alt='appledownload' /> 
                <img src={googledownload} alt='googledownload' />
        </div>

        </div>
    </section>
  )
}

export default Download