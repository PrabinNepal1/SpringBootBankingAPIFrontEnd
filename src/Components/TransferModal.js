import React from "react";
import {Form, Button, Modal, FloatingLabel} from 'react-bootstrap';

export default function TransferModal(props){
        return(
            <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Withdraw Amount
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Enter the amount to withdraw:</h4>
          <Form className="mx-3">
                    <Form.Group>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Receiver's User ID"
                            className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Receiver's User ID"
                                    name="reciverUserID"
                                    required
                                    >
                                </Form.Control>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Transfer Amount"
                            className="mb-3">
                                <Form.Control
                                    type="number"
                                    min="1"
                                    placeholder="Transfer Amount"
                                    name="transfer"
                                    required
                                    >
                                </Form.Control>
                        </FloatingLabel>
                    </Form.Group>
                    <Button variant="primary" type="submit">Withdraw</Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
        );
    }