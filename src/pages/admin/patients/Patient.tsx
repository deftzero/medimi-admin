import { Link, useParams } from "react-router-dom";
import ChevronLeft from '../../../assets/icons/chevron-left.svg?react'
import QrCode from '../../../assets/qrcode.svg?react'
import { Avatar, Typography } from "antd";
import { IPatient, patientData } from "./Patients";
import { dateFormatter } from "../../../utils";
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
        <Title level={3} className='mt-2'>Patient Details</Title>
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

function BasicDetails({ data }: { data: IPatient }) {
  return (
    <div className='flex flex-wrap items-center justify-between'>
      <div className="flex flex-wrap gap-12">
        <div className="avatar-name flex flex-row items-center gap-3">
          <Avatar src={data.avatar} size={48}></Avatar>
          <Title level={5} className="my-2">{data.firstName + ' ' + data.lastName}</Title>
        </div>
        <div className="center flex flex-wrap gap-10">
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>ID</p>
            <p className='my-1 font-semibold'>{data.id}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Phone Number</p>
            <p className='my-1 font-semibold'>{data.phoneNumber}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Email</p>
            <p className='my-1 font-semibold'>{data.email}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Type</p>
            <p className='my-1 font-semibold'>{data.type}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <QrCode />
      </div>
    </div>
  )
}

function Vitals({ data }: { data: IPatient }) {
  return (
    <div>
      <Title level={4} className="my-2">Vital Informations</Title>
      <div className="flex flex-wrap items-center gap-12 mt-5">
        <div>
          <QrCode />
        </div>
        <div className="center flex flex-wrap gap-10">
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>ID</p>
            <p className='my-1 font-semibold'>{data.id}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>First Name</p>
            <p className='my-1 font-semibold'>{data.firstName}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Last Name</p>
            <p className='my-1 font-semibold'>{data.lastName}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Date of Birth</p>
            <p className='my-1 font-semibold'>{dateFormatter(data.dob)}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Address</p>
            <p className='my-1 font-semibold'>{data.address}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Tel</p>
            <p className='my-1 font-semibold'>{data.telephone}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-gray-100 mt-5 p-5">
        <div>
          <Title level={4} className="mt-0">Blood type, History and grounds</Title>
          <div className="center flex flex-wrap gap-10 mt-5">
            <div>
              <p className='text-slate-500 my-0 py-0 text-xs'>Blood Type</p>
              <p className='my-1 font-semibold'>{data.bloodType}</p>
            </div>
            <div>
              <p className='text-slate-500 my-0 py-0 text-xs'>Background</p>
              <p className='my-1 font-semibold'>{data.background}</p>
            </div>
            <div>
              <p className='text-slate-500 my-0 py-0 text-xs'>Field</p>
              <p className='my-1 font-semibold'>{data.field}</p>
            </div>
          </div>
        </div>
        <div>
          <Title level={4} className="mt-0">Measurements</Title>
          <div className="center flex flex-wrap gap-10 mt-5">
            <div>
              <p className='text-slate-500 my-0 py-0 text-xs'>Height</p>
              <p className='my-1 font-semibold'>{data.height}</p>
            </div>
            <div>
              <p className='text-slate-500 my-0 py-0 text-xs'>Weight</p>
              <p className='my-1 font-semibold'>{data.weight}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Relatives({ data }: { data: IPatient }) {
  return (
    <div>
      <Title level={4} className="mt-0">Relatives</Title>
      <div className="grid grid-cols-2 gap-5">
        {data.relatives?.map(item => (
          <div className="bg-gray-100 flex flex-wrap gap-10 mt-5 p-5">
            <div>
              <p className='text-slate-500 my-0 py-0 text-xs'>First Name</p>
              <p className='my-1 font-semibold'>{item.firstName}</p>
            </div>
            <div>
              <p className='text-slate-500 my-0 py-0 text-xs'>Last Name</p>
              <p className='my-1 font-semibold'>{item.lastName}</p>
            </div>

            <div>
              <p className='text-slate-500 my-0 py-0 text-xs'>Date of Birth</p>
              <p className='my-1 font-semibold'>{dateFormatter(item.dob)}</p>
            </div>
            <div>
              <p className='text-slate-500 my-0 py-0 text-xs'>Phone Number</p>
                <p className='my-1 font-semibold'>{item.phoneNumber}</p>
              </div>
            </div>

        ))}
          </div>
    </div>
      )
}