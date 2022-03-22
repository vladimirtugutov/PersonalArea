import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Modal, Form, Input, Button,
} from 'antd';
import {
  PhoneOutlined, UserOutlined, HomeOutlined, UserAddOutlined, PlusOutlined,
} from '@ant-design/icons';
import * as actions from '../../store/actions/contacts';
import './NewContactForm.css';

export default function NewContactForm() {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    if (values) {
      dispatch(actions.addContact(values));
      handleCancel();
    }
  };
  return (
    <>
      <Modal
        onCancel={handleCancel}
        visible={isModalVisible}
        destroyOnClose
        footer={[]}
      >
        <h2>Add new contact</h2>
        <br />
        <div>
          <Form
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter name!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Please enter phone number!',
                },
              ]}
            >
              <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Phone number" />
            </Form.Item>
            <Form.Item
              name="contactData"
            >
              <Input prefix={<HomeOutlined className="site-form-item-icon" />} placeholder="Info" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Add contact
              </Button>
              {' '}
              <Button type="default" onClick={handleCancel} className="login-form-button">
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <div className="containerNewContactForm">
        <Button type="primary" block onClick={() => showModal()}>
          <PlusOutlined />
          <UserAddOutlined />
          New contact
        </Button>
      </div>
    </>
  );
}
