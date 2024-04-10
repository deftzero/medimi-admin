import { Avatar, Tag, Typography } from "antd";
import { IMedicalAccount } from "../../../data/interfaces";
const { Title } = Typography

export default function Details({ data }: { data: IMedicalAccount }) {
  return (
    <div className='flex flex-row items-center gap-10'>
      <Avatar src={data.avatar} size={64}></Avatar>
      <div className="data-container">
        <Title level={4} className="my-2">Account</Title>
        <div className="wrapper flex flex-wrap gap-5">
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Name</p>
            <p className='my-1 font-medium'>{data.name}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Country</p>
            <p className='my-1 font-medium'>{data.country}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Region</p>
            <p className='my-1 font-medium'>{data.region}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>City</p>
            <p className='my-1 font-medium'>{data.city}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Type</p>
            <p className='my-1 font-medium'>{data.type}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Status</p>
            <p className='my-1 font-medium'>{data.status}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Type</p>
            <p className='my-1 font-medium'>{data.type}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Status</p>
            <Tag color="blue">{data.status}</Tag>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Collection Method</p>
            <p className='my-1 font-medium'>{data.collectionMethod}</p>
          </div>
          <div>
            <p className='text-slate-500 my-0 py-0 text-xs'>Collection Number</p>
            <p className='my-1 font-medium'>{data.collectionNumber}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
