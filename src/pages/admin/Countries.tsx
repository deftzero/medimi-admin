import { Input, Table, TableProps, Typography } from "antd";
import Add from '../../assets/icons/add.svg?react'
import Search from '../../assets/icons/search.svg?react'
import AppButton from "../../components/ui/AppButton";

const { Title } = Typography;

interface ICountries {
  id: string;
  name: string;
  from: string;
  characterization: string;
  iso: string;
  timezone: string;
  createdAt?: Date;
  status?: string
}

export default function Countries() {

  const data: ICountries[] = [
    {
      id: 'C1',
      name: 'Senegal',
      from: 'Democratic Republic',
      characterization: 'Masculine',
      iso: 'SN',
      timezone: 'Dakar (UTC)'
    },
    {
      id: 'C2',
      name: 'Japan',
      from: 'Democratic Republic',
      characterization: 'Masculine',
      iso: 'JP',
      timezone: 'Japan (UTC+09:00)'
    }
  ]

  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>Countries</Title>
        <AppButton type='primary' size='small' icon={<Add fill='red' />}>Add a Country</AppButton>
      </div>

      <div className="bg-white p-5 rounded-md space-y-5">
        <div className="header flex flex-row justify-between items-center">
          <Input prefix={<Search />} placeholder='Search...' style={{ maxWidth: '300px' }} />
        </div>
        <CountriesTable data={data} />
      </div>
    </div>
  )
}

const columns: TableProps<ICountries>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
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

function CountriesTable({ data }: { data: ICountries[] }) {
  return <Table columns={columns} dataSource={data} />
}