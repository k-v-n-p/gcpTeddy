import React,{useState, useEffect} from "react";
import "./index.css";
import "../bootstrap/bootstrap.min.css";
import "./loadingbar.css";
const Cloud = () => {
  const [value, setValue] = useState("");
  const [check,setCheck] = useState(true);
    const showProgress = () => {
      console.log("showing progress...");
      document.getElementById("progress").style.display = "block";
      document.getElementById("value").disabled = true;
      document.getElementById("submit-button").innerText = "Check Status";
      //document.getElementById("submit-button").setAttribute( "onClick", getProgress );
      getProgress();
      setCheck(false)
    }

    const handleChange = (e) => {
      setValue(e.target.value);
      localStorage.setItem("inputValue", e.target.value);
      console.log(localStorage.getItem("inputValue"));
    };

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
      //document.getElementById("submit-button").setAttribute( "onClick", showProgress );
      //document.getElementById("statusArea").innerHTML += JSON.stringify(data.status);
    }

    function getTime(){
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds(); 
      return [ h, m, s ].join(':')
    }

    const changeToIdle = async (fun) => {
      const resetUrl = 'https://us-central1-healthcarepci.cloudfunctions.net/refresh?message='+value;
      console.log("In changing to idle:")
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors"
      }
      const response=await fetch(resetUrl,options)
      .then(response => console.log(response))
      .catch((err) => console.log(err));
      setCheck(false)
  }

    const checkStatus = () => {
      console.log("inside check status");console.log("Check: ", check);
      
      const userActionq = async (fun) => {
        const StatusUrl = 'https://us-east1-healthcarepci.cloudfunctions.net/StatusCheck?message='+value;
        console.log("value: " + value)
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors"
        }
        const response=await fetch(StatusUrl,options)
        .then(response => response.json())
        .then(json => fun(json))
        .catch((err) => console.log(err));
    }

      const addStatusq =  (data)=> {
        console.log("data: " + JSON.stringify(data));
        if(JSON.stringify(data.status)=="\"initial\"")
          document.getElementById("statusArea").innerHTML = "Task successfully added to queue";
        else if (JSON.stringify(data.status) == "\"completed\""){ 
          alert("Task Completed successfully")
          changeToIdle();
          hudson(data);
        }
        else if (JSON.stringify(data.status) == "\"running\""){ 
          document.getElementById("statusArea").innerHTML = JSON.stringify(data);
          document.getElementById("status-heading").style.display = "inline";
        }
      }

      userActionq(addStatusq);
    }
    const getProgress = () => {
      
      console.log("inside get progress");console.log("Check: ", check);
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


      const addStatus =  (data)=> {
        console.log("data: " + JSON.stringify(data));
        if(JSON.stringify(data.status)=="\"initial\"")
          document.getElementById("statusArea").innerHTML = "Task successfully added to queue";
        else if (JSON.stringify(data.status) == "\"completed\""){ 
          alert("Task Completed successfully")
          changeToIdle();
          hudson(data);
        }
        else if (JSON.stringify(data.status) == "\"running\""){ 
          alert("Task Already running")
          document.getElementById("statusArea").innerHTML = JSON.stringify(data);
          document.getElementById("status-heading").style.display = "inline";
        }
          // document.getElementById("statusArea").innerHTML = JSON.stringify(data);
          // document.getElementById("status-heading").style.display = "inline";
          // if(JSON.stringify(data.status)=="\"completed\""){
          //     //hudson(data);
          // }
      }
      userAction(addStatus);
    }

    useEffect(() => {
      setValue(localStorage.getItem("inputValue"));
      console.log("Check: ", check);
      console.log("local: ", localStorage.getItem("inputValue"));
      if(localStorage.getItem("inputValue") === "" || !localStorage.getItem("inputValue")){
        console.log("fresh session")
      }
      else{
        console.log("continue session")
        showProgress()
      }
        
    }, []);

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
                    <select className="form-select" id="value" value={value || ''} onChange={handleChange}>
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
                      onClick={true ? showProgress : checkStatus}
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
