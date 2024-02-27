import React from 'react';
import { Button, Card, Col, Row } from 'antd';

const UserInbox = () => {
 
  return(
    <>
    <h2 style={{textAlign:'center'}}>User Inbox</h2>
      <Row gutter={16}>
    <Col span={10} style={{border:"1px solid black",margin:"10px"}} >
      <Card title="5-speed R151 manual 6-speed AC60 automatic" bordered={false}>
      Your inquiry has been received  <br /> <br /> Invoice Num : <Button type="primary">#MDV021</Button>
      </Card>
    </Col>
    <Col span={10} style={{border:"1px solid black", margin:"10px"}}>
      <Card title="5-speed R151 manual 6-speed RC60 manual" bordered={false}>
      Your inquiry is being processed <br /> <br /> Invoice Num : <Button type="primary">#MDV025</Button>
      </Card>
    </Col>
  
  </Row>

  <Row gutter={16}>
    <Col span={10} style={{border:"1px solid black",margin:"10px"}}>
      <Card title="6-speed AC60 automatic" bordered={false}>
      Your inquiry is pending. <br /> <br /> Invoice Num : <Button type="primary">#MDV026</Button>
      </Card>
    </Col>
    <Col span={10} style={{border:"1px solid black",margin:"10px"}}>
      <Card title="5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic" bordered={false}>
        Verify your Gmail  <br /> <br /> Invoice Num : <Button type="primary">#MDV020</Button>
      </Card>
    </Col>
    
  </Row>
    </>

    );
};


export default UserInbox