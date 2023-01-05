import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


import Dashboard from './components/Dashboard';
import useDash from './hook/useDash';


//Modal
import VentanaModal from './components/VentanaModal';
import ModalInfo from './components/ModaInfo';
import VentanaConfig from './components/VentanaConfig';


//pages
import ProtectedRoutes from './Layout/ProtectedRoutes';
import Charts from './pages/Chart';
import Patient from './pages/Patient';

function App() {
  const {active, windowInfo,configActive, } = useDash()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />

        <Route path='/' element={<ProtectedRoutes />}>

          <Route path='dashboard' element={<Dashboard />} />
          <Route path='chart' element={<Charts />} />
          <Route path='patient/:id' element={<Patient />} />

        </Route>


      </Routes>

     
      {active ?   <VentanaModal /> : "" }
      {windowInfo ?  <ModalInfo /> : "" }
      {configActive ? <VentanaConfig /> : ''}

      

    </BrowserRouter >
  )
}

export default App
