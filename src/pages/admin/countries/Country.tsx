import { Avatar, Segmented, Table, TableProps, Typography } from 'antd';
import ChevronLeft from '../../../assets/icons/chevron-left.svg?react'
import Add from '../../../assets/icons/add.svg?react'
import { Link, useParams } from 'react-router-dom';
import AppButton from '../../../components/ui/AppButton';
import { dateFormatter } from '../../../utils';
import { useState } from 'react';
import { ICity, ICountry, IRegion } from '../../../data/interfaces';
import { countryData } from '../../../data/mock-data';
const { Title } = Typography;



export default function Country() {

  let { id } = useParams();
  const data: ICountry | any = countryData.find((item: ICountry) => item.id === id)

  return (
    <div className='space-y-5'>
      <div className='flex flex-row items-center gap-5'>
        <Link to={'/countries'} className=''>
          <ChevronLeft />
        </Link>
        <Title level={3} className='mt-2'>Country Details</Title>
      </div>

      <div className="bg-white p-5 rounded-md">
        <Details data={data} />
      </div>

      <div className="bg-white p-5 rounded-md">
        <CitiesAndRegions data={data} />
      </div>
    </div>
  )
}

function Details({ data }: { data: ICountry }) {
  return (
    <div className='flex flex-wrap items-center gap-10'>
      <Avatar src={'https://flagcdn.com/w2560/sn.png'} size={64}></Avatar>
      <div>
        <p className='text-slate-500 my-0 py-0 text-xs'>Name</p>
        <p className='my-1 font-medium'>{data.name}</p>
      </div>
      <div>
        <p className='text-slate-500 my-0 py-0 text-xs'>From</p>
        <p className='my-1 font-medium'>{data.from}</p>
      </div>
      <div>
        <p className='text-slate-500 my-0 py-0 text-xs'>Health Authority Name</p>
        <p className='my-1 font-medium'>{data.healthAuthName}</p>
      </div>
      <div>
        <p className='text-slate-500 my-0 py-0 text-xs'>Characterization</p>
        <p className='my-1 font-medium'>{data.characterization}</p>
      </div>
      <div>
        <p className='text-slate-500 my-0 py-0 text-xs'>Code ISO</p>
        <p className='my-1 font-medium'>{data.iso}</p>
      </div>
      <div>
        <p className='text-slate-500 my-0 py-0 text-xs'>Time Zone</p>
        <p className='my-1 font-medium'>{data.timezone}</p>
      </div>
    </div>
  )
}

const RegionColumns: TableProps<IRegion>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Creation Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text: Date) => <span>{dateFormatter(text)}</span>,
  },
]

const citiesColumns: TableProps<ICity>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'District',
    dataIndex: 'district',
    key: 'district'
  },
  {
    title: 'Creation Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text: Date) => <span>{dateFormatter(text)}</span>,
  },
]

function CitiesAndRegions({ data }: { data: ICountry }) {

  const [selectedTab, setSelectedTab] = useState('regions')

  return (
    <div className='space-y-5'>

      <div className='flex flex-row justify-between'>
        <Segmented
          size='middle'
          value={selectedTab}
          options={[
            { label: 'Regions', value: 'regions' },
            { label: 'Cities', value: 'cities' },
          ]}
          onChange={(value: string) => setSelectedTab(value)}
        />
        <AppButton type='primary' size='small' icon={<Add />}>Add</AppButton>
      </div>
      
      
      <Table className={`${selectedTab === 'regions' ? 'block' : 'hidden'}`} columns={RegionColumns} dataSource={data.regions} />
      <Table className={`${selectedTab === 'cities' ? 'block' : 'hidden'}`} columns={citiesColumns} dataSource={data.cities} />
    </div>
  )
}

