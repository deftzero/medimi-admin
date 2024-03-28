import { Typography } from "antd";

const { Title } = Typography;

export default function Patients() {
  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>Patients</Title>
      </div>

      <div className="bg-white p-5 rounded-md">
        Table
      </div>
    </div>
  )
}