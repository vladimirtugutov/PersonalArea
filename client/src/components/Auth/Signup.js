import {
  Form, Input, Button, Row,
} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as actions from '../../store/actions/user';

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const onFinish = (values) => {
    dispatch(actions.regUserStart(values));
    navigate('/');
    form.resetFields();
  };
  return (
    <div className="Signup">
      <h1 className="containerContactList">New User Registration</h1>
      <Row justify="center" align="middle">
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          onReset
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input
              size="large"
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Введите Ваш пароль' }]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" className="login-form-button">
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
}
