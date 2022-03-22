import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Card, Modal, Form, Input, Button, Row, Col, Space,
} from 'antd';
import {
  EditOutlined, DeleteOutlined, PhoneOutlined, UserOutlined, HomeOutlined,
} from '@ant-design/icons';
import * as actions from '../../store/actions/contacts';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const deleteHandler = () => {
    dispatch(actions.deleteContact(contact.id));
  };
  const showEditModal = () => {
    setIsEditModalVisible(true);
  };
  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };
  const handleCancel = () => {
    setIsEditModalVisible(false);
    setIsDeleteModalVisible(false);
  };
  const onFinish = (values) => {
    if (values) {
      const { id } = contact;
      const newPayload = { ...values, id };
      dispatch(actions.editContact(newPayload));
      handleCancel();
    }
  };
  return (
    <>
      <Modal
        onCancel={handleCancel}
        visible={isEditModalVisible}
        footer={[]}
      >
        <h2>Edit contact</h2>
        <br />
        <div>
          <Form
            onFinish={onFinish}
            initialValues={{
              name: contact.name,
              phone: contact.phone,
              contactData: contact.contactData,
            }}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Введите имя!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={contact.name} />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Введите номер телефона!',
                },
              ]}
            >
              <Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder={contact.phone} />
            </Form.Item>
            <Form.Item
              name="contactData"
            >
              <Input prefix={<HomeOutlined className="site-form-item-icon" />} placeholder={contact.contactData} />
            </Form.Item>
            <Form.Item>
              <Row justify="center">
                <Space direction="horizontal" size={120}>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Save changes
                  </Button>
                  <Button type="default" onClick={handleCancel} className="login-form-button">
                    Cancel
                  </Button>
                </Space>
              </Row>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <Modal
        onCancel={handleCancel}
        visible={isDeleteModalVisible}
        footer={[]}
      >
        <h2>Delete contact</h2>
        <br />
        <div>
          Are you sure you want to delete this contact?
        </div>
        <br />
        <Row justify="center">
          <Card
            title={contact.name}
            style={{ width: 300, textAlign: 'center' }}
            headStyle={{ backgroundColor: '#1890ff', border: 0, color: '#ffffff' }}
            bodyStyle={{ backgroundColor: '#40a9ff', border: 0, color: '#ffffff' }}
          >
            <p>
              <PhoneOutlined />
              {' '}
              {contact.phone}
            </p>
            <p>
              <HomeOutlined />
              {' '}
              {contact.contactData}
            </p>
          </Card>
        </Row>
        <br />
        <Row justify="center">
          <Space direction="horizontal" align="center" size={145}>
            <Button type="primary" onClick={deleteHandler} className="login-form-button">
              Confirm
            </Button>
            <Button type="default" onClick={handleCancel} className="login-form-button">
              Cancel
            </Button>
          </Space>
        </Row>
      </Modal>
      <Card
        title={contact.name}
        style={{ width: 300 }}
        headStyle={{ backgroundColor: '#1890ff', border: 0, color: '#ffffff' }}
        bodyStyle={{ backgroundColor: '#40a9ff', border: 0, color: '#ffffff' }}
        actions={[
          <Button type="primary" key="edit" onClick={() => showEditModal()}>
            <EditOutlined />
            Edit
          </Button>,
          <Button type="primary" key="delete" onClick={() => showDeleteModal()}>
            <DeleteOutlined />
            Delete
          </Button>,
        ]}
      >
        <p>
          <PhoneOutlined />
          {' '}
          {contact.phone}
        </p>
        <p>
          <HomeOutlined />
          {' '}
          {contact.contactData}
        </p>
      </Card>
      <br />
    </>
  );
}
