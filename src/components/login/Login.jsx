import React, { useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import InputController from "../inputs/InputController";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const history = useHistory();
  const [val, setVal] = useState({
    email: "",
    pass: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const handler = () => {
    if (!val.email || !val.pass) {
      setErrMsg("please fill the data");
      return;
    }
    setErrMsg("");

    signInWithEmailAndPassword(auth, val.email, val.pass)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(val);
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
                class="form-control mt-3"
                placeholder="Email address"
                onChange={(event) =>
                  setVal((prev) => ({ ...prev, email: event.target.value }))
                }
              />
              <InputController
                class="form-control mt-3"
                placeholder="Password"
                onChange={(event) =>
                  setVal((prev) => ({ ...prev, pass: event.target.value }))
                }
              />
            </div>

            <div class="px-5 mt-4">
              <p>{errMsg}</p>
              <Link to="/login">
                <button
                  class="btn btn-secondary w-100 text-uppercase"
                  onClick={handler}
                >
                  Login
                </button>
              </Link>
            </div>

            <div class="px-5">
              <span class="terms">
                By creating an account, you agree and accept our
                <Link to="/reset-pass" class="text-decoration-none">
                  Reset Password
                </Link>
                please
                <Link to="/signup" class="text-decoration-none">
                  Sign-Up
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

export default Login;
