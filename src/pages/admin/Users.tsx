import { Avatar, Input, Select, Table, TableProps, Tag, Typography } from "antd";
import Search from '../../assets/icons/search.svg?react'
import Add from '../../assets/icons/add.svg?react'
import AppButton from "../../components/ui/AppButton";

const { Title } = Typography;

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  phoneNumber: string;
  email: string;
  type: string;
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


export default function Users() {

  const data: IUser[] = [
    {
      id: 'P1',
      firstName: 'John',
      lastName: 'Allen',
      avatar: 'https://i.pravatar.cc/300',
      phoneNumber: '778412563',
      email: 'johnallen@gmail.com',
      type: 'Global',
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
      type: 'Local',
      createdAt: new Date(),
      status: 'INACTIVE'
    },
  ]

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
        <PatientsTable data={data} />
      </div>
    </div>
  )
}

const columns: TableProps<IUser>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
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

function returnTagColorByStatus(status: string) {
  const colorMap: any = {
    ACTIVE: 'green',
    INACTIVE: 'red'
  }
  return colorMap[status]
}