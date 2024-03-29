import { AutoComplete, Button, Col, Divider, Form, Input, InputNumber, Modal, Row, Select, Space } from 'antd';
import Add from '../../../assets/icons/add.svg?react'
import ChevronDown from '../../../assets/icons/chevron-down.svg?react'
import LocationMarker from '../../../assets/icons/location-marker.svg?react'
import Close from '../../../assets/icons/close.svg?react'
import LocationCoordinates from '../../../assets/icons/location-coordinates.svg?react'

import AppButton from "../../ui/AppButton";
import { useState } from 'react';

const { TextArea } = Input

export default function AddAccount() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => setOpen(!open)

  return (
    <>
      <AppButton onClick={toggleDrawer} type='primary' size='small' icon={<Add />}>Add an Account</AppButton>
      <Modal
        title="Add an Account"
        centered
        open={open}
        onOk={toggleDrawer}
        className='my-10'
        onCancel={toggleDrawer}
        width={720}
        footer={false}
      >
        <Divider />
        <AddAccountForm />
      </Modal>
    </>
  )
}


function AddAccountForm() {

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

  const autoCompleteOptions = [
    { value: 'Burns Bay Road' },
    { value: 'Downing Street' },
    { value: 'Wall Street' },
  ];


  function handleSubmit(values: any) {
    console.log(values)
  }

  return (
    <Form onFinish={handleSubmit} initialValues={{ indications: [undefined] }} layout="vertical" requiredMark={false}>
      <Row gutter={20}>
        <Col span={12}>
          <Form.Item name="type" label={<span className="text-xs">Account Type</span>}>
            <Select>
              {selectOptions.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="name" label={<span className="text-xs">Name</span>}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="country" label={<span className="text-xs">Country</span>}>
            <Select>
              {selectOptions.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="region" label={<span className="text-xs">Region</span>}>
            <Select>
              {selectOptions.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="city" label={<span className="text-xs">City</span>}>
            <Select>
              {selectOptions.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="speciality" label={<span className="text-xs">Speciality</span>}>
            <Select>
              {selectOptions.map((item: any) => (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={24}>
          <div className='flex flex-row gap-2 items-center'>
            <Form.Item name="address" className='w-full' label={<span className="text-xs grow">Address</span>}>
              <AutoComplete
                className='w-full'
                options={autoCompleteOptions}
                suffixIcon={<ChevronDown />}
                placeholder="Search address"
                filterOption={(inputValue, option) =>
                  option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
              />
            </Form.Item>
            <AppButton className="mt-5 flex-none">
              <LocationMarker />
            </AppButton>
          </div>
        </Col>
        <Col span={12}>
          <Form.Item name="latitude" label={<span className="text-xs">Latitude</span>}>
            <InputNumber controls={false} className='w-full' suffix={<LocationCoordinates />} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="longitude" label={<span className="text-xs">Longitude</span>}>
            <InputNumber controls={false} className='w-full' suffix={<LocationCoordinates />} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.List name="indications">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} className='flex flex-row gap-2 items-center'>
                    <Form.Item
                      {...restField}
                      label={<span className="text-xs">Access Indication</span>}
                      name={[name, 'indication']}
                      className='w-full'
                      rules={[{ required: true, message: 'Missing Indication' }]}
                    >
                      <Input placeholder="Enter Indication" className='w-full' />
                    </Form.Item>
                    <Button onClick={() => remove(name)} className='mt-5'>
                      <Close height={10} />
                    </Button>
                  </div>
                ))}
                <Form.Item>
                  <Space className='mt-2'>
                    <Button type="primary" shape='circle' onClick={() => add()} block icon={<Add />} />
                    <span>Add another indication</span>
                  </Space>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Col>
        <Col span={24}>
          <Form.Item name="description" label={<span className="text-xs">Description</span>}>
            <TextArea rows={4} placeholder="Enter description" maxLength={6} />
          </Form.Item>
        </Col>
        {/* <Col span={24}>Profile</Col>
        <Col span={24}>Gallery</Col>
        <Col span={24}>Legal Documents</Col> */}
      </Row>
    </Form>
  )
}
