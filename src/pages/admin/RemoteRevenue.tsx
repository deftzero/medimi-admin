import { DatePicker, Drawer, Form, Input, Select, Table, TableProps, Typography } from "antd";
import Search from '../../assets/icons/search.svg?react'
import { useState } from "react";
import Filter from '../../assets/icons/filter.svg?react'
import Close from '../../assets/icons/close.svg?react'
import AppButton from "../../components/ui/AppButton";
import { IPatient } from "./patients/Patients";
import { IMedicalAccount } from "./medical-accounts/MedicalAccounts";
import { dateFormatter } from "../../utils";

const { Title } = Typography;

export interface IRemoteRevenue {
  id: string;
  date: Date;
  time: string;
  patient: IPatient;
  medicalAccount: IMedicalAccount;
  totalAmount: number;
  commission: number;
  createdAt: Date;
  status: string
}


export const remoteRevenueData: IRemoteRevenue[] = [
  {
    id: 'RR-1',
    date: new Date(),
    time: '12:10',
    patient: {
      id: 'P1',
      firstName: 'John',
      lastName: 'Allen',
    },
    medicalAccount: {
      id: 'SN-H1',
      name: 'Clinique Amitie',
    },
    totalAmount: 25000,
    commission: 2750,
    createdAt: new Date(),
    status: 'ACTIVE'
  },
  {
    id: 'RR-2',
    date: new Date(),
    time: '12:10',
    patient: {
      id: 'P1',
      firstName: 'Moussa',
      lastName: 'Diop',
    },
    medicalAccount: {
      id: 'SN-H2',
      name: 'Centre Hospital',
    },
    totalAmount: 45000,
    commission: 3750,
    createdAt: new Date(),
    status: 'ACTIVE'
  }
]


export default function RemoteRevenue() {
  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>Remote Revenue</Title>
      </div>

      <div className="bg-white p-5 rounded-md h-full">
        <div className="flex flex-col gap-3">
          <h2 className="my-0 font-light text-xl text-gray-400">Commission Total</h2>
          <span className="font-semibold text-xl">5.450.140 XOF</span>
          <span className="text-teal-600 font-semibold">10%</span>
        </div>
      </div>

      <div className="bg-white p-5 rounded-md space-y-5">
        <div className="header flex flex-row justify-between items-center">
          <Input prefix={<Search />} placeholder='Search...' style={{ maxWidth: '300px' }} />
          <RemoteRevenueFilter />
        </div>
        <RemoteRevenueTable data={remoteRevenueData} />
      </div>
    </div>
  )
}

export const columns: TableProps<IRemoteRevenue>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    render: (date) => <span>{dateFormatter(date)}</span>,
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Patient',
    dataIndex: 'patient',
    key: 'patient',
    render: (patient) => <span>{patient.firstName + ' ' + patient.lastName}</span>,
  },
  {
    title: 'Medical Account',
    dataIndex: 'medicalAccount',
    key: 'medicalAccount',
    render: (medicalAccount) => <span>{medicalAccount.name}</span>,
  },
  {
    title: 'Total Amount',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
    render: (totalAmount) => <span>{totalAmount} XOF</span>,
  },
  {
    title: 'Commission Amount',
    dataIndex: 'commission',
    key: 'commission',
    render: (commission) => <span>{commission} XOF</span>,
  },
]

export function RemoteRevenueTable({ data }: { data: IRemoteRevenue[] }) {
  return <Table columns={columns} dataSource={data} />
}


function RemoteRevenueFilter() {

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer: any = () => setOpenDrawer(!openDrawer)

  const [form] = Form.useForm()

  function handleSubmit(values: any) {
    console.log(values)
  }


  return (
    <>
      <AppButton size='small' icon={<Filter fill='#667085' />} onClick={toggleDrawer}>Filters</AppButton>
      <Drawer
        title={
          <div className="flex flex-row justify-between items-center">
            <Title level={4} className="my-3">Filters</Title>
            <span className="hover:cursor-pointer" onClick={toggleDrawer}>
              <Close height={12} />
            </span>
          </div >
        }
        open={openDrawer}
        onClose={toggleDrawer}
        closeIcon={false}
        footer={
          <div className='py-2 flex justify-end gap-2' >
            <AppButton onClick={toggleDrawer} >Reset</AppButton>
            <AppButton
              type='primary'
              onClick={toggleDrawer}
            >Apply</AppButton>
          </div >
        }
      >
        <RemoteRevenueFilterForm form={form} handleSubmit={handleSubmit} />
      </Drawer >
    </>

  )
}

function RemoteRevenueFilterForm({ form, handleSubmit }: { form: any, handleSubmit: any }) {

  const selectOptions: any = [
    {
      id: 1,
      name: 'AH1'
    },
    {
      id: 2,
      name: 'AH2'
    }
  ]

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical" requiredMark={false}>
      <Form.Item name="country" label={<span className="text-xs">Country</span>}>
        <Select>
          {selectOptions.map((item: any) => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="medicalAccount" label={<span className="text-xs">Medical Account Type</span>}>
        <Select>
          {selectOptions.map((item: any) => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="region" label={<span className="text-xs">Region</span>}>
        <Select>
          {selectOptions.map((item: any) => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="startDate" label={<span className="text-xs">Period Start</span>}>
        <DatePicker placeholder="Select" className="w-full py-1" />
      </Form.Item>

      <Form.Item name="endDate" label={<span className="text-xs">Period End</span>}>
        <DatePicker placeholder="Select" className="w-full py-1" />
      </Form.Item>
    </Form>
  )
}