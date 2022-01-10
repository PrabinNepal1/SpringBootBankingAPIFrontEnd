import React from "react";
import {Form, Button, Modal, FloatingLabel} from 'react-bootstrap';

export default function WithdrawModal(props) {

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
                        label="Withdraw Amount"
                        className="mb-3">
                            <Form.Control
                                type="number"
                                min="1"
                                placeholder="Withdraw Amount"
                                name="withdraw"
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