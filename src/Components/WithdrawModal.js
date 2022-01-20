import React, {useState} from "react";
import {Form, Button, Modal, FloatingLabel} from 'react-bootstrap'

import { useAuth } from "../Services/UserService";

export default function WithdrawModal(props) {

  const currentUser = sessionStorage.getItem("User");
  const [message, setMessage] = useState();
  const [amount, setAmount] = useState();
  const {withdrawAmount} = useAuth()


const handleSubmit = (e) =>{
  e.preventDefault()
      withdrawAmount(currentUser, amount).then((res) => {
       console.log("Complete")
       setMessage("Withdraw Successful")
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
          <h4>Enter the amount to withdraw:</h4>

          {message && <div className="alert alert-success" role="alert">{message}</div>}

          <Form className="mx-3" onSubmit={handleSubmit}>
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
                                onChange = {(e) => setAmount(e.target.value)}
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