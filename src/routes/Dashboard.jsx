import React from 'react'
import PieChart from '../components/PieChart'
import BarChart from '../components/BarChart'
import Card from '../components/Card'

function Dashboard() {
  return (
    <div className='bg-white'>
        <div className=' flex flex-col md:flex-row items-stretch justify-stretch mb-4 shadow-sm border rounded md:rounded-full border-gray-200 py-2 mx-6'>
            <Card title={'Students'} value={"22,000"}></Card>
            <Card color='green' title={'Passed'} value={"20,000"}></Card>
            <Card color='red' title={'Failed'} value={"2,000"}></Card>
        </div>
      <div className=' flex flex-col md:flex-row justify-center  gap-10 w-[95vw] mx-auto'>
        <div className=' self-center md:self-stretch'>
            <PieChart male={1200} female={500}></PieChart>
        </div>
        <div className=' flex-1'>
            <BarChart passedList={[8000, 10000, 7000, 12000, 15000, 14000, 17000, 20000, 18000]} failedList={[22000 - 8000, 22000 - 10000, 22000 - 7000, 22000 - 12000, 22000 - 15000, 22000 - 14000, 22000 - 17000, 22000 - 20000, 22000 - 18000]}></BarChart>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
