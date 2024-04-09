import { Table, TableProps, Tag } from "antd";
import Eye from '../../../assets/icons/eye.svg?react'
import { IAddress, ISubscription } from "../../../pages/admin/medical-accounts/MedicalAccounts";
import { dateFormatter } from "../../../utils";


const columns: TableProps<ISubscription>['columns']= [
  {
    title: 'Subscription Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Activation Date',
    dataIndex: 'activationDate',
    key: 'activationDate',
    render: (text) => <span>{dateFormatter(text)}</span>,
  },
  {
    title: 'From',
    dataIndex: 'startDate',
    key: 'startDate',
    render: (text) => <span>{dateFormatter(text)}</span>,
  },
  {
    title: 'To',
    dataIndex: 'endDate',
    key: 'endDate',
    render: (text) => <span>{dateFormatter(text)}</span>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Joined File',
    dataIndex: 'joinedFile',
    key: 'joinedFile',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => <Tag color="green">{status}</Tag>
  },
  {
    title: 'Action',
    render: (item: any) => (
      <span><Eye /></span>
    )
  },
];


export default function Subscriptions({ data }: { data: ISubscription | any }) {
  return (
    <Table dataSource={data} columns={columns} pagination={false} />
  )
}

