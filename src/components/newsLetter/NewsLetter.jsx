import React from "react";
import "./newsLetter.css";
const NewsLetter = () => {
  return (
    <>
      <section className="newsLetter-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 newsLetter-data">
              <h2>Newsletter - Stay tune and get the latest update</h2>
              <p>Far far away, behind the word mountains</p>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div class="newsletter-container d-flex justify-content-center">
                <div class="input-group col-sm-7  input-group-lg">
                  <div class="input-group-prepend">
                    <span class="input-group-text google">
                      <img
                        src="https://img.icons8.com/color/48/000000/google-logo.png"
                        alt="google-logo"
                      />
                    </span>
                  </div>
                  <input type="text" class="form-control" />
                  <div class="input-group-append">
                    <span class="input-group-text microphone">
                      <img
                        src="https://img.icons8.com/nolan/48/000000/microphone.png"
                        alt="voice-logo"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
