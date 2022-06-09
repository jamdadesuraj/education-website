import React from "react";

const ResetPass = () => {
  return (
    <>
      <section className="signup-section">
        <div class="container mt-5 mb-5 d-flex justify-content-center align-items-center">
          <div class="card p-3 text-center py-4">
            <div>
              <img
                src="https://i.imgur.com/dkWaSol.png"
                width="70"
                alt="signup-img"
              />
            </div>

            <div class="px-sm-4 mt-3 px-3">
              <input class="form-control mt-3" placeholder="Email address" />
            </div>

            <div class="px-5 mt-4">
              <button class="btn btn-secondary w-100 text-uppercase">
                Send
              </button>
            </div>

            <div class="px-5">
              <span class="terms">
                By creating an account, you agree and accept our{" "}
                <a href="/login" class="text-decoration-none">
                  Login
                </a>
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
