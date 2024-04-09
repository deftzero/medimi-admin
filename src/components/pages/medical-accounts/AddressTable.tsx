import { Table, TableProps } from "antd";
import { IAddress } from "../../../pages/admin/medical-accounts/MedicalAccounts";


const columns: TableProps<IAddress>['columns']= [
  {
    title: 'Address',
    dataIndex: 'label',
    key: 'label',
  },
  {
    title: 'Latitude',
    dataIndex: 'latitude',
    key: 'latitude',
  },
  {
    title: 'Longitude',
    dataIndex: 'longitude',
    key: 'longitude',
  },
  {
    title: 'Indications',
    dataIndex: 'indications',
    key: 'indications',
  },
];


export default function AddressTable({ data }: { data: IAddress | any }) {
  return (
    <Table dataSource={data} columns={columns} pagination={false} />
  )
}

