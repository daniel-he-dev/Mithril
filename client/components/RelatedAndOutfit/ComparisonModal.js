import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { ProductContext } from '../../context/ProductContext';

export const ComparisonModal = (props) => {
  const [show, setShow] = useState(props);
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Choices, choices....</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table>
          <tr>
            <th>{features[0]}</th>
            <th>{features[1]}</th>
          </tr>
        </table>
      </Modal.Body>
    </Modal>
  );
};

export default ComparisonModal;
