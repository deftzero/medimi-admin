import { Input, Table, TableProps, Typography } from "antd";
import Add from '../../../assets/icons/add.svg?react'
import Search from '../../../assets/icons/search.svg?react'
import AppButton from "../../../components/ui/AppButton";
import { Link } from "react-router-dom";
import { ICountry } from "../../../data/interfaces";
import { countryData } from "../../../data/mock-data";

const { Title } = Typography;

export default function Countries() {

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
        <CountriesTable data={countryData} />
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