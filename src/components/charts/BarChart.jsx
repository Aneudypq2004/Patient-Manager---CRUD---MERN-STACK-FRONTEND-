import useDash from '../../hook/useDash';
import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';

import React from 'react'

export default function BarChart() {

    const { patients } = useDash();
    const [date, setDate] = useState([]);

    useEffect(() => {

        const dates = patients.map(patient => new Date(patient.date).getMonth());
        setDate(dates)
    }, [patients])


    const Month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December']

    const data = {
        labels: Month,

        datasets: [{
            label: "Bar Chart",
            data: date,
            backgroundColor: [
                "#EE6C4D",
                "#007FFF",
                "#6a5acd"
            ]
        }]
    }
    return (
        <div className="bar"><Bar data={data} /></div>
    )
}
