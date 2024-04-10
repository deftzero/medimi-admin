import { Avatar, Input, Select, Table, TableProps, Tag, Typography } from "antd";
import Search from '../../../assets/icons/search.svg?react'
import { Link } from "react-router-dom";
import { IPatient } from "../../../data/interfaces";
import { patientData, selectOptions } from "../../../data/mock-data";

const { Title } = Typography;

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