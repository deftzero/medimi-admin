import { Table, TableProps, Tag } from "antd";
import { IService } from "../../../pages/admin/medical-accounts/MedicalAccounts";
import { dateFormatter } from "../../../utils";


const columns: TableProps<IService>['columns']= [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Service',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Staff',
    dataIndex: 'numberOfStaff',
    key: 'numberOfStaff',
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


export default function Services({ data }: { data: IService | any }) {
  return (
    <Table dataSource={data} columns={columns} pagination={false} />
  )
}

