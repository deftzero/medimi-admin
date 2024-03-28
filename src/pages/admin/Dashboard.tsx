import { Col, Row, Typography } from 'antd';
import Add from '../../assets/icons/add.svg?react'
import AppButton from '../../components/ui/AppButton';

const { Title } = Typography;

export default function Dashboard() {
  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>Welcome Back Jon</Title>
        <AppButton type='primary' size='small' icon={<Add fill='red' />}>New Account</AppButton>
      </div>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <div className="bg-white p-5 rounded-md">
            Table
          </div>
        </Col>
        <Col span={16}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="bg-white p-5 rounded-md borderh-full">
                Income
              </div>
            </Col>
            <Col span={12}>
              <div className="bg-white p-5 rounded-md h-full">
                Income
              </div>
            </Col>
            <Col span={12}>
              <div className="bg-white p-5 rounded-md h-full">
                Income
              </div>
            </Col>
          </Row>

        </Col>
        <Col span={8}>
          <div className="bg-white p-5 rounded-md border border-slate-300 h-full">
            Recent Activity
          </div>
        </Col>
      </Row>
    </div>
  )
}