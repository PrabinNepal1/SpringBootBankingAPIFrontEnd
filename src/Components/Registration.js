import React from 'react';
import { useAuth } from '../Services/UserService';


export default function Registration() {

	const {registerUser} = useAuth();
	const [accountDetails, setAccountDetails] = useState({username: '', password:'', confirmPassword:'', email:'', balance:'', address:''})
    
	const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    

	const handleInputChange = e => {
        const { name, value } = e.target

        setUserData({ ...userData, [name]:value })
    }

	const handleSubmit = (e) =>{
        if(accountDetails.password !== accountDetails.confirmPassword){
            setError("Password doesn't match");
        }
        e.preventDefault()
        setError("")
        registerUser(accountDetails.username, accountDetails.password, accountDetails.email, accountDetails.address, accountDetails.balance).then(() => {
                setMessage("Successfully Created Your Account")
              })
              .catch( error => {
                setError(error.message);
              })
    }
	
	return(
        <div>
            <section className="vh-100" style={{backgroundcolor: "#eee"}}>
	  <div className="container">
	    <div className="row d-flex justify-content-center align-items-center h-100">
	      <div className="col-lg-12 col-xl-11">
	        <div className="card text-black mt-5" style={{borderradius: "25px"}}>
	          <div className="card-body p-md-5">
	            <div className="row justify-content-center">
	              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
	
	                <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">Sign up</p>

					{error && <Alert variant="danger">{error}</Alert>}
                	{message && <Alert variant="success">{message}</Alert>}	

	                <form className="mx-1 mx-md-2" method="POST" onSubmit={handleSubmit}>
	             
	                  <div className="d-flex flex-row align-items-center mb-2">
	                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
	                    <div className="form-outline flex-fill mb-0">
	                      <label className="form-label" htmlFor="form3Example1c">User Name</label>
	 
	                      <input type="text" id="form3Example1c" name="userName" className="form-control"
						 	  onChange = {handleInputChange} 
						  />
	                      <span className="text-danger"></span>
	                      
	                    </div>
	                  </div>
	
	                  <div className="d-flex flex-row align-items-center mb-2">
	                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
	                    <div className="form-outline flex-fill mb-0">
	                    	 <label className="form-label" htmlFor="form3Example3c">Your Email</label>
	                      <input type="email" id="form3Example3c" name="email" className="form-control"
						  			  onChange = {handleInputChange} />
	                     
	                    </div>
	                  </div>

					  <div className="d-flex flex-row align-items-center mb-2">
	                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
	                    <div className="form-outline flex-fill mb-0">
	                      <label className="form-label" htmlFor="form3Example4c">Address</label>
	 
	                      <input type="text" id="form3Example4c" name="address" className="form-control" 
						  		  onChange = {handleInputChange}/>
	                      <span className="text-danger"></span>
	                      
	                    </div>
	                  </div>
	
	                  <div className="d-flex flex-row align-items-center mb-2">
	                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
	                    <div className="form-outline flex-fill mb-0">
	                    	 <label className="form-label" htmlFor="form3Example4c">Password</label>
	                    	 <span className="text-danger"></span>
	                      <input type="password" id="form3Example4c" name="password" className="form-control" 
						   		onChange = {handleInputChange}/>
	                     
	                    </div>
	                  </div>
	
	                  <div className="d-flex flex-row align-items-center mb-2">
	                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
	                    <div className="form-outline flex-fill mb-0">
	                    	 <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
	                    	 
	                    	 <span className="text-danger" name="errorInvalidPassword"></span>
	                      <input type="password" id="form3Example4cd" name="confirmPassword" className="form-control"   
						  		onChange = {handleInputChange}/>
	                     
	                    </div>
	                  </div>
	                  
	                  <div className="d-flex flex-row align-items-center mb-2">
	                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
	                    <div className="form-outline flex-fill mb-0">
	                    	<label className="form-label" htmlFor="Form3Example4cde">Initial Deposit</label>
	                      <input type="number" min="1" id="form3Example4cde" name="initialDeposit" className="form-control" 
						  		  onChange = {handleInputChange} required />
	                      
	                    </div>
	                  </div>
					
	                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-2">
	                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
	                  </div>
	
	                </form>
	
	              </div>
	             
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
</section>
        </div>
);

}