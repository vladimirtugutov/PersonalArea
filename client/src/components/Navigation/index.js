import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Space, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUserStart } from '../../store/actions/user';

export default function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSlice = useSelector((store) => store.userSlice);
  const isAuth = userSlice.user?.username;

  function logout() {
    try {
      dispatch(logoutUserStart());
      navigate('/');
    } catch (error) {
      navigate('/error');
    }
  }

  return (
    <>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
          paddingTop: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Space direction="horizontal" align="center" size="large">
          {isAuth ? (
            <Row>
              <Button className="title-fint-adler" type="link">
                Hello,
                {' '}
                {isAuth}
              </Button>
              <Button className="title-fint-adler" type="link" onClick={() => logout()}>
                Logout
              </Button>
            </Row>
          )
            : (
              <Button className="title-fint-adler" type="link" onClick={() => navigate('/signin')}>
                Login
              </Button>
            )}
        </Space>
      </nav>
      <Outlet />
    </>
  );
}
