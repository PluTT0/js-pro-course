import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ModalWindow.scss';

const ModalWindow = ({show, close, address, name, email, phone}) => {
  return (
    <>
      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Address: {address.city}, {address.street}, {address.suite}</p>
          <p>Email: <a href={`mailto: ${email}`}>{email}</a></p>
          <p>tel: <a href={`tel: ${phone}`}>{phone}</a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalWindow;