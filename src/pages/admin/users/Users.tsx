import { Avatar, Input, Select, Table, TableProps, Tag, Typography } from "antd";
import Search from '../../../assets/icons/search.svg?react'
import Add from '../../../assets/icons/add.svg?react'
import AppButton from "../../../components/ui/AppButton";
import { Link } from "react-router-dom";
import { IUser } from "../../../data/interfaces";
import { selectOptions, userData } from "../../../data/mock-data";
import { returnTagColorByStatus } from "../../../utils";

const { Title } = Typography;

export default function Users() {
  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>Users</Title>
        <AppButton type='primary' size='small' icon={<Add fill='red' />}>Add user</AppButton>

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
        <PatientsTable data={userData} />
      </div>
    </div>
  )
}

const columns: TableProps<IUser>['columns'] = [
  {
    title: 'ID',
    render: (data) => <Link className="text-slate-800 hover:text-secondary" to={`/users/${data.id}`}>{data.id}</Link>
  },
  {
    title: 'Name',
    render: (data: IUser) => (
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

function PatientsTable({ data }: { data: IUser[] }) {
  return <Table columns={columns} dataSource={data} />
}
