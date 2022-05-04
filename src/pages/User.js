import { useEffect, useState } from 'react';
import UserService from '../services/UserService';

export default function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    UserService.getAll()
      .then(response => {
        setUsers(response.data);
        console.log('hello');
      })
      .catch(e => {
        console.log(e);
      });
  },[]);
  return (
    <>
      {users.map(user => <div key={user.id}>{user.name}</div>)}
    </>
  );
}
