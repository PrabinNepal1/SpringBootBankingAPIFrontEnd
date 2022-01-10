import React from "react";
import {Form, Button, Modal, FloatingLabel} from 'react-bootstrap'

export default function DepositModal(props) {
    return(
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Deposit Amount
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Enter the amount to deposit:</h4>
          <Form className="mx-3">
                    <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Deposit Amount"
                        className="mb-3">
                            <Form.Control
                                type="number"
                                min="1"
                                placeholder="Deposit Amount"
                                name="deposit"
                                required
                                >
                             </Form.Control>
                    </FloatingLabel>
                    </Form.Group>
                    <Button variant="primary" type="submit">Deposit</Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}