import React, {useState} from "react";
import {Form, Button, Modal, FloatingLabel} from 'react-bootstrap';
import { useAuth } from "../Services/UserService";

export default function TransferModal(props){

  const currentUser = sessionStorage.getItem("User");
  const [transfer, setTransfer] = useState({toAcc: '', amount:''});
  const [message, setMessage] = useState();

  const {transferAmount} = useAuth();

  const handleInputChange = e => {
    const { name, value } = e.target

    setTransfer({ ...transfer, [name]:value })
}

const handleSubmit = (e) =>{
  e.preventDefault()
      transferAmount(currentUser, transfer.toAcc, transfer.amount).then((res) => {
       console.log("Complete")
       setMessage("Transfer Successful")
      })
  }

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
          <h4>Enter the amount to transfer:</h4>

          {message && <div className="alert alert-success" role="alert">{message}</div>}

          <Form className="mx-3" onSubmit={handleSubmit}>
                    <Form.Group>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Receiver's User ID"
                            className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Receiver's User ID"
                                    name="toAcc"
                                    onChange={handleInputChange}
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
                                    name="amount"
                                    onChange={handleInputChange}
                                    required
                                    >
                                </Form.Control>
                        </FloatingLabel>
                    </Form.Group>
                    <Button variant="primary" type="submit">Transfer</Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
        );
    }