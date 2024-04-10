import { Typography } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import ChevronLeft from '../../../assets/icons/chevron-left.svg?react'
import Download from '../../../assets/icons/download.svg?react'
import AppButton from "../../../components/ui/AppButton";
import DetailsSubscriptionsTable from "../../../components/pages/incomes/Subscriptions";
const { Title } = Typography

export default function IncomeDetails() {

  let [searchParams, setSearchParams] = useSearchParams();

  let country = searchParams.get("country");

  return (
    <div className="space-y-5">

      <div className='flex flex-row items-center justify-between gap-5'>
        <div className="flex flex-wrap gap-5 items-center">
          <Link to={'/incomes'} className=''>
            <ChevronLeft />
          </Link>
          <Title level={3} className='mt-2'>Medical Account Details {country}</Title>
        </div>
        <AppButton type='primary' size='small' icon={<Download fill='white' />}>Generate Details</AppButton>
      </div>

      <div className="bg-white p-5 rounded-md">
        <div className="flex flex-wrap items-center gap-10">
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Country</p>
            <p className='my-1 font-medium'>All</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Account Type</p>
            <p className='my-1 font-medium'>All</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Subscription Type</p>
            <p className='my-1 font-medium'>All</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Total</p>
            <p className='my-1 font-medium'>23000</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-md">
        <DetailsSubscriptionsTable />
      </div>

    </div>
  )
}
