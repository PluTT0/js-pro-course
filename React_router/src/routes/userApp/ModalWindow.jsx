import React, { useCallback } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './ModalWindow.scss';

const ModalWindow = ({show, address, name, email, phone}) => {
  const history = useHistory();

  const onHide = useCallback(() => {
    history.push("/post_app/")
  })
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Address: {address.city}, {address.street}, {address.suite}</p>
          <p>Email: <a href={`mailto: ${email}`}>{email}</a></p>
          <p>tel: <a href={`tel: ${phone}`}>{phone}</a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalWindow;