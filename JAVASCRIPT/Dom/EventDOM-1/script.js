console.log("Welcome to my second dom");

function changeText() {
  document.getElementById("handler-status").innerText =
    "The Default Text is changed";
}

const getEventButton = document.getElementById("event-button");
getEventButton.addEventListener("click", function () {
  document.getElementById("handler-status").innerText =
    "Text chaged by Event Listener";
});





//Button evenListener
document
  .getElementById("sub-btn")
  .addEventListener("click", function changeText() {
    var inputValue = document.getElementById("input-value").value;

    const inputText = (document.getElementById("change-text").innerText =
      inputValue);

    document.getElementById("input-value").value = "";
  });
