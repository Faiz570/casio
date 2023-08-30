import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  window.scrollTo(0, 0);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    dob: "",
    password: "",
    cpassword: "",
    gender: "",
    country: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.password === formData.cpassword) {
      console.log("Password Matched");
    } else {
      console.log("Password does not match");
    }
    setFormData({
      fname: "",
      lname: "",
      email: "",
      dob: "",
      password: "",
      cpassword: "",
      gender: "",
      country: "",
    });
  };

  const { fname, lname, email, dob, password, cpassword, gender, country } = formData;

  return (
    <div className="container mt-1 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4"><b>User Signup</b></h1>
          <form onSubmit={onSubmit} className="signup-form">
            <div className="mb-3">
              <label htmlFor="fname" className="form-label"><b>First Name:</b></label>
              <input type="text" className="form-control" id="fname" name="fname" value={fname} onChange={onChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="lname" className="form-label"><b>Last Name:</b></label>
              <input type="text" className="form-control" id="lname" name="lname" value={lname} onChange={onChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label"><b>Email:</b></label>
              <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label"><b>Password:</b></label>
              <input type="password" className="form-control" id="password" name="password" value={password} onChange={onChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label"><b>Confirm Password:</b></label>
              <input type="password" className="form-control" id="cpassword" name="cpassword" value={cpassword} onChange={onChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label"><b>Date of Birth:</b></label>
              <input type="date" className="form-control" id="dob" name="dob" value={dob} onChange={onChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label"><b>Gender:</b></label>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="male" name="gender" value="Male" onChange={onChange} required />
                <label htmlFor="male" className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="female" name="gender" value="female" onChange={onChange} required />
                <label htmlFor="female" className="form-check-label">Female</label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label"><b>Country:</b></label>
              <select className="form-select" name="country" onChange={onChange}>
                <option>Choose your country:</option>
                <option value="Pakistan">Pakistan</option>
                <option value="England">England</option>
                <option value="UAE">UAE</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-danger mb-5"><b>Submit</b></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
