import { Link, useParams } from 'react-router-dom';
import ChevronLeft from '../../../assets/icons/chevron-left.svg?react'
import Filter from '../../../assets/icons/filter.svg?react'
import Add from '../../../assets/icons/add.svg?react'
import { Segmented, Typography } from 'antd';
import AppButton from '../../../components/ui/AppButton';
import { useState } from 'react';
import Details from '../../../components/pages/medical-accounts/Details';
import AddressTable from '../../../components/pages/medical-accounts/AddressTable';
import Documents from '../../../components/pages/medical-accounts/Documents';
import Gallery from '../../../components/pages/medical-accounts/Gallery';
import Subscriptions from '../../../components/pages/medical-accounts/Subscriptions';
import Staff from '../../../components/pages/medical-accounts/Staff';
import Services from '../../../components/pages/medical-accounts/Services';
import { IMedicalAccount, IService, IStaff, ISubscription } from '../../../data/interfaces';
import { medicalAccountData } from '../../../data/mock-data';

const { Title } = Typography;

export default function MedicalAccount() {

  let { id } = useParams();
  const data: IMedicalAccount | any = medicalAccountData.find((item: IMedicalAccount) => item.id === id)

  return (
    <div className='space-y-5'>
      <div className='flex flex-row items-center gap-5'>
        <Link to={'/medical-accounts'} className=''>
          <ChevronLeft />
        </Link>
        <Title level={3} className='mt-2'>Medical Account Details {id}</Title>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-white col-span-3 p-5 rounded-md">
          <Details data={data} />
        </div>
        <div className="bg-white col-span-2 p-5 rounded-md">
          <AddressTable data={data.address} />
        </div>
        <div className="bg-white col-span-1 p-5 rounded-md">
        <Title level={5} className='my-2'>Description</Title>
         <p>{data.description}</p>
        </div>
        <div className="bg-white col-span-1 p-5 rounded-md">
          <Documents data={data.documents} />
        </div>
        <div className="bg-white col-span-2 p-5 rounded-md">
          <Gallery data={data.gallery} />
        </div>
      </div>

      <div className='flex flex-row gap-2 justify-end w-full'>
        <AppButton size='small' success="true">Certify</AppButton>
        <AppButton size='small'>Validate</AppButton>
        <AppButton size='small' type='primary'>Modify</AppButton>
      </div>

      <div className="bg-white p-5 rounded-md">
        <SubStaffService subscriptions={data.subscriptions} staff={data.staff} services={data.services } />
      </div>
    </div>
  )
}



function SubStaffService({ subscriptions, staff, services } : { subscriptions: ISubscription[], staff: IStaff[], services: IService[] }) {

  const [selectedTab, setSelectedTab] = useState('subscriptions')

  return (
    <div className='space-y-5'>

      <div className='flex flex-row justify-between'>
        <Segmented
          size='middle'
          value={selectedTab}
          options={[
            { label: 'Subscriptions', value: 'subscriptions' },
            { label: 'Staff', value: 'staff' },
            { label: 'Services', value: 'services' },
          ]}
          onChange={(value: string) => setSelectedTab(value)}
        />
        <div className='flex flex-row gap-3'>
          <AppButton size='small' icon={<Filter fill='#667085' />}>Filters</AppButton>
          <AppButton type='primary' size='small' icon={<Add />}>Add</AppButton>
        </div>
      </div>

      <div className={`${selectedTab === 'subscriptions' ? 'block' : 'hidden'}`}>
        <Subscriptions data={subscriptions} />
      </div>
      <div className={`${selectedTab === 'staff' ? 'block' : 'hidden'}`}>
        <Staff data={staff} />
      </div>
      <div className={`${selectedTab === 'services' ? 'block' : 'hidden'}`}>
        <Services data={services} />
      </div>
    </div>
  )
}
