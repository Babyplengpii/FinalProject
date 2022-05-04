import React from 'react'
import ReactDOM from 'react-dom';
import { Card,Typography } from 'antd';
import { Row, Col } from 'antd';
import { Center, color } from '@chakra-ui/react';
import { Table,Button } from 'antd';
import { Input } from 'antd';
import { UserOutlined ,LockOutlined ,MailOutlined } from '@ant-design/icons';
import { FaLock ,FaUserAlt} from 'react-icons/fa';
import { HiMail } from "react-icons/hi";


export default function profile() {
 const { Meta } = Card;


  return ( 
                   <Col xs={{ span: 26, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 5 }}>
                      <Card style={{ width: 500, borderRadius: '10px',backgroundColor: '#ffffff',color:'white' , marginLeft:'180px' }}>
                   <p>
                   <div style={{fontWeight:'bold',fontSize:'30px' ,marginLeft: '30px' ,textAlign:'center',color:'#000000' ,fontFamily:'Noto Sans' }}>Sign Up<br></br> 
                  </div>
                   </p>
                    <div>
                   <Input style={{width: '60%' ,borderRadius: '8px',fontSize: '18px' }}
                    placeholder ="Name" prefix={<FaUserAlt style={{ color: '#872642' }}/>}/><br></br>  
                
                   <Input style={{width: '60%',borderRadius: '8px',fontSize: '20px' }} 
                   placeholder="E-mail" prefix={<HiMail style={{ color: '#872642' }}/>} /><br></br>  
                   
                    <Input style={{width: '60%',borderRadius: '8px',fontSize: '18px' }} 
                   placeholder="Password" prefix={<FaLock style={{ color: '#872642' }}/>} /><br></br> 
                   </div><br></br>  
                   <div>
                   <Button style={{borderRadius: '8px',backgroundColor: '#872642',color:'white' ,textAlign:'center', marginLeft:'190px',fontWeight:'bold'}}>Sign Up</Button>
                   </div><br></br>  
                   <text style={{fontWeight:'bold',color:'#000000',marginLeft:'120px'}}>Already have an account?</text>
                   <Button type="link" style={{fontWeight:'bold',color:'#F6C026' }}>
                    Log in
                  </Button>

              </Card></Col>

  );
     }

