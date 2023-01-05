import icono2 from '../img/home.svg';
import icono30 from '../img/chart.svg';
import icono5 from '../img/email.svg';
import icono6 from '../img/logout.svg';
import icono8 from '../img/settings.svg';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import useDash from '../hook/useDash';

export default function Sidebar() {

  const [isOpen, setOpen] = useState(false);

  const { setWindowInfo,  handleChangeConfig } = useDash()

  return (
    <aside className={`sidebar ${isOpen ? 'extend' : ''}`}>

      <div className="" onClick={() => setOpen(!isOpen)}>
        <svg width="39" height="30" viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg" className='icons icon-menu'>
          <path d="M0.444443 0.03125V4.62684H41.2543V0.03125H0.444443ZM0.444443 13.6801V18.2757H41.2543V13.6801H0.444443ZM0.444443 27.4669V32.0625H41.2543V27.4669H0.444443Z" fill={`${isOpen ? '#000' : '#fff'}`} />
        </svg>

      </div>


      <div className="contenedor-icon">

        {/* icon */}
        <Link to="/dashboard">

          <div className="sidebar-icon">
            <img className='icon' src={icono2} alt="icon-home" />
            <p className='icon-name'>Home</p>
          </div>

        </Link>

        {/* icon */}
        <Link to="/chart">

          <div className="sidebar-icon">
            <img className='icon' src={icono30} alt="icon-chart" />
            <p className='icon-name'>Charts</p>
          </div>

        </Link>
        {/* icon */}


        <Link>
          <div className="sidebar-icon" onClick={() => setWindowInfo(true)} >
            <img className='icon' src={icono5} alt="icon-email" />
            <p className='icon-name'>Email</p>
          </div>
          {/* icon */}

        </Link>



        {/* icon */}
        <Link to='/'>

          <div className="sidebar-icon" >
            <img className='icon' src={icono6} alt="icon-logaut" />
            <p className='icon-name'>Logout</p>
          </div>

        </Link>

        {/* icon
        <Link>

          <div className="sidebar-icon">
            <img className='icon' src={icono7} alt="icon-dark" onClick={() => setDark(!dark)} />
            <p className='icon-name'>{dark ? 'Dark' : 'Ligth'}</p>
          </div>
        </Link> */}

        <Link>

          {/* icon */}
          <div className="sidebar-icon" onClick={()=> handleChangeConfig()}>
            <img className='icon' src={icono8} alt="icon-dark" />
            <p className='icon-name'>setting</p>
          </div>
          {/* icon */}
        </Link>


      </div>



    </aside >
  )
}

