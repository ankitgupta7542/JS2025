var requestStatus = document.querySelector("h2");
var btn = document.querySelector("button");

var flag = true;
btn.addEventListener("click", function () {
  if (flag) {
    requestStatus.innerHTML = "Friends ✅";
    requestStatus.style.color = "green";
    btn.style.backgroundColor = "red";
    btn.innerHTML = "Remove Friend";
    flag = false;
  } else {
    requestStatus.innerHTML = "Strangers 🐸";
    requestStatus.style.color = "red";
    btn.style.backgroundColor = "red";
    btn.innerHTML = "Add friend";
    flag = true;
  }
});
