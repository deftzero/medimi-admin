import Chart from '../../../assets/chart.svg?react'

export default function ChartCard({ title, value, percent } : { title: string, value: number, percent: string }) {
  return(
    <div className='flex flex-row justify-between items-center'>
      <div>
        <p className='text-slate-500 my-0 py-0 text-md'>{title}</p>
        <p className='my-1 font-medium text-2xl'>{value}</p>
        <span className="text-green-500 font-semibold text-md">{percent}%</span>
      </div>
      <Chart />
    </div>
  )
}
