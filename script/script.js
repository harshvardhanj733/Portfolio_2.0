const submit = () => {
  window.alert("Form Submitted Successfully!!");
};

const R = document.getElementById("resume");
R.addEventListener("click", () => {
  window.EventTarget = "__blank";
  window.location = "/resume";
});
