import { useState } from "react"
import useDash from "../hook/useDash";
import { toast } from "react-toastify";

function Form() {

    const { patientOnly, patient, setPatient, addPatient, updatePatient } = useDash();



    const handleSubmit = async e => {
        e.preventDefault();

        if (Object.values(patient).includes('')) {
            toast.error('All Fields are required')
            return;
        }

        // api call

        if (patient._id) {
            await updatePatient(patient._id);


        } else {
            await addPatient(patient);
        }

        setPatient({
            name: '',
            email: '',
            number: '',
            date: '',
            symptom: '',
            _id: null
        })

    }

    return (

        <div className="form">

            <h2 className='add'>{patient._id ? 'Edit' : 'Add'}</h2>

            <form className='addPatient' onSubmit={handleSubmit}>

                <div className='field'>

                    <label htmlFor="name">name</label>

                    <input type='text' id='name' name='name' placeholder='Her Name'
                        value={patient.name}
                        onChange={e => setPatient({ ...patient, [e.target.name]: e.target.value })}
                    />

                </div>

                {/* field */}

                <div className='field'>
                    <label htmlFor="email">email</label>
                    <input type='email' id='email' name='email' placeholder='Her email'

                        value={patient.email}
                        onChange={e => setPatient({ ...patient, [e.target.name]: e.target.value })}

                    />
                </div>

                {/* field */}

                <div className='field'>
                    <label htmlFor="number">number</label>
                    <input type='number' id='number' name='number' placeholder='Her number'
                        value={patient.number}
                        onChange={e => setPatient({ ...patient, [e.target.name]: e.target.value })} />
                </div>

                {/* field */}

                <div className='field'>
                    <label htmlFor="date">Date</label>
                    <input type='date' id='date' name='date'
                        value={patient.date}
                        onChange={e => setPatient({ ...patient, [e.target.name]: e.target.value })} />
                </div>

                {/* field */}

                <div className='field'>
                    <label htmlFor="symptom">symptom</label>
                    <textarea id='symptom' name='symptom' placeholder='Sympton'
                        value={patient.symptom}
                        onChange={e => setPatient({ ...patient, [e.target.name]: e.target.value })}
                    ></textarea>
                </div>

                {/* Button */}

                <input type="submit" className='boton naranja' value={patient._id ? 'Edit' : 'Add'}/>
            </form>

        </div>


    )
}

export default Form