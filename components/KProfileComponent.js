import React from 'react'

import ReactDOM from 'react-dom';
import fetch from 'node-fetch';
import { Card } from 'antd';
//import { RightCircleOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom"

const Product_R = (props)=>{
  const data = props.data;
  function handleClick(data) {
    console.log(data)
  }
  return (
    <Col xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 1 }}>
      <Card  
      hoverable
      onClick={() => handleClick(data)}
      style={{ width: 300, borderRadius: '7px',backgroundColor: '#872642',color:'white',fontWeight:'bold' }}
      cover={<img alt="example" src={data.image_group} style={{ width: 300, borderRadius: '7px 7px 0 0' }} />}>
      {data.id}
      </Card>
    </Col>
  );

}
export default Product_R;
