import React from 'react'
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
  } from 'antd';
  
  const { RangePicker } = DatePicker;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  

const EnquiryForm = () => {
  return (
    <>
    <h2 style={{textAlign:'center'}}>Enquiry Form</h2>
    <Form {...formItemLayout} variant="filled" style={{ maxWidth: 1200 }}>
    <Form.Item label="Name" name="Name" rules={[{ required: true, message: 'Please input!' }]}>
      <Input />
    </Form.Item>

    <Form.Item
      label="PhoneNumber"
      name="PhoneNumber"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <InputNumber style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item
      label="Address"
      name="Address"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      label="Product Name"
      name="Product Name"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <Mentions />
    </Form.Item>

    <Form.Item label="Model Number" name="Model Number" rules={[{ required: true, message: 'Please input!' }]}>
      <Select />
    </Form.Item>

    <Form.Item
      label="Type"
      name="Type"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <Cascader />
    </Form.Item>

    

   

    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </>
  )
}

export default EnquiryForm