import { Input, Table } from "antd"
import Search from '../../../assets/icons/search.svg?react'
import { dateFormatter } from "../../../utils"

const subsData = [
  {
    type: 'Medical',
    account: 'Modou Ndiaye',
    duration: '2 yrs',
    amount: '1500',
    subscriptionDate: new Date()
  },
  {
    type: 'Facility',
    account: 'Modou Ndiaye',
    duration: '1 yrs',
    amount: '2500',
    subscriptionDate: new Date()
  }
]

const columns = [
  {
    title: 'Subscription Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Account',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Subscription Date',
    dataIndex: 'subscriptionDate',
    key: 'subscriptionDate',
    render: (text: Date) => <span>{dateFormatter(text)}</span>,
  },
]

export default function DetailsSubscriptionsTable() {
  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Input prefix={<Search />} placeholder='Search...' style={{ maxWidth: '300px' }} />
      </div>
      <Table columns={columns} dataSource={subsData} />

    </div>
  )
}




