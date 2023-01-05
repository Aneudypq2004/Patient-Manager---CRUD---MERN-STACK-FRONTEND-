import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom';


function ProtectedRoutes() {
  return (
    <div className='layout'>
      
      <Sidebar />

      <Header />

      <main className='contenedor'>
        <Outlet />

      </main>

    </div>

  )
}

export default ProtectedRoutes;