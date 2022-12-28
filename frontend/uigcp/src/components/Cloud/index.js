import React,{useState} from "react";
import "./index.css";
import "../bootstrap/bootstrap.min.css";
const Cloud = () => {
 const [count, setCount] = useState(0);

    const showProgress = () => {
      console.log("showing progress...");
      document.getElementById("progress").style.display = "block";
      document.getElementById("value").disabled = true;
      //document.getElementById("submit-button").innerText = "Fetch Status";
      //document.getElementById("submit-button").setAttribute( "onClick", getProgress );
      getProgress();
    }

    const hudson = (data) => {
      console.log("task finished")
      const status = JSON.stringify(data);
      // blurt(
      //     'Task Successfully completed',
      //     'Status: ' + status,
      //     'success'
      // );
      document.getElementById("progress").style.display = "none";
      document.getElementById("value").disabled = false;
      document.getElementById("submit-button").innerText = "Submit";
      document.getElementById("submit-button").setAttribute( "onClick", showProgress );
      document.getElementById("statusArea").innerHTML += JSON.stringify(data.status);
    }

    const getProgress = () => {
      console.log("inside get progress");
      const value = document.querySelector("#value").value;

      const userAction = async (fun) => {
          const StatusUrl = 'https://us-east1-healthcarepci.cloudfunctions.net/test?message='+value;
          console.log("value: " + value)
          const data = {
            "message": value
          }
          const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "no-cors"
          }
          const response=await fetch(StatusUrl)
          .then(response => response.json())
          .then(json => fun(json))
          .catch((err) => console.log(err));
      }

      const changeToIdle = async (fun) => {
        const StatusUrl = 'https://us-east1-healthcarepci.cloudfunctions.net/refresh?message='+value;
        console.log("In changing to idle:")
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors"
        }
        const response=await fetch(StatusUrl)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch((err) => console.log(err));
    }

      const addStatus =  (data)=> {
        console.log("data: " + JSON.stringify(data));
        if(JSON.stringify(data.status)=="\"initial\"")
          document.getElementById("statusArea").innerHTML = "Task successfully added to queue";
        else if (JSON.stringify(data.status) == "\"Completed\""){ 
          prompt("Task Completed successfully")
          changeToIdle();
        }
        else if (JSON.stringify(data.status) == "\"Running\""){ 
        }
          // document.getElementById("statusArea").innerHTML = JSON.stringify(data);
          // document.getElementById("status-heading").style.display = "inline";
          // if(JSON.stringify(data.status)=="\"completed\""){
          //     //hudson(data);
          // }
      }
      userAction(addStatus);
    }



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
