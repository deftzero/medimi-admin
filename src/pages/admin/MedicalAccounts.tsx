import { Drawer, Form, Input, Select, Table, TableProps, Tag, Typography } from "antd";
import Filter from '../../assets/icons/filter.svg?react'
import Close from '../../assets/icons/close.svg?react'
import Search from '../../assets/icons/search.svg?react'
import AppButton from "../../components/ui/AppButton";
import { dateFormatter } from "../../utils";
import { useState } from "react";
import AddAccount from "../../components/pages/medical-accounts/AddAccount";

const { Title } = Typography;


export interface IMedicalAccount {
  id: string;
  name: string;
  type: string;
  address: string;
  country: string;
  region: string;
  city: string;
  createdAt: Date;
  status: string
}


export default function MedicalAccounts() {

  const data: IMedicalAccount[] = [
    {
      id: 'SN-H1',
      name: 'Clinique Amitie',
      type: 'AH2',
      address: 'Liberty 6 BP, Dakar',
      country: 'Senegal',
      region: 'Dakar',
      city: 'Dakar',
      createdAt: new Date(),
      status: 'Ongoing'
    },
    {
      id: 'SN-H2',
      name: 'Clinique Amitie',
      type: 'AH2',
      address: 'Liberty 6 BP, Dakar',
      country: 'Senegal',
      region: 'Dakar',
      city: 'Dakar',
      createdAt: new Date(),
      status: 'Validated'
    }
  ]

  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>Medical Accounts</Title>
        <AddAccount />
      </div>

      <div className="bg-white p-5 rounded-md space-y-5">
        <div className="header flex flex-row justify-between items-center">
          <Input prefix={<Search />} placeholder='Search...' style={{ maxWidth: '300px' }} />
          <MedicalAccountsFilter />
        </div>
        <MedicalAccountsTable data={data} />
      </div>
    </div>
  )
}


export const columns: TableProps<IMedicalAccount>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
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
    render: (text) => <Tag color={returnTagColorByStatus(text)}>{text}</Tag>
  },
]

export function MedicalAccountsTable({ data }: { data: IMedicalAccount[] }) {
  return <Table columns={columns} dataSource={data} />
}

function MedicalAccountsFilter() {

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer: any = () => setOpenDrawer(!openDrawer)

  const [form] = Form.useForm()

  function handleSubmit(values: IMedicalAccount) {
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
        <MedicalAccountsFilterForm form={form} handleSubmit={handleSubmit} />
      </Drawer >
    </>

  )
}

function MedicalAccountsFilterForm({ form, handleSubmit }: { form: any, handleSubmit: any }) {

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
        <Form.Item name="type" label={<span className="text-xs">Name</span>}>
          <Select>
            {selectOptions.map((item: any) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="country" label={<span className="text-xs">Country</span>}>
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

        <Form.Item name="city" label={<span className="text-xs">City</span>}>
          <Select>
            {selectOptions.map((item: any) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="status" label={<span className="text-xs">Status</span>}>
          <Select>
            {selectOptions.map((item: any) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
    </Form>
  )
}


export function returnTagColorByStatus(status: string) {
  const colorMap: any = {
    Ongoing: 'magenta',
    Validated: 'blue'
  }
  return colorMap[status]
}