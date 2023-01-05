import avatar from '../img/avatar.png'

export default function Header() {
  return (
    <div className='header'>
      <p className="title">Crm.com</p>
      <p className="logo">patient manager</p>
      <div className='avatar'>
        
        <p className='nombre'>Hi, Luis</p>

        <div className='avatar-imagen'>
          <img src={avatar} alt="user image" />
        </div>


      </div>


    </div>
  )
}
