import React from 'react'
import useDash from '../hook/useDash'
import { useEffect } from 'react'
import FormDate from '../helpers/FormDate'
export default function VentanaModal() {

  const { active, handleChangeModal, patientOnly, deletePatient } = useDash()

  useEffect(() => {

    if (active) {
      document.body.classList.add('active');

      setTimeout(() => {
        document.querySelector('.modal-patient').classList.add('modal-animar')
      }, 500);

    }

  }, [active])

  const { name, email, number, symptom, date } = patientOnly


  const handleEliminar = async () => {

    deletePatient(patientOnly._id)

  }

  return (
    <div className='modal'>

      <div className='modal-patient'>

        <h4 className='name'>{name}</h4>

        <p className='email'>Email: <span className='gris'>{email}</span></p>


        <p className='number'>Number: <span className='gris'>{number}</span></p>

        <p className='date'>date: <span className='gris'>{FormDate(date)}</span></p>

        <p className='symptom'>Sympton: <span className='gris'>{symptom}</span></p>


        <div className='botons'>
          {/* <input type="button" className='boton edit w-full' value='Complete' /> */}
          <input type="button" value={'delete'} className="boton delete w-full" onClick={handleEliminar}/>
          <input type="button" value={'Cancel'} onClick={() => handleChangeModal(false)} className="boton cancel w-full" />
        </div>

      </div>

    </div>
  )
}
