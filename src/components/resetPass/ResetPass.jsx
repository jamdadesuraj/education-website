import React, { useState } from "react";
import "./resetPass.css";
import { Link } from "react-router-dom";
import InputController from "../inputs/InputController";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

const ResetPass = () => {
  const [values, setValues] = useState({
    email: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const resetSubmission = () => {
    if (!values.email) {
      setErrMsg("Please valid email");
      return;
    }
    setErrMsg("");
    sendPasswordResetEmail(auth, values.email)
      .then((res) => {
        console.log(res);
        alert("please check your email");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(values);
  };

  return (
    <>
      <section className="signup-section">
        <div class="container mt-5 mb-5 d-flex justify-content-center align-items-center">
          <div class="signup-card p-3 text-center py-4">
            <div>
              <img
                src="https://i.imgur.com/dkWaSol.png"
                width="70"
                alt="logn-img"
              />
            </div>

            <div class="px-sm-4 mt-3 px-3">
              <InputController
                lable="Email"
                placeholder="enter your email"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
              />
            </div>

            <div class="px-5 mt-4">
              <p>{errMsg}</p>

              <button
                class="btn btn-secondary w-100 text-uppercase"
                onClick={resetSubmission}
              >
                Send
              </button>
            </div>

            <div class="px-5">
              <span class="terms">
                By creating an account, you agree and accept our
                <Link to="#" class="text-decoration-none">
                  Already Have An Account
                </Link>
                please
                <Link to="/login" class="text-decoration-none">
                  Login
                </Link>
                .
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPass;
