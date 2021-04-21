import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ModalWindow from './ModalWindow';

const Users = ({user}) => {
  const [show, setShow] = useState(false);
  const windowClose = () => setShow(false);
  const windowShow = () => setShow(true);

  return (
    <>
      <Card.Link onClick={windowShow} href="#">
        {user.name}
      </Card.Link>
      <ModalWindow 
        key={user.id} 
        show={show} 
        close={windowClose} 
        address={user.address} 
        name={user.name} 
        email={user.email} 
        phone={user.phone}
      />
    </>
  );
};

export default Users;
