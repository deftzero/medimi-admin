import { Table, TableProps, Tag } from "antd";
import { IStaff } from "../../../pages/admin/medical-accounts/MedicalAccounts";
import { dateFormatter } from "../../../utils";


const columns: TableProps<IStaff>['columns']= [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Service',
    dataIndex: 'service',
    key: 'service',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Creation Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text) => <span>{dateFormatter(text)}</span>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => <Tag color="green">{status}</Tag>
  },
];


export default function Staff({ data }: { data: IStaff | any }) {
  return (
    <Table dataSource={data} columns={columns} pagination={false} />
  )
}

