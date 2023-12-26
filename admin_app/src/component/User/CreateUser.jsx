import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import queryString from "query-string";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";

import userApi from "../Api/userAPI";
import permissionAPI from "../Api/permissionAPI";

function CreateUser(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("admin");

  const [validationMsg, setValidationMsg] = useState("");
  const { handleSubmit } = useForm();

  const validateAll = () => {
    const phongeRegex = /^0(?=.+[0-9]).{9}$/;
    const nameRegex = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    const msg = {};

    if (isEmpty(name)) {
      msg.name = "Name is empty";
    } else if (nameRegex.test(name.trim()) === false) {
      msg.name = "Wrong name format (At least 3 alphabets)";
    }

    if (isEmpty(email)) {
      msg.email = "Email is empty";
    } else if (!isEmail(email)) {
      msg.email = "Wrong email format";
    }

    if (isEmpty(password)) {
      msg.password = "Password is empty";
    }

    if (isEmpty(phone)) {
      msg.phone = "Phone is empty";
    } else if (!phongeRegex.test(phone)) {
      msg.username = "Wrong phone format";
    }

    if (isEmpty(address)) {
      msg.address = "Address is empty";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const handleCreate = () => {
    const isValid = validateAll();
    if (!isValid) return addUser();
  };

  const addUser = async () => {
    const user = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      address: address,
      role: role,
    };
    // const query = '?' + queryString.stringify(user)
    const response = await userApi.create(user);
    if (response.status === "success") {
      window.scrollTo(0, 0);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setAddress("");
    }
    setValidationMsg({ api: response.message });
  };

  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create User</h4>
                {validationMsg.api === "Bạn đã thêm thành công" ? (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    {validationMsg.api}
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                ) : (
                  <p className="form-text text-danger">{validationMsg.api}</p>
                )}

                <form onSubmit={handleSubmit(handleCreate)}>
                  <div className="form-group w-50">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <p className="form-text text-danger">
                      {validationMsg.name}
                    </p>
                  </div>

                  <div className="form-group w-50">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <p className="form-text text-danger">
                      {validationMsg.email}
                    </p>
                  </div>

                  <div className="form-group w-50">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <p className="form-text text-danger">
                      {validationMsg.password}
                    </p>
                  </div>

                  <div className="form-group w-50">
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <p className="form-text text-danger">
                      {validationMsg.phone}
                    </p>
                  </div>

                  <div className="form-group w-50">
                    <label htmlFor="address">Address:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                    <p className="form-text text-danger">
                      {validationMsg.address}
                    </p>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer text-center text-muted">
        All Rights Reserved by Adminmart. Designed and Developed by{" "}
        <a href="https://wrappixel.com">WrapPixel</a>.
      </footer>
    </div>
  );
}

export default CreateUser;
