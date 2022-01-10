import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import DepositModal from "./DepositModal";
import WithdrawModal from "./WithdrawModal";
import TransferModal from "./TransferModal";

export default function UserPage(){
    
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState("Dummy");
    const navigate = useNavigate()
    
    const [depositModalShow, setDepositModalShow] = useState(false);
    const [withdrawModalShow, setWithdrawModalShow] = useState(false);
    const [transferModalShow, setTransferModalShow] = useState(false);

    function handleLogout(){
        console.log("LogOut Sucess")
    }


    return(
        <div className="container-lg d -flex align-items-center mt-5 mb-5">
        <div className="row">
            <div class="col">
            {/* {loading && <p>loading...</p>} */}
        {user &&
          <><div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title"> Profile : {user.username}</h5>
                    <h5 className="card-title">  Email: {user.email} </h5>
                    {/* { user.checkingAccount &&
                            <Card.Title>Account Type: Checking </Card.Title>
                    }

                    { user.savingAccount &&
                            <Card.Title> Account Type: Saving </Card.Title>
                    } */}
                    <h5 className="card-title">Account Balance: ${user.balance} </h5>
                    <h5 className="card-title mt-5"> Choose Transactions Option</h5>
                    
                    <div className="mb-2">
                        <div className="btn btn-primary" onClick={() => setDepositModalShow(true)}>Deposit</div>
                        
                        <DepositModal  show={depositModalShow}
                                        onHide={() => setDepositModalShow(false)}/>
                    </div>
                    
                    <div className="mb-2">
                        <div className="btn btn-primary" onClick={() => setWithdrawModalShow(true)}>Withdraw</div>
                        
                        <WithdrawModal  show={withdrawModalShow}
                                        onHide={() => setWithdrawModalShow(false)}/>
                    </div>
                    
                    <div className="mb-2">
                        <div className="btn btn-primary" onClick={() => setTransferModalShow(true)}>Transfer</div>
                    
                        <TransferModal show={transferModalShow}
                                        onHide={() => setTransferModalShow(false)}/>
                    </div>
                    
                    <div className="btn btn-danger" onClick={handleLogout}>LogOut</div>
                    
                    </div>
                </div>
                    </>
          }
           </div>
        
        
            <div className="col">
                <div className="card w-100">
                        <div className="card-body">
                            <h5 className="card-title"> Recent Transactoions </h5>
                        </div>
                
                </div>   
            </div>
        </div>
        
    </div>
        
    );
}