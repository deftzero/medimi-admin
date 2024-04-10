import { Drawer, Form, Select, Typography, DatePicker } from "antd";
import Close from '../../../assets/icons/close.svg?react'
import AppButton from "../../ui/AppButton";
import Filter from '../../../assets/icons/filter.svg?react'
import { useState } from "react";
const { Title } = Typography
const { RangePicker } = DatePicker

const dateFormat = 'DD/MM/YYYY'

export default function IncomesFilter() {

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer: any = () => setOpenDrawer(!openDrawer)

  const [form] = Form.useForm()

  function handleSubmit(values: any) {
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
        <IncomesFilterForm form={form} handleSubmit={handleSubmit} />
      </Drawer >
    </>

  )
}

function IncomesFilterForm({ form, handleSubmit }: { form: any, handleSubmit: any }) {

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
      <Form.Item name="type" label={<span className="text-xs">Country</span>}>
        <Select>
          {selectOptions.map((item: any) => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="country" label={<span className="text-xs">Account Type</span>}>
        <Select>
          {selectOptions.map((item: any) => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="region" label={<span className="text-xs">Subscription Type</span>}>
        <Select>
          {selectOptions.map((item: any) => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="city" label={<span className="text-xs">Dates</span>}>
        <RangePicker
          className="w-full"
          format={dateFormat}
        />
      </Form.Item>

    </Form>
  )
}