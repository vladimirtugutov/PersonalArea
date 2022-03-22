import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  Form, Input, Button, Row,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as actions from '../../store/actions/user';

const Signin = () => {
  const userSlice = useSelector((store) => store.userSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userSlice.user?.username) {
      navigate('/feed');
    }
  }, [userSlice.user]);

  const onFinish = (values) => {
    if (values) {
      dispatch(actions.authUserStart(values));
    }
  };
  return (
    <div className="Auth">
      <h1 className="containerContactList">User authorization</h1>
      <Row justify="center" align="middle">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter your email!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Login
            </Button>
            {' '}
            or
            <Link to="/signup"> sign up!</Link>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};

export default Signin;
