import React, { useState } from 'react';
import { Image } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/InputForm/InputForm";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
 import imageLogo from "../../assets/images/logo.jpg";

const signup = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleOnchangeUserName = (value) => {
    setUserName(value);
  };
  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };
  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };
  const navigate = useNavigate();
  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };
  const h1Style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Helvetica",
  };
  const hrStyle = {
    display: "flex",
    alignItems: "center",
    color: "gray",
    margin: "20px 0",
  };

  const hrTextStyle = {
    margin: "0 20px",
    fontSize: "14px",
  };

  const hrLine = {
    flexGrow: 1,
    border: "none",
    borderTop: "1px solid gray",
  };

  return (
    <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,0.53)",
      height: "100vh",
    }}
  >
    <div
      style={{
        width: "800px",
        height: "480px",
        borderRadius: "6px",
        backgroundColor: "#fff",
        display: "flex",
      }}
    >
      <WrapperContainerLeft>
        <div style={h1Style}>
          <h1>SIGN-UP</h1>
        </div>

        <InputForm
          style={{ marginBottom: "10px" }}
          placeholder="UserName"
          value={userName}
          onChange={handleOnchangeUserName}
        />

        <InputForm
          style={{ marginBottom: "10px" }}
          placeholder="Email"
          value={email}
          onChange={handleOnchangeEmail}
        />

        <div style={{ position: "relative" }}>
          <span
            onClick={() => {
              setIsShowPassword(!isShowPassword);
            }}
            style={{
              zIndex: 10,
              position: "absolute",
              top: "4px",
              right: "8px",
            }}
          >
            {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
          </span>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="Password"
            type={isShowPassword ? "text" : "password"}
            value={password}
            onChange={handleOnchangePassword}
          />
        </div>

        <div style={{ position: "relative" }}>
          <span
            onClick={() => {
              setIsShowConfirmPassword(!isShowConfirmPassword);
            }}
            style={{
              zIndex: 10,
              position: "absolute",
              top: "4px",
              right: "8px",
            }}
          >
            {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
          </span>
          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="Confirm Password"
            type={isShowConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={handleOnchangeConfirmPassword}
          />
        </div>
       
        <ButtonComponent
          disabled={
            !email.length || !password.length || !confirmPassword.length
          }
          // onClick={handleSignup}
          size={40}
          styleButton={{
            backgroundColor: "#FFA500",
            height: "40px",
            width: "100%",
            border: "none",
            borderRadius: "4px",
            margin: "26px 0 10px",
          }}
          textButton={"SIGN UP"}
          styleTextButton={{
            color: "#333",
            fontSize: "15px",
            fontWeight: "700",
          }}
        ></ButtonComponent>
        <div style={hrStyle}>
          <hr style={hrLine} />
          <span style={hrTextStyle}>Or Sign-Up with</span>
          <hr style={hrLine} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            padding: "10px",
          }}
        >
          <button
            className="border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-white align-items:center"
            style={{
              backgroundColor: "	#FFF",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC108"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <span style={{ fontFamily: "Arial", fontWeight: "bold" }}>
              SignUp with Google
            </span>
          </button>

          <button
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 "
            style={{
              backgroundColor: "#00008B",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#3b5998"
                d="M44,24c0,11.046-8.954,20-20,20S4,35.046,4,24S12.954,4,24,4S44,12.954,44,24z"
              />
              <path
                fill="#fff"
                d="M29,24h-3v8h-4v-8h-2v-4h2v-3c0-1.657,1.343-3,3-3h3v4h-3v1h3V24z"
              />
            </svg>
            <span
              style={{
                color: "white",
                fontFamily: "Arial",
                fontWeight: "bold",
              }}
            >
              SignUp with Facebook
            </span>
          </button>
        </div>
        <p>
          <WrapperTextLight
            onClick={handleNavigateSignIn}
            style={{ cursor: "pointer" }}
          >
            {" "}
            You have account ? Sign In
          </WrapperTextLight>
        </p>
      </WrapperContainerLeft>
      <WrapperContainerRight>
        <Image
          src={imageLogo}
          preview={false}
          alt="image-logo"
          height="203px"
          width="203px"
        />
        <h2>Buy in HALD Restaurant</h2>
      </WrapperContainerRight>
    </div>
  </div>
  )
}

export default signup