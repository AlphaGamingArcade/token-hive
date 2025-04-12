$(document).ready(function () {
  if (localStorage.getItem("isDarkMode") === "true") {
    $(".body-dark").removeClass("dark-mode");
    document.getElementById("switch__input").checked = true;
  } else {
    $(".body-dark").addClass("dark-mode");
    document.getElementById("switch__input").checked = false;
  }
  document.body.classList.remove("hide-content");

  $(".dark-mode-btn").click(function () {
    console.log("asd");
    localStorage.setItem("isDarkMode", true);
    $(".body-dark").removeClass("dark-mode");
  });
  $(".light-mode-btn").click(function () {
    console.log("asd");
    localStorage.setItem("isDarkMode", false);
    $(".body-dark").addClass("dark-mode");
  });
  $(".switch__input").click(function () {
    if (document.getElementById("switch__input").checked == false) {
      localStorage.setItem("isDarkMode", false);
      $(".body-dark").addClass("dark-mode");
    } else {
      localStorage.setItem("isDarkMode", true);
      $(".body-dark").removeClass("dark-mode");
    }
  });
});
