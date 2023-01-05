import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import useDash from '../../hook/useDash';
import { useEffect, useState } from 'react';


export default function LinearChart() {

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

        const dates = patients.map(patient => new Date(patient.date).getDay());

       setDate(dates)
    }, [patients])

    //Data ==== flow
    const data = {
        labels: days,

        datasets: [
            {
                label: "Customer flow",
                data: date,
                backgroundColor: ["red", "green"]


            }


        ]



    }
    return (
        <div className='line'>
            <Line data={data} />


        </div>
    )
}
