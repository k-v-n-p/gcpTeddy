import React from 'react';


const Cloud = () => {
    return(
        <React.Fragment>
      <div style="margin-left: 5%; margin:10%;">
      <div class="row">
        <div class="column1">
          <div class="container" >
            <form style="" id="form" >
              
              <h3 style=" color: black; padding-bottom: 10px;">Select DAG File:</h3>
              <div style="display: table ">
                <div style="display:table-cell; width: 80%; padding-right: 10px;">
              <select class="form-select" id="value" >
                <option value="composer_trigger_response_dag">sample</option>
                <option value="downloadFileToBucketDAG">l2b</option>
              </select>  </div>
              <div style="display:table-cell; padding-left: 20px; width:10%">
              <button  class="btn btn-danger" type="button" id="submit-button" onclick="showProgress()">
                Submit
              </button>
              
              </div>
            </div>
            </form>
            
          </div>
        </div>
        <div class="column2">
          <div class="container" >
          <div id="progress" style='display:none'>
              <h6>Please wait...</h6>
              <div class="loader" style="float:left; width:60%">
                <div class="loaderBar"></div>
              </div>
              <h6 id="status-heading" style="display: none;">Status: </h6>
              <span id="statusArea" style="display: inline;">
            </span>
            </div>
        </div>
      </div>
    </div>
    </div>
    </React.Fragment>
    )
}


export default Cloud;