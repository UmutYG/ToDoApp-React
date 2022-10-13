import React, { Component } from 'react'

const LogInControl =  () => {
    return (
      <>
            <div id="alert" className="container alert alert-primary d-flex justify-content-center mt-3" style={{width:300}} role="alert">
            Have an account? Log In.
            </div> 
            <div className="container d-flex justify-content-center" style={{width:300}}>
            <form id="form">
              <div className="text-danger"></div>
                <div className="d-flex align-items-center justify-content-center"><a href='#' className="">Confirm</a></div>
                  <div className="mb-3" style={{width:300}}>
                    <label className="form-label">Username</label>
                    <input data-val="true" data-val-required="Please Fill The Username" name="UserName" className="form-control"/>
                  </div>
                  <div className="mb-3" style={{width:300}}>
                    <label className="form-label">Password</label>
                    <input data-val="true" data-val-required="Please Provide a Password" name="password" className="form-control"/>
                  </div>
                  <div className="mb-3 form-check">
                    <input  type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" >Check me out</label>
                  </div>
                  <button id="control" type="submit" className="btn btn-primary">Login</button>
                  <span>Or <a href="#" id="register">Register</a></span>
                  <div>
                <a  href="#" id="donate">Donate and Support Me!</a>
                </div>
            </form>
      </div>
        </>       
    )
  
}
