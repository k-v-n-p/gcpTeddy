// Select the button element

// const cors = require("cors")({ origin: true });

const button = document.querySelector("#submit-button");

// Add an event listener for the "click" event on the button
button.addEventListener("click", () => {
  // Get the selected value from the dropdown menu
  const value = document.querySelector("#value").value;

  // Create a POST request with the key-value parameter as the body
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "no-cors",
    //   body: JSON.stringify({ message: value }),
  };

  // Set the URL for the API endpoint
  let ur = "https://us-east1-healthcarepci.cloudfunctions.net/test?message=";
  const url = ur.concat(value);
  console.log(url);

  // Send the request and parse the response as JSON
  //   fetch(url, requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });

  fetch(url, requestOptions)
    .then((response) => console.log("response", response))
    // .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
