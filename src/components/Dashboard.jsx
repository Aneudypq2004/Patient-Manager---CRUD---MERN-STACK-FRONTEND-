import Form from "./Form"
import PatientList from "./PatientList"
import useDash from "../hook/useDash"
import { Helmet } from "react-helmet"
import Spinner from "./Spinner"

export default function Dashboard() {

  const { patients, load } = useDash();

  return (
    <>
      <div className="dashboard" >

        <Helmet>
          <title>Patient Manager - Dashboard</title>
          <meta name='description' content='App Dashboard - Admin' />
        </Helmet>

        <Form />

        <div className="listado">

          <h2 className="patients">{patients.length === 0 ? 'Add Patients' : 'Patients'}</h2>

          {load ? <Spinner /> : ''}


          {patients.length ? patients.map(patient =>
            <PatientList
              patient={patient}
              key={patient._id}

            />
          ) : ''}

        </div>



      </div>
    </>

  )
}
