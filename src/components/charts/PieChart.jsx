import React from 'react'
import { Pie } from 'react-chartjs-2'
import useDash from '../../hook/useDash';
import { useEffect, useState } from 'react';

export default function PieChart() {
  const labels = ["January", "February", "March", "April", "May", "June"]

  const { patients } = useDash();
  const [date, setDate] = useState([]);

  const days = [
    ' Monday',
    ' Tuesday',
    ' Wednesday',
    ' Thursday',
    ' Friday',
    '  Saturday',
    ' Sunday',
  ]

  useEffect(() => {

    const dates = patients.map(patient => new Date(patient.date).getFullYear());

    setDate(dates)
  }, [patients])


  const data = {

    labels: date,

    datasets: [{
      label: "Pie Chart",
      data: date,
      backgroundColor: [
        "#EE6C4D",
        "#007FFF",
        "#6a5acd",
        "#317AC7",
        "#111111"
      ]

    }
    ]

  }
  return (
    <div className='pie'>

      <Pie data={data} />


    </div>
  )
}
