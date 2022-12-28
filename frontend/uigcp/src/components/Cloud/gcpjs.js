const button = document.querySelector("#submit-button");
button.addEventListener("click", () => {
  const value = document.querySelector("#value").value;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    mode: "no-cors",
  };
  let ur = "https://us-east1-healthcarepci.cloudfunctions.net/test?message=";
  const url = ur.concat(value);
  console.log(url);
  fetch(url, requestOptions)
    .then((response) => console.log("response", response))
    .catch((err) => console.log(err));
});
