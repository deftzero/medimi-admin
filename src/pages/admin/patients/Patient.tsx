import { Link, useParams } from "react-router-dom";
import ChevronLeft from '../../../assets/icons/chevron-left.svg?react'
import { Typography } from "antd";
import { IPatient, patientData } from "./Patients";
const { Title } = Typography;


export default function Patient() {

  let { id } = useParams();
  const data: IPatient | any = patientData.find((item: IPatient) => item.id === id)


  return (
    <div className='space-y-5'>
      <div className='flex flex-row items-center gap-5'>
        <Link to={'/patients'} className=''>
          <ChevronLeft />
        </Link>
        <Title level={3} className='mt-2'>Country Details</Title>
      </div>

      <div className="bg-white p-5 rounded-md">
        <BasicDetails data={data} />
      </div>

      <div className="bg-white p-5 rounded-md">
        <Vitals data={data} />
      </div>

      <div className="bg-white p-5 rounded-md">
        <Relatives data={data} />
      </div>
    </div>
  )
}

function BasicDetails({ data }: { data: IPatient}) {
  return (
    <h1>Basic</h1>
  )
}

function Vitals({ data }: { data: IPatient}) {
  return (
    <h1>Vitals</h1>
  )
}

function Relatives({ data }: { data: IPatient}) {
  return (
    <h1>Relatives</h1>
  )
}