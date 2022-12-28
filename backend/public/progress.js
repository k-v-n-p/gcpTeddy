
const showProgress = () => {
    document.getElementById("progress").style.display = "block";
    document.getElementById("value").disabled = true;
    document.getElementById("submit-button").innerText = "Fetch Status";
    document.getElementById("submit-button").setAttribute( "onClick", "getProgress()" );
}
const hudson = (data) => {
    console.log("hudson fkajdn")
    const status = JSON.stringify(data);
    blurt(
        'Task Successfully completed',
        'Status: ' + status,
        'success'
    );
    document.getElementById("progress").style.display = "none";
    document.getElementById("value").disabled = false;
    document.getElementById("submit-button").innerText = "Submit";
    document.getElementById("submit-button").setAttribute( "onClick", "showProgress()" );

    document.getElementById("statusArea").innerHTML += JSON.stringify(data.status);
}
const getProgress = () => {
    console.log("inside get progress");
    const options = {
        method: 'GET',
        headers: {"Content-Type": "application/json"},
        mode: 'no-cors'
    }
    const Status=null;
    const StatusUrl = 'https://us-east1-healthcarepci.cloudfunctions.net/StatusCheck';
    const userAction = async (fun) => {
        const response=await fetch(StatusUrl)
        .then(response => response.json())
        .then(json => fun(json))
    }
    //if sucessful response reset the button and enable inputs
    const addStatus =  (data)=> {
        document.getElementById("statusArea").innerHTML = JSON.stringify(data);
        document.getElementById("status-heading").style.display = "inline";
        if(JSON.stringify(data.status)=="\"completed\""){
            hudson(data);
        }
    }
    userAction(addStatus);

}



/*
const response = await fetch('https://us-east1-healthcarepci.cloudfunctions.net/StatusCheck',
        {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
            mode: 'no-cors'
        } )
        .then(result => {
            console.log(result);
            return result.json();
        })
        .then(result =>{
            console.log(result);
         })
        .catch(e => console.log(e))
        .finally(() => console.log("done wiht the promise"));
        */