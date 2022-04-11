import React from 'react'
import ReactDOM from 'react-dom';
import { Card } from 'antd';
import { Row, Col } from 'antd';

export default function ContentBox() {
  const { Meta } = Card;
  


  const titleName2 =
  <div><p>About Us</p><p> KMA หรือ KPOP A Month เป็นเว็บไซต์ที่จัดขึ้นโดย KPOP FANS.เว็บไซต์นี้จะรวบรวมข่าวหรือกิจกรรมประจำเดือนต่างๆของศิลปินKPOP
  รวมไปถึงข้อมูลหรือช่องทางการติดต่อของแฟนคลับเพื่อความบันเทิง
  เป็นเว็บไซต์ที่จัดจั้นขึ้นมาเพื่อประกอบการศึกษา เป็นเพียงการจำลองเว็บไซต์เท่านั้น
  เว็บไซต์นี้เป็นส่วนหนี่งของวิชา PROJECT 1-2 ประจะปีการศึกษา 2564
  For more information to contact us at KMAofficial.com@gmail.com</p>
  <p>Kanrawee R. and Parawee R.</p>
  
   </div>
  
  

  return (
    
    <div style={{ padding: '12px'}}>
      <Row justify="center">
      <Col><Card  
        hoverable
        style={{ width: 700, hight: 1000, borderRadius: '10px',backgroundColor: '#872642',color:'white' ,fontWeight:'bold'}}
        bodyStyle={{padding: '100px 100px', textAlign: 'flex'}}
        
      >{titleName2}
      </Card></Col>
     
      
    </Row> 
      
      
    </div>

    
  )
}
