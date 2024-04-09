import { Drawer, Form, Input, Select, Table, TableProps, Tag, Typography } from "antd";
import Filter from '../../../assets/icons/filter.svg?react'
import Close from '../../../assets/icons/close.svg?react'
import Search from '../../../assets/icons/search.svg?react'
import AppButton from "../../../components/ui/AppButton";
import { dateFormatter } from "../../../utils";
import { useState } from "react";
import AddAccount from "../../../components/pages/medical-accounts/AddAccount";
import { Link } from "react-router-dom";

const { Title } = Typography;


export interface IMedicalAccount {
  id: string;
  name: string;
  type?: string;
  avatar?: string,
  country?: string;
  region?: string;
  city?: string;
  collectionMethod?: string
  collectionNumber?: string
  address?: IAddress[]
  documents?: IFile[]
  gallery?: IFile[]
  subscriptions?: ISubscription[]
  staff?: IStaff[]
  services?: IService[]
  description?: string
  createdAt?: Date;
  status?: string
}

export interface IFile {
    name: string
    url: string
    size: number
    type: string
}

export interface IAddress {
  label: string
  latitude: number
  longitude: number
  indications: string
}

export interface ISubscription {
  id: string
  type: string
  activationDate: Date
  startDate: Date
  endDate: Date
  amount: number
  joinedFile: string,
  createdAt?: Date;
  status: string
}

export interface IStaff {
  id: string
  firstName: string
  lastName: string
  email: string
  role: string
  service: string
  createdAt?: Date;
  status: string
}

export interface IService {
  id: string
  title: string
  description: string
  numberOfStaff: number
  createdAt?: Date;
  status: string
}

export const medicalAccountData: IMedicalAccount[] = [
  {
    id: 'SN-H1',
    name: 'Hospital Principle',
    avatar: 'https://images.unsplash.com/photo-1638552903142-d4323d81eb8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMjY5MzAxMg&ixlib=rb-4.0.3&q=40&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
    type: 'AH2',
    address: [
      {
        label: 'Liberty 6 BP, Dakar',
        latitude: 21.239293,
        longitude: 23.23992,
        indications: 'to the hospital'
      },
      {
        label: 'Dakar-Plateu Hauteur',
        latitude: 21.239293,
        longitude: 23.23992,
        indications: 'to the hospital'
      }
    ],
    documents: [
      {
        name: 'third meeting mom.doc',
        size: 2388488,
        type: 'doc',
        url: ''
      },
      {
        name: 'third meeting mom.pdf',
        size: 2388488,
        type: 'pdf',
        url: ''
      }
    ],
    gallery: [
      {
        name: 'third meeting mom.doc',
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxODczMw&ixlib=rb-4.0.3&q=40&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        size: 2388488,
        type: 'doc'
      },
      {
        name: 'third meeting mom.pdf',
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxODczMw&ixlib=rb-4.0.3&q=40&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        size: 2388488,
        type: 'pdf'
      }
    ],
    subscriptions: [
      {
        id: 'SUB-1',
        type: 'Medicall for Facilities',
        activationDate: new Date(),
        startDate: new Date(),
        endDate: new Date(),
        amount: 1500,
        joinedFile: 'recu.pdf',
        createdAt: new Date(),
        status: 'Active'
      }
    ],
    staff: [
      {
        id: 'SN-H1-CH1',
        firstName: 'Modou',
        lastName: 'Ndiaye',
        email: 'moudou.ndiaye',
        role: 'Faculty Admin',
        service: 'Gynecology',
        createdAt: new Date(),
        status: 'Active'
      }
    ],
    services: [
      {
        id: 'SN-H1-S1',
        title: 'Gynecology',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu',
        numberOfStaff: 15,
        createdAt: new Date(),
        status: 'Active',
      }
    ],
    country: 'Senegal',
    region: 'Dakar',
    city: 'Dakar',
    collectionMethod: 'Wave',
    collectionNumber: '+221785412145',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.',
    createdAt: new Date(),
    status: 'In Validation'
  },
  {
    id: 'SN-H2',
    name: 'Clinique Amitie',
    type: 'AH2',
    address: [
      {
        label: 'Liberty 6 BP, Dakar',
        latitude: 21.239293,
        longitude: 23.23992,
        indications: 'to the hospital'
      }
    ],
    country: 'Senegal',
    region: 'Dakar',
    city: 'Dakar',
    createdAt: new Date(),
    status: 'Validated'
  }
]


export default function MedicalAccounts() {



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
        <MedicalAccountsTable data={medicalAccountData} />
      </div>
    </div>
  )
}


export const columns: TableProps<IMedicalAccount>['columns'] = [
  {
    title: 'ID',
    render: (data) => <Link className="text-slate-800 hover:text-secondary" to={`/medical-accounts/${data.id}`}>{data.id}</Link>
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
    render: (address) => <span>{address[0].label}</span>
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