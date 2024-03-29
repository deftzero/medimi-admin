import { Chart as ChartJS, registerables, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, ...registerables);

export const data = {
  labels: [],
  datasets: [
    {
      data: [20, 6],
      backgroundColor: [
        '#254F72',
        '#6AC4AE',
      ],
      borderColor: [
        '#254F72',
        '#6AC4AE',
      ],
      borderWidth: 1,
      options: {
        layout: {
          padding: 20
        }
      }
    },
  ],
};

const sliceThickness = {
  id: 'sliceThickness',
  beforeDraw(chart: any, plugins: any) {
    chart.getDatasetMeta(0).data[1].outerRadius = 65
  }
}

export function IncomeChart() {
  return <Doughnut data={data} plugins={[sliceThickness]} />;
}
