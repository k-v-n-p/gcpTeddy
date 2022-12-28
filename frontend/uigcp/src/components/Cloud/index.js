import React from "react";
import "./index.css";
import "../bootstrap/bootstrap.min.css";
import {showProgress} from "./progress";
const Cloud = () => {
  return (
    <React.Fragment>
      <div id="whole">
        <div className="row">
          <div className="column1">
            <div className="container">
              <form id="form">
                <h3 id="h3id">Select DAG File:</h3>
                <div id="tot">
                  <div id="dropd">
                    <select className="form-select" id="value">
                      <option value="centene_pipe">Centene</option>
                      <option value="Cigna">Cigna</option>
                      <option value="uhc_pipe">UHC</option>
                      <option value="humana_pipe">Humana</option>
                      <option value="Anthem">Anthem</option>
                      <option value="composer_trigger_response_dag">
                        sample
                      </option>
                      <option value="downloadFileToBucketDAG">l2b</option>
                    </select>{" "}
                  </div>
                  <div id="procbtn">
                    <button
                      className="btn btn-danger"
                      type="button"
                      id="submit-button"
                      onClick={showProgress}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="column2">
            <div className="container">
              <div id="progress">
                <h6>Please wait...</h6>
                <div className="loader" id="loadbarid">
                  <div className="loaderBar"></div>
                </div>
                <h6 id="status-heading">Status: </h6>
                <span id="statusArea"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cloud;
