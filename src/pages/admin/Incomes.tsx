import { Col, Row, Space, Typography } from "antd";
import Filter from '../../assets/icons/filter.svg?react'
import DoubleChevronRight from '../../assets/icons/double-chevron-right.svg?react'
import AppButton from "../../components/ui/AppButton";

const { Title } = Typography;

export default function Incomes() {
  return (
    <div className="space-y-5">
      <div className="header flex flex-row justify-between items-center">
        <Title level={3} className='mt-3'>Incomes</Title>
        <Space>
          <AppButton size='small' icon={<Filter fill='#667085' />}>Filters</AppButton>
          <AppButton type='primary' size='small' icon={<DoubleChevronRight fill='white' />}>Generate Details</AppButton>
        </Space>
      </div>

      <Row gutter={[24, 24]}>
        <Col span={6}>
          <div className="bg-white p-5 rounded-md h-full">
            Total
          </div>
        </Col>
        <Col span={6}>
          <div className="bg-white p-5 rounded-md h-full">
            Average per month
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