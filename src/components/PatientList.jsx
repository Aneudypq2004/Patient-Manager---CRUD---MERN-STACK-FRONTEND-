import useDash from "../hook/useDash"
import FormDate from "../helpers/FormDate"

export default function PatientList({ patient }) {

    const { name, email, date, _id } = patient

    const { handleChangeModal, active, getPatient,   updatePatientData} = useDash()

    return (
        <>
            <div className='patient'>
                <p>{name}</p>
                <p>{FormDate(date)}</p>
                <p>{email}</p>
                <input type='button' value='Edit' className='boton edit' onClick={() => {
                      updatePatientData(_id) 
                }} />
                <input type='button' value='See' className='boton delete' onClick={() => {
                     handleChangeModal(),
                     getPatient(_id)
                }} />
            </div>


        </>
    )
}
