(function () {
  "use strict";

  var toggle = document.getElementById("previewToggle");
  var state = document.getElementById("previewState");

  if (!toggle || !state) {
    return;
  }

  toggle.addEventListener("click", function () {
    var isOn = document.body.classList.toggle("preview-on");
    toggle.setAttribute("aria-pressed", String(isOn));
    state.textContent = isOn ? "On" : "Off";
  });
})();
