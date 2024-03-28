import { Typography } from "antd";
import Add from '../../assets/icons/add.svg?react'
import AppButton from "../../components/ui/AppButton";

const { Title } = Typography;

export default function Users() {
  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>Users</Title>
        <AppButton type='primary' size='small' icon={<Add fill='red' />}>Add a user</AppButton>
      </div>

      <div className="bg-white p-5 rounded-md">
        Table
      </div>
    </div>
  )
}