function changetheme() {
  buttonvalue = document.getElementById("themebutton").value;
  button = document.getElementById("themebutton");

  if (buttonvalue == "changeTheme") {
    document.getElementById("themebutton").value = "reverTheme";
    document.body.classList.toggle("dark");
    button.innerHTML = "Alternative Theme";
  } else {
    document.getElementById("themebutton").value = "changeTheme";
    document.body.classList.toggle("dark");
    button.innerHTML = "Normal Theme";
  }
}