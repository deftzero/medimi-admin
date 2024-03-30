import { Avatar, Input, Select, Table, TableProps, Tag, Typography } from "antd";
import Search from '../../../assets/icons/search.svg?react'
import { Link } from "react-router-dom";
import { IUser } from "../Users";

const { Title } = Typography;

export interface IPatient {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  phoneNumber: string;
  email: string;
  type: string;
  address?: string
  dob?: Date
  telephone?: string
  bloodType?: string
  background?: string[]
  field?: string[]
  height?: number
  weight?: number
  relatives?: IUser[]
  createdAt?: Date;
  status?: string
}


const selectOptions: any = [
  {
    id: 'ACTIVE',
    name: 'ACTIVE'
  },
  {
    id: 'INACTIVE',
    name: 'INACTIVE'
  }
]


export const patientData: IPatient[] = [
  {
    id: 'P1',
    firstName: 'John',
    lastName: 'Allen',
    avatar: 'https://i.pravatar.cc/300',
    phoneNumber: '778412563',
    email: 'johnallen@gmail.com',
    address: '676 Cresview Terrace',
    telephone: '+2239239923',
    dob: new Date(),
    bloodType: 'A+',
    background: ['Covid-19'],
    field: ['Type 1 Diabetes'],
    height: 179,
    weight: 80,
    relatives: [
      {
        id: 'P10',
        firstName: 'Deft',
        lastName: 'Cache',
        email: 'johnallen@gmail.com',
        dob: new Date(),
        phoneNumber: '+330203012399',
        avatar: 'https://i.pravatar.cc/300',
        type: 'Relative'
      },
      {
        id: 'P11',
        firstName: 'Deft',
        lastName: 'Cache',
        email: 'johnallen@gmail.com',
        dob: new Date(),
        phoneNumber: '+330203012399',
        avatar: 'https://i.pravatar.cc/300',
        type: 'Relative'
      }
    ],
    type: 'Main',
    createdAt: new Date(),
    status: 'ACTIVE'
  },
  {
    id: 'P2',
    firstName: 'Emily',
    lastName: 'Davis',
    avatar: 'https://i.pravatar.cc/300',
    phoneNumber: '778412563',
    email: 'emily.davis@example.com',
    type: 'Relative',
    createdAt: new Date(),
    status: 'INACTIVE'
  },
]

export default function Patients() {



  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>Patients</Title>
      </div>

      <div className="bg-white p-5 rounded-md space-y-5">
        <div className="header flex flex-row justify-between items-center">
          <Input prefix={<Search />} placeholder='Search...' style={{ maxWidth: '300px' }} />
          <Select className="w-32" placeholder="Status">
            {selectOptions.map((item: any) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </div>
        <PatientsTable data={patientData} />
      </div>
    </div>
  )
}

const columns: TableProps<IPatient>['columns'] = [
  {
    title: 'ID',
    render: (data) => <Link className="text-slate-800 hover:text-secondary" to={`/patients/${data.id}`}>{data.id}</Link>
  },
  {
    title: 'Name',
    render: (data: IPatient) => (
      <>
        <Avatar src={data.avatar} className="me-2">{data.firstName.charAt(0) + data.lastName.charAt(0)}</Avatar>
        {data.firstName + ' ' + data.lastName}
      </>
    )
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => <Tag color={returnTagColorByStatus(text)}>{text}</Tag>
  },
]

function PatientsTable({ data }: { data: IPatient[] }) {
  return <Table columns={columns} dataSource={data} />
}

function returnTagColorByStatus(status: string) {
  const colorMap: any = {
    ACTIVE: 'green',
    INACTIVE: 'red'
  }
  return colorMap[status]
}