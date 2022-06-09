import React, { useState } from "react";
import "./contact.css";
import InputController from "../inputs/InputController";
const Contact = () => {
  const [val, setVal] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const handlerSubmission = async (e) => {
    e.preventDefault();
    if (!val.name || !val.email || !val.phone || !val.address) {
      setErrMsg("plz fill the data");
      return;
    }
    setErrMsg("");

    const { name, email, phone, address } = val;
    const res = await fetch(
      "https://education-app-94280-default-rtdb.firebaseio.com/education-app.json",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
        }),
      }
    );
    if (res) {
      setVal({
        name: "",
        email: "",
        phone: " ",
        address: " ",
      });
      alert("data send");
    }

    console.log(val);
  };

  return (
    <>
      <section className="contact-section">
        <div>
          <InputController
            lable="Name"
            placeholder="Your Name"
            onChange={(event) =>
              setVal((prev) => ({ ...prev, name: event.target.value }))
            }
          />

          <InputController
            lable="Email"
            placeholder="Your email"
            onChange={(event) =>
              setVal((prev) => ({ ...prev, email: event.target.value }))
            }
          />

          <InputController
            lable="phone"
            placeholder="Your Phone"
            onChange={(event) =>
              setVal((prev) => ({ ...prev, phone: event.target.value }))
            }
          />
          <InputController
            lable="Address"
            placeholder="Your Address"
            onChange={(event) =>
              setVal((prev) => ({ ...prev, address: event.target.value }))
            }
          />
          <div className="contact-footer">
            <p>{errMsg}</p>
            <button onClick={handlerSubmission}>send</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
