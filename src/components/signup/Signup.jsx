import React, { useState } from "react";
import "./signup.css";
import { Link, useHistory } from "react-router-dom";
import InputController from "../inputs/InputController";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Signup = () => {
  const history = useHistory();
  const [val, setVal] = useState({
    name: "",
    email: "",
    pass: "",
    cPass: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const handler = () => {
    if (!val.name || !val.email || !val.pass || !val.cPass) {
      setErrMsg("please fill the data");
      return;
    }
    setErrMsg("");
    if (val.pass !== val.cPass) {
      setErrMsg("password Not Match");
      return;
    }
    setErrMsg("");
    createUserWithEmailAndPassword(auth, val.email, val.pass, val.cPass)
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
              <img src="https://i.imgur.com/dkWaSol.png" width="70" />
            </div>

            <div class="px-sm-4 mt-3 px-3">
              <InputController
                class="form-control"
                placeholder="Your name"
                onChange={(event) =>
                  setVal((prev) => ({ ...prev, name: event.target.value }))
                }
              />
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
              <InputController
                class="form-control mt-3"
                placeholder="confirm-Password"
                onChange={(event) =>
                  setVal((prev) => ({ ...prev, cPass: event.target.value }))
                }
              />
            </div>

            <div class="px-5 mt-4">
              <p>{errMsg}</p>
              <Link to="/signup">
                <button
                  class="btn btn-secondary w-100 text-uppercase"
                  onClick={handler}
                >
                  Signup
                </button>
              </Link>
            </div>

            <div class="px-5">
              <span class="terms">
                By creating an account, you agree and accept our{" "}
                <a href="#" class="text-decoration-none">
                  You have Already Account
                </a>{" "}
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

export default Signup;
