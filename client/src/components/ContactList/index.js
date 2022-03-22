import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import ContactItem from '../ContactItem';
import NewContactForm from '../NewContactForm';
import SearchContactForm from '../SearchContactForm';
import * as actions from '../../store/actions/contacts';
import './ContactList.css';

const ContactSelector = (state) => state.contactSlice;

export default function ContactList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSlice = useSelector((store) => store.userSlice);
  const { data: contacts } = useSelector(ContactSelector);
  const isAuth = userSlice.user?.username;

  useEffect(() => {
    dispatch(actions.initContacts());
  }, [dispatch]);

  if (isAuth) {
    return (
      <>
        <h1 className="header">Contact List</h1>
        <div className="containerContactList">
          <SearchContactForm />
        </div>
        <div className="containerContactList">
          <NewContactForm />
        </div>
        <br />
        <div className="containerContacts">
          <Row justify="center" gutter={[16, 24]}>
            {contacts.map((contact) => (
              <Col span={6} offset={2} key={String(contact.id)}>
                <ContactItem
                  contact={contact}
                />
              </Col>
            ))}
          </Row>
        </div>

      </>
    );
  }

  return (
    <>
      <h1 className="containerContactList">Login required!</h1>
      <h1 className="containerContactList">The page with the list of contacts is available only after authorization.</h1>
      <Row justify="center">
        <Button type="primary" onClick={() => navigate('/signin')}>Login</Button>
      </Row>
    </>
  );
}
