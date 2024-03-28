import { Typography } from "antd";
import Add from '../../assets/icons/add.svg?react'
import AppButton from "../../components/ui/AppButton";

const { Title } = Typography;

export default function Countries() {
  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>Countries</Title>
        <AppButton type='primary' size='small' icon={<Add fill='red' />}>Add a Country</AppButton>
      </div>

      <div className="bg-white p-5 rounded-md">
        <div className="header flex flex-row justify-between items-center">
          <Title level={3} className='mt-3'>Countries</Title>
          <AppButton type='primary' size='small' icon={<Add fill='red' />}>Add a Country</AppButton>
        </div>
        Table
      </div>
    </div>
  )
}