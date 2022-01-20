import React, {useState} from "react";
import {Form, Button, Modal, FloatingLabel} from 'react-bootstrap'

import { useAuth } from "../Services/UserService";

export default function DepositModal(props) {

const currentUser = sessionStorage.getItem("User");
const [message, setMessage] = useState();
const [amount, setAmount] = useState();
const {depositAmount} = useAuth()


const handleSubmit = (e) =>{
  e.preventDefault()
      depositAmount(currentUser, amount).then((res) => {
       console.log("Complete")
      setMessage("Deposit Successful")
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
            Deposit Amount
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Enter the amount to deposit:</h4>
          {message && <div className="alert alert-success" role="alert">{message}</div>}	
          <Form className="mx-3" onSubmit={handleSubmit}>
                    <Form.Group>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Deposit Amount"
                        className="mb-3">
                            <Form.Control
                                type="number"
                                min="1"
                                placeholder="Deposit Amount"
                                name="amount"
                                onChange = {(e) => setAmount(e.target.value)}
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