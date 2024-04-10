import { Select, Typography } from "antd";
import { MedicalAccountsTable } from "../../../pages/admin/medical-accounts/MedicalAccounts";
import { medicalAccountData } from "../../../data/mock-data";
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
        <MedicalAccountsTable data={medicalAccountData} />
      </div>
    </>
  )
}