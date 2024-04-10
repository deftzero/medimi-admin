import ChevronLeft from '../../../assets/icons/chevron-left.svg?react'
import EditPencil from '../../../assets/icons/edit-pencil.svg?react'
import { Link, useParams } from 'react-router-dom';
import { Avatar, Table, TableProps, Typography } from 'antd';
import AppButton from '../../../components/ui/AppButton';
import { ICountry, IUser } from '../../../data/interfaces';
import { countryData, userData } from '../../../data/mock-data';
const { Title } = Typography;


export default function User() {

  let { id } = useParams();
  const data: IUser | any = userData.find((item: IUser) => item.id === id)

  return (
    <div className='space-y-5'>
      <div className='flex flex-row items-center gap-5'>
        <Link to={'/users'} className=''>
          <ChevronLeft />
        </Link>
        <Title level={3} className='mt-2'>User Details</Title>
      </div>

      <div className="bg-white p-5 rounded-md">
        <BasicDetails data={data} />
      </div>

      <div className="bg-white p-5 rounded-md">
        <CountriesScope data={countryData} />
      </div>

    </div>
  )
}

function BasicDetails({ data }: { data: IUser }) {
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
            <p className='my-1 font-medium'>{data.id}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Phone Number</p>
            <p className='my-1 font-medium'>{data.phoneNumber}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Email</p>
            <p className='my-1 font-medium'>{data.email}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Type</p>
            <p className='my-1 font-medium'>{data.type}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Status</p>
            <p className='my-1 font-medium capitalize'>{data.status?.toLowerCase()}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <AppButton size='small' icon={<EditPencil fill='#667085' />}>Modify</AppButton>
      </div>
    </div>
  )
}

const columns: TableProps<ICountry>['columns'] = [
  {
    title: 'Name',
    render: (data) => <Link className="text-slate-800 hover:text-secondary" to={`/countries/${data.id}`}>{data.name}</Link>
  },
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from',
  },
  {
    title: 'Characterization',
    dataIndex: 'characterization',
    key: 'characterization',
  },
  {
    title: 'Code ISO',
    dataIndex: 'iso',
    key: 'iso',
  },
  {
    title: 'Time Zone',
    dataIndex: 'timezone',
    key: 'timezone',
  }
]

function CountriesTable({ data }: { data: ICountry[] }) {
  return <Table columns={columns} dataSource={data} />
}


function CountriesScope({ data }: any) {
  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={4} className='mt-2'>Counties Scope</Title>
        <AppButton size='small' icon={<EditPencil fill='#667085' />}>Modify</AppButton>
      </div>
      <CountriesTable data={data} />
    </div>
  )
}

