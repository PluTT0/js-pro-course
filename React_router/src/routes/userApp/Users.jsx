import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, Route } from 'react-router-dom';
import ModalWindow from './ModalWindow';

const Users = ({user}) => {
  const [show, setShow] = useState(false);
  const windowShow = () => setShow(true);

  return (
    <>
      <Card.Link onClick={windowShow} as={Link} to={`/post_app/${user.id}`}>
        {user.name}
      </Card.Link>
      <Route path={`/post_app/${user.id}`}>
        <ModalWindow 
          key={user.id} 
          show={show}
          address={user.address} 
          name={user.name} 
          email={user.email} 
          phone={user.phone}
        />
      </Route>
    </>
  );
};

export default Users;
