import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Pass/Fail Demo For Every Subject',
    },
  },
};

const labels = ['English', 'Maths', 'Physics', 'Chemistry', 'Biology', 'Geography', 'Civics', 'Tigrigna', 'Amharic'];


export default function BarChart({passedList, failedList}) {
    const data = {
        labels,
        datasets: [
          {
            label: 'Passed',
            data: passedList,
            backgroundColor: 'rgba(50, 255, 200, 0.8)',
          },
          {
            label: 'Failed',
            data: failedList,
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
          },
        ],
      };
    return <div className=' border  shadow-md rounded-lg overflow-auto'>
        <div style={{
            height: "400px",
            width: 'fit-content'
        }} className=' flex justify-center mx-auto'>
            <Bar options={options} data={data} />
        </div>
    </div>;
}
