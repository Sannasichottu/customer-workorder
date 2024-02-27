import React from 'react'

import { Button, Descriptions } from 'antd';
import { Space, Table } from 'antd';
const items = [
  {
    key: '1',
    label: 'Mataerial Name',
    children: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
  },
  {
    key: '2',
    label: 'Engine Code',
    children: '2TR-FE',
  },
  {
    key: '3',
    label: 'Type',
    children: 'Petrol',
  },
  {
    key: '4',
    label: 'Quantity',
    children: '1',
  },
  {
    key: '5',
    label: 'Address',
    children: 'No. 18, XXX, YYYY, ZZZ',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Engine Code',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Engine Type',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
  },
  {
    key: '2',
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
  },
  {
    key: '3',
    name: 'Zhou Maomao5-speed R151 manual 6-speed AC60 automatic',
    code: '2TR-FE',
    type: 'Petrol',
  },
 
];

const PlaceOrder = () => {
  return (
    <>
     <h2 style={{textAlign:'center'}}>Place the Order</h2>
    
      <div><Descriptions title="Engine Name" items={items} />  <Button type="primary" block>
    Add Item
  </Button>
  </div> <br /> <br />
  <Table columns={columns} dataSource={data} />
  <Button type="primary" block>
    Place the Order
  </Button>
    </>
  )
}

export default PlaceOrder