const showProgress = () => {
    document.getElementById("progress").style.display = "block";
    document.getElementById("value").disabled = true;
    document.getElementById("submit-button").innerText = "Fetch Status";
    document.getElementById("submit-button").setAttribute( "onClick", "getProgress()" );
}

const getProgress = () => {
    console.log("inside get progress");
    const options = {
        method: 'GET',
        headers: {"Content-Type": "application/json"},
        mode: 'no-cors'
    }
    const Status=null;

    const userAction = async () => {
        console.log("inside user action");

        await fetch('https://us-east1-healthcarepci.cloudfunctions.net/StatusCheck',options)
        .then(response => response.json())
        .then(json => console.log(json))
    }
    //if sucessful response reset the button and enable inputs
    const addStatus =  ()=> {
        userAction();
        //console.log(data);
        document.getElementById("statusArea").innerHTML += "sd";
        
    }
    addStatus();

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