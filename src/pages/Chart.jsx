import React from 'react'
import { Helmet } from 'react-helmet'

//Charts
import LinearChart from '../components/charts/LinearChart'
import PieChart from '../components/charts/PieChart'
import BarChart from '../components/charts/BarChart'


export default function Chart() {
  return (
    <div className='chart'>
        <Helmet>
          <title>Patient Manager - Charts</title>
          <meta name='description' content='Show the chart about de app' />
        </Helmet>
      <LinearChart />
      <PieChart />
      <BarChart />
    </div>
  )
}
