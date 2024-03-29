import { Select, Typography } from "antd";
import { IMedicalAccount, MedicalAccountsTable } from "../../../pages/admin/MedicalAccounts";
const { Title } = Typography;


const selectOptions: any = [
  {
    id: 1,
    name: 'Senegal'
  },
  {
    id: 2,
    name: 'France'
  }
]

export default function Deployments() {

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
    <>
      <div className="space-y-5">
        <div className="header flex flex-row justify-between items-center">
        <Title level={4} className='mt-3'>Ongoing Deployments</Title>
          <Select className="w-32" placeholder="Country">
            {selectOptions.map((item: any) => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </div>
        <MedicalAccountsTable data={data} />
      </div>
    </>
  )
}