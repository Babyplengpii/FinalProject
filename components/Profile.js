import React from 'react'
import ReactDOM from 'react-dom';
import { Card,Typography } from 'antd';
import { Row, Col } from 'antd';
import { Image } from 'antd';
import { Center } from '@chakra-ui/react';
import { Table } from 'antd';
import { SpaceContext } from 'antd/lib/space';
import Profile from '../styles/Profile.module.css'


export default function profile() {
 const { Meta } = Card;
 const { Title } = Typography;
 
  /*const titleName1 = <div><h1>[UPDATE]  BTS Members Profile, Age,<br></br> 
                          Music, Official Accounts</h1> <br></br>
                          <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/><br></br> 
                     </div>
  const titleName2=  <Image
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                     />
  const titleName3=  <div>BTS (Korean: 방탄소년단; RR: Bangtan Sonyeondan)<br></br> 
                        also known as the Bangtan Boys, is a South Korean boy band that was formed in 2010 and debuted in  <br></br>
                        2013 under Big Hit Entertainment. The septet—consisting of members Jin, Suga, J-Hope, RM, Jimin, V,   <br></br>
                        and Jungkook—co-writes and co-produces much of their own output.   <br></br>
                        Originally a hip hop group, their musical style has evolved to include a wide range of genres.
                    </div>
  */
                    



  return ( 
                   <Col xs={{ span: 26, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 5 }}>
                      <Card style={{ width: 900, borderRadius: '3px',backgroundColor: '#4c4556',color:'white' }}>
                   <p>
                   <div style={{fontWeight:'bold',fontSize:'24px' ,marginLeft: '50px' }}>[UPDATE]  BTS Members Profile, Age,<br></br> 
                          Music, Official Accounts<br></br>
                  </div>
                   </p>
                   <p>
                   <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image width={400}
                        src="https://mumbaimirror.indiatimes.com/photo/68693602.cms"/>
                      </div>
                     </p>
                    <p><div style={{fontSize:'16px',marginLeft: '50px'}}>BTS (Korean: 방탄소년단; RR: Bangtan Sonyeondan)<br></br> 
                        also known as the Bangtan Boys, is a South Korean boy band that was formed in 2010 and debuted in  <br></br>
                        2013 under Big Hit Entertainment. The septet—consisting of members Jin, Suga, J-Hope, RM, Jimin, V,   <br></br>
                        and Jungkook—co-writes and co-produces much of their own output.   <br></br>
                        Originally a hip hop group, their musical style has evolved to include a wide range of genres.
                    </div></p>
                    <p><div style={{fontWeight:'bold',fontSize:'24px',marginLeft: '50px'}}>BTS Member Profile <br></br>
                    </div></p>
                    <div className="setcen">
                      <div className="row">
                        <div className="block">
                          <div className="col-3">
                            <Title> Member Photo </Title>
                            <Image
                              width={200}
                              src="https://www.btblackxswan.com/wp-content/uploads/2021/05/qjbwdn8maKgzZpv4Esk-o.jpg"
                            /> 
                          </div>
                          <div className="col-9 column">
                            <Title> ปกติ Ant Design</Title>
                            <Title level={2}> เร้ก Ant Design</Title>
                            <Title level={3}> เร้กกว่าอันบน Ant Design</Title>
                          </div>
                          <div className="col-12 column">
                            <Title> ริม Ant Design</Title>
                            <Title level={2}> ริมเร้ก Ant Design</Title>
                            <Title level={3}> ริมเร้กกว่าอันบน Ant Design</Title>
                            <Title level={3}> ริมเร้กกว่าอันบน Ant Design</Title>
                          </div>
                        </div>
                      </div>
                    </div>
              </Card></Col>
  );
     }

