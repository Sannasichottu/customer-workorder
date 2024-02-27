import React, { useState } from 'react'
import {
    AuditOutlined,
    CheckOutlined,
    DeliveredProcedureOutlined,
    FormOutlined,
    HistoryOutlined,
    InboxOutlined,
    LoadingOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MoneyCollectOutlined,
  } from '@ant-design/icons';

  import { Layout, Menu, Button, theme } from 'antd';
import { Route, Routes,  useNavigate } from 'react-router-dom';
import PlaceOrder from './PlaceOrder';
import OrderStatus from './OrderStatus';
import OrderHistory from './OrderHistory';
import Invoice from './Invoice';
import { Payment } from './Payment';
import Delivery from './Delivery';
import UserInbox from './UserInbox';
import EnquiryForm from './EnquiryForm';
const { Header, Sider, Content } = Layout;


const Sidebar = () => {

    let navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '0',
            label:  'Logo',
            onClick: () => { navigate('/')}
            
          },
          {
            key: '1',
            icon: <FormOutlined />,
            label:  'Enquiry Form',
            onClick: () => { navigate('/')}
            
          },
          {
            key: '2',
            icon: <InboxOutlined />,
            label: 'User Inbox',
            onClick: () => { navigate('/userInbox')}
          },
          {
            key: '3',
            icon: <CheckOutlined />,
            label: 'Place the Order',
            onClick: () => { navigate('/placeOrder')}
            
          },
          {
            key: '4',
            icon:<LoadingOutlined />,
            label: 'Order Status',
            onClick: () => { navigate('/orderStatus')}
            
          },
          {
            key: '5',
            icon: <HistoryOutlined />,
            label: 'History',
            onClick: () => { navigate('/orderHistory')}
          },
          {
            key: '6',
            icon: <AuditOutlined />,
            label: 'Invoice',
            onClick: () => { navigate('/userInvoice')}
          },
         
          {
            key: '7',
            icon: <MoneyCollectOutlined />,
            label: 'Payment Process',
            onClick: () => { navigate('/userPayment')}
          },
          {
            key: '8',
            icon: <DeliveredProcedureOutlined />,
            label: 'Delivery tracking',
            onClick: () => { navigate('/userDelivery')}
          },
        ]}
      />
    </Sider>
    <Layout>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          height: '50em',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
       <Routes>
            <Route exact path="/" element={<EnquiryForm />} />
            <Route exact path="/placeOrder" element={<PlaceOrder />} />
            <Route exact path="/orderStatus" element={<OrderStatus /> } />
            <Route exact path="/orderHistory" element={<OrderHistory /> } />
            <Route exact path="/userInvoice" element={<Invoice /> } />
            <Route exact path="/userInbox" element={<UserInbox /> } />
            <Route exact path="/userPayment" element={<Payment /> } />
            <Route exact path="/userDelivery" element={<Delivery /> } />
           
          </Routes>
      </Content>
    </Layout>
  </Layout>
  )
}

export default Sidebar