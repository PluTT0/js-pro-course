import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ModalWindow from './ModalWindow';

const Users = ({user}) => {
  const userName = user.map((userInfo) => (userInfo.name));
  const [show, setShow] = useState(false);
  const windowClose = () => setShow(false);
  const windowShow = () => setShow(true);

  return (
    <>
      <Card.Link onClick={windowShow} href="#">
        {userName}
      </Card.Link>
      {user.map((userInfo) =><ModalWindow 
        key={userInfo.id} 
        show={show} 
        close={windowClose} 
        address={userInfo.address} 
        name={userInfo.name} 
        email={userInfo.email} 
        phone={userInfo.phone}
      />)}
    </>
  );
};

export default Users;
