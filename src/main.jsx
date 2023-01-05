import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import VentanaModal from './components/VentanaModal';
import { DashProvider } from './context/DashProvider';


ReactDOM.createRoot(document.getElementById('root')).render(

  < React.StrictMode >
    <DashProvider>

      <App />
      <ToastContainer />
      
    </DashProvider>
  </React.StrictMode >,
)
