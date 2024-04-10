import { Col, Row, Space, Typography } from "antd";
import DoubleChevronRight from '../../../assets/icons/double-chevron-right.svg?react'
import AppButton from "../../../components/ui/AppButton";
import IncomesFilter from "../../../components/pages/incomes/Filter";
import { useNavigate } from "react-router-dom";
import ChartCard from "../../../components/pages/incomes/ChartCard";

const { Title } = Typography;

export default function Incomes() {

  const navigate = useNavigate()

  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>Incomes</Title>
        <Space>
          <IncomesFilter />
          <AppButton onClick={() => navigate('/incomes/details')} type='primary' size='small' icon={<DoubleChevronRight fill='white' />}>Generate Details</AppButton>
        </Space>
      </div>

      <Row gutter={[24, 24]}>
        <Col span={6}>
          <div className="bg-white p-5 rounded-md h-full">
            <ChartCard title="Total" value={25000} percent={'+10'} />
          </div>
        </Col>
        <Col span={6}>
          <div className="bg-white p-5 rounded-md h-full">
            <ChartCard title="Average per month" value={15000} percent={'+10'} />
          </div>
        </Col>
        <Col span={24}>
          <div className="bg-white p-5 rounded-md borderh-full">
            Revenue
          </div>
        </Col>
      </Row>
    </div>
  )
}