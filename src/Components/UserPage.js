import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import DepositModal from "./DepositModal";
import WithdrawModal from "./WithdrawModal";
import TransferModal from "./TransferModal";

import { useAuth } from "../Services/UserService";

export default function UserPage(){
    
    const {getUserDetails ,getRecentTransaction} = useAuth();
    const [loading, setLoading] = useState(true)
    const currentUser = sessionStorage.getItem("User")

    const [userDetails, setUserDetails]  = useState()
    const [transaction, setTransaction] = useState()
    
    const [depositModalShow, setDepositModalShow] = useState(false);
    const [withdrawModalShow, setWithdrawModalShow] = useState(false);
    const [transferModalShow, setTransferModalShow] = useState(false);

    function handleLogout(){
        console.log("Logout Sucess")
    }

    useEffect(() => {
        console.log(currentUser)
        getUserDetails(currentUser).then((res) => {
            setUserDetails(res.data);
        })

        console.log(userDetails)
        const loadTransaction = async () => {
            const trans = await getRecentTransaction(userDetails.id)
            setTransaction(trans)
        }

        loadTransaction();
        setLoading(false);
    }, [])

  


    return(
        <div className="container-lg d -flex align-items-center mt-5 mb-5">
        <div className="row">
            <div className="col">
        {loading && <p>loading...</p>}
        {userDetails &&
          <><div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title"> Profile : {userDetails.username}</h5>
                    <h5 className="card-title">  Email: {userDetails.email} </h5>
                    <h5 className="card-title">Account Balance: ${userDetails.balance} </h5>
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
                        {
                            transaction && transaction.map(
                            transactions =>
                            <tr key={transactions.id}>
                            <td>{transactions.timestamp}</td>
                            <td>{transactions.type}</td>
                            <td>{transactions.amount}</td>
                            <td>{transactions.description}</td>
                            </tr>
                            )}
                        </div>
                
                </div>   
            </div>
        </div>
        
    </div>
        
    );
}