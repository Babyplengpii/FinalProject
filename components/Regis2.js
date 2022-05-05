import { Form, Input, Button, Checkbox } from 'antd';
import { Card,Typography } from 'antd';
import { Row, Col } from 'antd';
import { FaLock ,FaUserAlt} from 'react-icons/fa';
import { HiMail } from "react-icons/hi";



const RegistrationForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (

    <Col xs={{ span: 20, offset: 1 }} lg={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 5 }}>
      <Card style={{ width: 400, height:400 ,borderRadius: '10px',backgroundColor: '#ffffff',color:'white' , marginLeft:'220px', marginTop:'-30px' }}>
          <p>
          <div style={{fontWeight:'bold',fontSize:'30px' ,marginLeft: '30px' ,textAlign:'center',color:'#000000' ,fontFamily:'Noto Sans' }}>Log In<br></br> 
          </div>
         </p>         
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 14,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div style={{}}>
      <Form.Item 
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      </div>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 14,
        }}
      >
        <Checkbox style={{fontSize: '16px'}}>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 10,
        }}
      >
        <div>
        <Button 
        style={{ backgroundColor:'#872642',borderRadius: '8px',fontSize: '18px',color:'white',textAlign:'center',fontWeight:'bold'}} 
        htmlType="submit">
          Submit
        </Button>
        </div>
      </Form.Item>
    </Form>
    </Card>
    </Col>

  );
};

export default RegistrationForm;