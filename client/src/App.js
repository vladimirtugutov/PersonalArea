import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactList from './components/ContactList';
import Navigation from './components/Navigation';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';

import * as actionsUser from './store/actions/user';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsUser.checkAuthStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Signin />} />

        <Route path="feed" element={<ContactList />} />

        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
