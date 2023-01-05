import React from 'react'
import useDash from '../hook/useDash'
import { useEffect } from 'react'
import icono5 from '../img/email.svg';

export default function ModalInfo() {

  const { patientOnly, setWindowInfo, windowInfo } = useDash()


  useEffect(() => {

    if (windowInfo) {
      document.body.classList.add('active');
      
      setTimeout(() => {
        document.querySelector('.modal-info').classList.add('modal-animar')
      }, 500);

    }

  }, [windowInfo])




  return (
    <div className='modal'>
      <div className='modal-info'>

        <div className="emailContent">

          <svg width="60" height="60" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.6296 5.54559H5.92593C4.2963 5.54559 2.97778 6.74677 2.97778 8.21486L2.96296 24.2305C2.96296 25.6986 4.2963 26.8998 5.92593 26.8998H29.6296C31.2593 26.8998 32.5926 25.6986 32.5926 24.2305V8.21486C32.5926 6.74677 31.2593 5.54559 29.6296 5.54559ZM29.037 11.2178L18.563 17.1169C18.0889 17.3838 17.4667 17.3838 16.9926 17.1169L6.51852 11.2178C6.14815 11.0043 5.92593 10.6439 5.92593 10.2569C5.92593 9.36265 7.00741 8.8288 7.85185 9.29592L17.7778 14.888L27.7037 9.29592C28.5481 8.8288 29.6296 9.36265 29.6296 10.2569C29.6296 10.6439 29.4074 11.0043 29.037 11.2178Z" fill="black" />
          </svg>

          <p className='emails'>There are no emails available</p>

          <input type='button' value='Close' className='boton close' onClick={() => setWindowInfo(false)} />


        </div>



      </div>

    </div>
  )
}
