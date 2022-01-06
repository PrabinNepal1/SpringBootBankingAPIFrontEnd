import React from 'react';

export default function Login() {
    return(
        <section className="vh-100" style={{backgroundcolor: "#eee"}}>
            <div className="container">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black mt-5" style={{borderradius: "25px"}}>
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
        
                        <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">Log In</p>
                        
                        <form className="mx-1 mx-md-2" method="POST" action="./LoginServlet">
                        <div className="d-flex flex-row align-items-center mb-2">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <label className="form-label" HtmlFor="form3Example1c">User Name</label>
        
                            <input type="text" id="form3Example1c" name="userName" className="form-control" />
                            <span className="text-danger"></span>
                            
                            </div>
                        </div>
        
                        <div className="d-flex flex-row align-items-center mb-2">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <label className="form-label" HtmlFor="form3Example3c">Password</label>
                            <input type="password" id="form3Example3c" name="passwordl" className="form-control" />
                            
                            </div>
                        </div>
                        
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-2">
                            <button type="submit" className="btn btn-primary btn-lg">Login</button>
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
    );
}