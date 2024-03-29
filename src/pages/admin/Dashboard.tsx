import { Col, Row, Statistic, Typography, DatePicker, Space } from 'antd';
import Add from '../../assets/icons/add.svg?react'
import Calendar from '../../assets/icons/calendar.svg?react'
import AppButton from '../../components/ui/AppButton';
import Deployments from '../../components/pages/dashboard/Deployments';
import RecentActivities from '../../components/pages/dashboard/RecentActivities';
import { IncomeChart } from '../../components/pages/dashboard/IncomeChart';

const { RangePicker } = DatePicker;
const { Title } = Typography;

export default function Dashboard() {
  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>Welcome Back Jon</Title>
        <AppButton type='primary' size='small' icon={<Add />}>New Account</AppButton>
      </div>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <div className="bg-white p-5 rounded-md">
            <Deployments />
          </div>
        </Col>
        <Col span={16}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <div className="bg-white p-5 rounded-md border h-full">
                <div className='flex flex-row justify-between items-center'>
                  <Title level={4} className='mt-3'>Incomes</Title>
                  <RangePicker suffixIcon={<Calendar />} placeholder={['Start Date', 'End Date']} />
                </div>
                <div className='h-48 flex flex-row gap-20'>
                  <IncomeChart />
                  <div className='flex flex-row items-center gap-10'>
                    <Statistic
                      title={
                        <Space>
                          <span className='h-3 w-3 bg-primary block rounded-full'></span>
                          <span className='text-primary'>
                            Facilities
                          </span>
                        </Space>
                      }
                      value={4000000}
                    />
                    <Statistic
                      title={
                        <Space>
                          <span className='h-3 w-3 bg-secondary block rounded-full'></span>
                          <span className='text-secondary'>
                          Independant Doctors
                          </span>
                        </Space>
                      }
                      value={415000005}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="bg-white p-5 rounded-md h-content flex flex-row items-start justify-between">
                <Statistic
                  title="Facilities"
                  value={45}
                />
                <div className='bg-secondary flex items-center justify-center rounded-full h-10 w-10'>
                  <Add className='block' />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="bg-white p-5 rounded-md h-content flex flex-row items-start justify-between">
                <Statistic
                  title="Independants"
                  value={20}
                />
                <div className='bg-secondary flex items-center justify-center rounded-full h-10 w-10'>
                  <Add className='block' />
                </div>
              </div>
            </Col>
          </Row>

        </Col>
        <Col span={8}>
          <div className="bg-white p-5 rounded-md border border-slate-300 h-full">
            <RecentActivities />
          </div>
        </Col>
      </Row>
    </div>
  )
}