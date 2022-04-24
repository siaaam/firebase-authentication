import React, { useContext } from 'react';
import { AuthContext } from './context/Auth.context';

const Profile = () => {
  const currentUser = useContext(AuthContext);

  return <pre>{JSON.stringify(currentUser, null, 2)}</pre>;
};

export default Profile;
