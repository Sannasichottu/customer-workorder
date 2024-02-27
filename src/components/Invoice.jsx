import React from 'react'
import {   Table, Tag } from 'antd';

const columns = [
  {
    title: 'Invoice Number',
    dataIndex: 'num',
    key: 'num',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Material Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 4 ? 'volcano' : 'green';
          if (tag === 'Pending') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
 
  {
    title: 'Invoice Date',
    dataIndex: 'invoiceDate',
    key: 'invoiceDate',
  },{
    title: 'Due Date',
    dataIndex: 'dueDate',
    key: 'dueDate',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  
];
const data = [
  {
    key: '1',
    num:'MDA120',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['paid'],
  },
  {
    key: '2',
    num:'MDA121',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['pending'],
  },
  {
    key: '3',
    num:'MDA122',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['paid'],
  },
  {
    key: '4',
    num:'MDA123',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['paid'],
  },
  {
    key: '5',
    num:'MDA124',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['paid'],
  },
  {
    key: '6',
    num:'MDA125',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['pending'],
  },
  {
    key: '7',
    num:'MDA126',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['pending'],
  },
  {
    key: '8',
    num:'MDA127',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['paid'],
  },
  {
    key: '9',
    num:'MDA128',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['pending'],
  },
  {
    key: '10',
    num:'MDA129',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['paid'],
  },
  {
    key: '11',
    num:'MDA130',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['pending'],
  },
  {
    key: '12',
    num:'MDA121',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['paid'],
  },
  {
    key: '13',
    num:'MDA122',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['paid'],
  },
  {
    key: '14',
    num:'MDA123',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['pending'],
  },
  {
    key: '15',
    num:'MDA124',
    name: '5-speed R151 manual 6-speed',
    invoiceDate: 'Dec-7-2023',
   dueDate:'Dec-7-2023',
   amount:'₹ 20,000',
   tags: ['paid'],
  },
];
const Invoice = () => {
  

  return (
    <div>
         <h2 style={{textAlign:'center'}}>User Invoice</h2>
    
      
      <Table
        columns={columns}
        
        dataSource={data}
      />
    </div>
  )
}

export default Invoice