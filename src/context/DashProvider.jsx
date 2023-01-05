import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import ClientAxios from "../config/ClientAxios";

const DashContext = createContext();

const DashProvider = ({ children }) => {

    //state
    
    const [patients, setPatients] = useState([]);
    const [patientOnly, setPatientOnly] = useState({});
    const [load, setLoad] = useState(false)

    //State Modal

    const [active, setActive] = useState(false);
    const [windowInfo, setWindowInfo] = useState(false)
    const [configActive, setConfigActive] = useState(false)

    // draw form data
    const [patient, setPatient] = useState({
        name: '',
        email: '',
        number: '',
        date: '',
        symptom: '',
        _id: null

    });


    const handleChangeModal = () => {
        setActive(!active)
    }

    //add patient and sync up the patients state

    const addPatient = async patient => {

        try {
            const { data } = await ClientAxios.post('/api/patient', patient);
            setPatients([...patients, data]);
            toast.success("successfully added");

        } catch (error) {
            toast.error(error.response.data.msg);
        }
    }


    //edit patient

    const updatePatient = async (id) => {

        try {
            const { data } = await ClientAxios.put(`/api/patient/${id}`, patient);
            const updatedPatient = patients.map(patient => patient._id === id ? data : patient);
            setPatients(updatedPatient)
            toast.success("successfully update");

        } catch (error) {
            toast.error(error.response.data.msg);
        }
    }


    //delete patient and sync up the patients state

    const deletePatient = async id => {

        try {
            const { data } = await ClientAxios.delete(`/api/patient/${id}`);

            //sync state
            const UpdatePacient = patients.filter(patient => patient._id !== data._id);
            setPatients(UpdatePacient);

            //Clear state
            setActive(false)
            setPatient({
                name: '',
                email: '',
                number: '',
                date: '',
                symptom: '',
                _id: null
            })
            toast.error('Successfully deleted');

        } catch (error) {

        }
    }

    //get patient, what we want to see

    const getPatient = async id => {
        setLoad(true);
        try {
            const { data } = await ClientAxios(`/api/patient/${id}`)
            setPatientOnly(data)
            setLoad(false);

        } catch (error) {

        }
    }

    const updatePatientData = async id => {
        setLoad(true);

        try {
            const { data } = await ClientAxios(`/api/patient/${id}`);
            //modified object to prevent the warning about the date
            const dataUpdate = { ...data, date: data.date.split('T')[0] }
            setPatient(dataUpdate);
            setLoad(false);
        } catch (error) {

        }
    }
    //get all patients

    useEffect(() => {

        setLoad(true);

        const getPatients = async () => {
            const { data } = await ClientAxios('/api/patient')
            setPatients(data)
            setLoad(false);
        }
        getPatients()


    }, [])

    //Chart data


    const handleChangeConfig = () => {
        setConfigActive(true)
    }


    return (
        <DashContext.Provider
            value={{
                addPatient,
                patients,
                active,
                handleChangeModal,
                getPatient,
                patientOnly,
                deletePatient,
                updatePatient,
                patient,
                setPatient,
                updatePatientData,
                windowInfo,
                setWindowInfo,
                configActive,
                handleChangeConfig,
                setConfigActive,
                load

            }}>
            {children}
        </DashContext.Provider>
    )
}


export default DashContext;


export { DashProvider }